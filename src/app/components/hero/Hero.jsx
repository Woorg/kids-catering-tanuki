"use client";

import Image from "next/image";
import Container from "@components/container/Container";
import LogoIcon from "@components/icons/LogoIcon";
import SliderButton from "@components/icons/SliderButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Bear from "@components/bear/Bear";
import SliderItem from "@components/slideritem/SliderItem";
import Calc from "@components/calc/Calc";

// Import images
import BearOne from "@images/content/bears/bear-1.webp";
import BearTwo from "@images/content/bears/bear-2.webp";
import BearThree from "@images/content/bears/bear-3.webp";
import SliderImgOne from "@images/content/hero/slider/img-1.webp";
import SliderImgTwo from "@images/content/hero/slider/img-2.webp";
import SliderImgThree from "@images/content/hero/slider/img-3.webp";
import SliderImgFourth from "@images/content/hero/slider/img-4.webp";
import SliderImgMobOne from "@images/content/hero/slider/img-mob-1.webp";
import SliderImgMobTwo from "@images/content/hero/slider/img-mob-2.webp";
import SliderImgMobThree from "@images/content/hero/slider/img-mob-3.webp";
import SliderImgMobFourth from "@images/content/hero/slider/img-mob-4.webp";

const Hero = () => {
  const data = {
    title: "Детские праздники с «Tануки»",
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
        imageMob: SliderImgMobOne,
        alt: "slider img 1",
        title: "Анимационные программы",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgTwo,
        imageMob: SliderImgMobTwo,
        alt: "slider img 2",
        title: "Kулинарный Мастер-класс",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgThree,
        imageMob: SliderImgMobThree,
        alt: "slider img 3",
        title: "Tворческий Мастер-класс",
        text: "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось. А ещё она приготовила игры, конкурсы, сюрпризы. Вас ждёт много серебряного блеска и зажигательной музыки, ну и как же без огромного шара с блестками и маленькими шариками! Танцуй вместе со Звездочкой и стань самым счастливым!",
      },
      {
        image: SliderImgFourth,
        imageMob: SliderImgMobFourth,
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
        <h1 className="hero__title title mb-4 lg:mb-8  font-seymour text-6xl font-normal text-center text-white">
          {data.title}
        </h1>
        <div className="hero__top mb-7 lg:mb-0 flex flex-col">
          {data.bears && (
            <div className="hero__bears -mt-7 lg:mt-0 order-2 lg:order-1 flex relative z-10 justify-center">
              {data.bears.map((bear, key) => (
                <Bear
                  key={key}
                  src={bear.image.src}
                  alt={bear.alt}
                  width={bear.image.width}
                  height={bear.image.height}
                  blurDataURL={bear.image.blurDataURL}
                />
              ))}
            </div>
          )}

          <div className="hero__slider order-1 lg:order-2 lg:mt-4">
            <Swiper
              className="hero__swiper"
              modules={[Navigation]}
              // centeredSlides={true}
              spaceBetween={0}
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                },

                // 425: {
                //   slidesPerView: 1.6,
                // },
                // 540: {
                //   slidesPerView: 2.4,
                // },
                1024: {
                  slidesPerView: 1.3,
                },
                1280: {
                  slidesPerView: 1.6,
                },
              }}
              navigation={{
                prevEl: ".hero__slider-prev",
                nextEl: ".hero__slider-next",
              }}
            >
              <div className="hero__navigation w-36 lg:w-auto ">
                <button className="hero__slider-prev" aria-label="Назад">
                  <SliderButton className="w-16 h-16" />
                </button>
                <button className="hero__slider-next" aria-label="Вперед">
                  <SliderButton className="w-16 h-16" />
                </button>
              </div>

              {data.slider.map((slide, key) => (
                <SwiperSlide
                  key={`__${key}__`}
                  className="hero__slider-slide px-2 lg:px-2 "
                >
                  <SliderItem
                    image={slide.image}
                    imageMob={slide.imageMob}
                    alt={slide.alt}
                    title={slide.title}
                    text={slide.text}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>

      <Container>
        <Calc className="hero__calc" />
      </Container>
    </section>
  );
};

export default Hero;
