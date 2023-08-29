import clsx from "clsx";
import Container from "../container/Container";
import Image from "next/image";
import atmoImage from "/public/assets/images/content/atmo/atmo.webp";
import atmoImageMob from "/public/assets/images/content/atmo/atmo-mob.webp";

const Atmosphere = async ({ className, images }) => {
  const data = {
    title: "Атмосфера наших праздников",
  };

  return (
    <section className={clsx("atmosphere", className)}>
      <h2
        className={clsx(
          "atmosphere__title title container  font-seymour text-center text-black text-7xl font-normal"
        )}
      >
        {data.title}
      </h2>

      <figure
        className={clsx("atmosphere__image flex justify-center mt-3 lg:mt-5")}
      >
        <Image
          className="lg:block hidden"
          src={atmoImage.src}
          alt="image"
          style={{ maxWidth: "100%", objectFit: "cover" }}
          width={atmoImage.width}
          height={atmoImage.height}
          blurDataURL={atmoImage.blurDataURL}
          placeholder="blur"
        />
        <Image
          className="lg:hidden"
          src={atmoImageMob.src}
          alt="image"
          style={{ maxWidth: "100%", objectFit: "cover" }}
          width={atmoImageMob.width}
          height={atmoImageMob.height}
          blurDataURL={atmoImageMob.blurDataURL}
          placeholder="blur"
        />
      </figure>
    </section>
  );
};

export default Atmosphere;
