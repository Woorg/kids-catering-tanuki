import clsx from "clsx";
import Container from "../container/Container";
import Image from "next/image";
import atmoImage from "/public/assets/images/content/atmo/atmo.webp";

const Atmosphere = async ({ className, images }) => {
  const data = {
    title: "Атмосфера наших праздников",
  };

  return (
    <section className={clsx("atmosphere", className)}>
      <h2
        className={clsx(
          "atmosphere__title container mb-7 font-seymour text-center text-black text-7xl font-normal"
        )}
      >
        {data.title}
      </h2>

      <div className="atmosphere__images">
        <figure className={clsx("atmosphere__image")}>
          <Image
            className=""
            src={atmoImage.src}
            alt="image"
            style={{ maxWidth: "100%", objectFit: "cover" }}
            width={atmoImage.width}
            height={atmoImage.height}
            blurDataURL={atmoImage.blurDataURL}
            placeholder="blur"
          />
        </figure>
      </div>
    </section>
  );
};

export default Atmosphere;
