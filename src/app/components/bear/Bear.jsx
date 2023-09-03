// Bear.js
import Image from "next/image";

const Bear = ({ src, alt, width, height, blurDataURL }) => (
  <figure className="hero__bear">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      blurDataURL={blurDataURL}
      placeholder="blur"
    />
  </figure>
);

export default Bear;
