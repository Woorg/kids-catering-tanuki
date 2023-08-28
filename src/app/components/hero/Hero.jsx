import Container from "@components/container/Container";
import LogoIcon from "@components/icons/LogoIcon";
import Image from "next/image";
import BearOne from "@images/content/hero/bears/bear-1.webp";
import BearTwo from "@images/content/hero/bears/bear-2.webp";
import BearThree from "@images/content/hero/bears/bear-3.webp";

import SliderImgOne from "@images/content/hero/slider/img-1.webp";
import SliderImgTwo from "@images/content/hero/slider/img-2.webp";
import SliderImgThree from "@images/content/hero/slider/img-3.webp";
import SliderImgFourth from "@images/content/hero/slider/img-4.webp";

const Hero = () => {
  const data = {
    title: "Детские праздникис «Tануки»",
    bears: [
      {
        image: <BearOne />,
        alt: "bear 1",
      },
      {
        image: <BearTwo />,
        alt: "bear 2",
      },
      {
        image: <BearThree />,
        alt: "bear 3",
      },
    ],
    slider: [
      {
        image: <SliderImgOne />,
        alt: "slider img 1",
      },
      {
        image: <SliderImgTwo />,
        alt: "slider img 2",
      },
      {
        image: <SliderImgThree />,
        alt: "slider img 3",
      },
      {
        image: <SliderImgFourth />,
        alt: "slider img 4",
      },
    ],
  };

  return (
    <section className="hero bg-red">
      <Container className="hero__container container py-16">
        <LogoIcon className="hero__logo" />
        <h1 className="hero__title font-seymour  text-center text-white text-6xl font-normal">
          {data.title}
        </h1>
        {data.bears && (
          <div className="hero__bears flex jc w">
            {data.bears.map((bear, key) => {
              return (
                <figure key={`__${key}__`} className="hero__bear">
                  <Image
                    src={bear.image.type.src}
                    alt={bear.alt}
                    width={bear.image.type.width}
                    height={bear.image.type.height}
                    blurDataURL={bear.image.type.blurDataURL}
                    placeholder="blur"
                  />
                </figure>
              );
            })}
          </div>
        )}

        {data.slider && <div className="hero__slider flex"></div>}
      </Container>
    </section>
  );
};

export default Hero;
