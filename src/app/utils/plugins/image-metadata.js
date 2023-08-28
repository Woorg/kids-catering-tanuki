import imageSize from "image-size";
import { getPlaiceholder } from "plaiceholder";
import path from "path";
import { visit } from "unist-util-visit";
import { promisify } from "util";
import fetch from "node-fetch";

const sizeOf = promisify(imageSize);

const isImageNode = (node) =>
  node.type === "element" &&
  node.tagName === "img" &&
  node.properties &&
  typeof node.properties.src === "string";

const addProps = async (node) => {
  let res, blur64;
  const isExternal = node.properties.src.startsWith("http");

  if (!isExternal) {
    res = await sizeOf(path.join(process.cwd(), "public", node.properties.src));
    blur64 = (await getPlaiceholder(node.properties.src)).base64;
  } else {
    const imageRes = await fetch(node.properties.src);
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res = await imageSize(buffer);
    blur64 = (await getPlaiceholder(buffer)).base64;
  }

  if (!res) throw new Error(`Invalid image with src "${node.properties.src}"`);

  node.properties.width = res.width;
  node.properties.height = res.height;

  node.properties.blurDataURL = blur64;
  node.properties.placeholder = "blur";
};

const imageMetadata = () => async (tree) => {
  const images = [];

  visit(tree, "element", (node) => {
    if (isImageNode(node)) {
      images.push(node);
    }
  });

  for (const image of images) {
    await addProps(image);
  }

  return tree;
};

export default imageMetadata;
