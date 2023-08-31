"use client";

import Image from "next/image";
import Container from "@components/container/Container";
import LogoIcon from "@components/icons/LogoIcon";
import BearOne from "@images/content/bears/bear-1.webp";
import BearTwo from "@images/content/bears/bear-2.webp";
import BearThree from "@images/content/bears/bear-3.webp";

import SliderImgOne from "@images/content/hero/slider/img-1.webp";
import SliderImgTwo from "@images/content/hero/slider/img-2.webp";
import SliderImgThree from "@images/content/hero/slider/img-3.webp";
import SliderImgFourth from "@images/content/hero/slider/img-4.webp";
import SliderButton from "@components/icons/SliderButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
// import "swiper/scss/scrollbar";

import Calc from "@components/calc/Calc";

const Hero = () => {
  const data = {
    title: "Детские праздникис «Tануки»",
    bears: [
      {
        image: BearOne,
        alt: "bear 1",
      },
      {
        image: BearTwo,
        alt: "bear 2",
      },
      {
        image: BearThree,
        alt: "bear 3",
      },
    ],
    slider: [
      {
        image: SliderImgOne,
        alt: "slider img 1",
        title: "Анимационные программы",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgTwo,
        alt: "slider img 2",
        title: "Kулинарный Мастер-класс",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgThree,
        alt: "slider img 3",
        title: "Tворческий Мастер-класс",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgFourth,
        alt: "slider img 4",
        title: "Шоу программа",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
    ],
  };

  return (
    <section className="hero rounded-default bg-red lg:pb-16 pb-6">
      <Container className="hero__container lg:pt-16 container pt-8">
        <LogoIcon className="hero__logo m-auto mb-6 lg:mb-8 lg:w-[200px] lg:h-[21px] w-[162px] h-[17px]" />
        <h1 className="hero__title title mb-14 font-seymour text-6xl font-normal text-center text-white">
          {data.title}
        </h1>
        {data.bears && (
          <div className="hero__bears w flex justify-center">
            {data.bears.map((bear, key) => {
              return (
                <figure key={`__${key}__`} className="hero__bear">
                  <Image
                    src={bear.image.src}
                    alt={bear.alt}
                    width={bear.image.width}
                    height={bear.image.height}
                    blurDataURL={bear.image.blurDataURL}
                    placeholder="blur"
                  />
                </figure>
              );
            })}
          </div>
        )}
      </Container>
      <div className="hero__slider mt-4">
        <Swiper
          modules={[Navigation]}
          centeredSlides={true}
          spaceBetween={16}
          slidesPerView={1.6}
          navigation={{
            prevEl: ".hero__slider-prev",
            nextEl: ".hero__slider-next",
          }}
        >
          <button className="hero__slider-prev">
            <SliderButton />
          </button>
          <button className="hero__slider-next">
            <SliderButton />
          </button>

          {data.slider.map((slide, key) => {
            return (
              <SwiperSlide key={`__${key}__`}>
                <div className="hero__slider-item flex items-center w-full gap-4 p-4">
                  <figure className="hero__slider-image flex-grow w-[480px]">
                    <Image
                      src={slide.image.src}
                      alt={slide.alt}
                      width={slide.image.width}
                      height={slide.image.height}
                      blurDataURL={slide.image.blurDataURL}
                      placeholder="blur"
                    />
                  </figure>

                  <div className="hero__slider-entry flex-shrink w-[380px]">
                    <h3 className="hero__slider-title pr-5 mb-6 text-2xl font-bold text-white">
                      {slide.title}
                    </h3>

                    <div className="hero__slider-text text-md font-medium text-white">
                      {slide.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Container>
        <Calc className="hero__calc" />
      </Container>
    </section>
  );
};

export default Hero;
