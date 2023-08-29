"use client";

import Container from "../container/Container";
import Image from "next/image";
import { useState, useEffect } from "react";

import SliderImgOne from "@images/content/toychips/toy-chip-1.webp";
import SliderImgTwo from "@images/content/toychips/toy-chip-2.webp";
import SliderImgThree from "@images/content/toychips/toy-chip-3.webp";
import SliderImgFourth from "@images/content/toychips/toy-chip-4.webp";
import SliderImgFive from "@images/content/toychips/toy-chip-5.webp";
import SliderImgSix from "@images/content/toychips/toy-chip-6.webp";
import PlusIcon from "@components/icons/PlusIcon";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const ToyChips = () => {
  const data = {
    badge: "6 новых фишек-игрушек",
    slider: [
      {
        image: SliderImgOne,
        alt: "slider img 1",
        title: "Повар",
        text: "Готовит вкуснои весело",
      },
      {
        image: SliderImgTwo,
        alt: "slider img 2",
        title: "Маня-официант",
        text: "Проводит к столуи примет заказ",
      },
      {
        image: SliderImgThree,
        alt: "slider img 3",
        title: "Курьер",
        text: "Доставит заказ быстрее ветра",
      },
      {
        image: SliderImgFourth,
        alt: "slider img 4",
        title: "Ниндзя-сушист",
        text: "Готовит вкуснои быстро",
      },
      {
        image: SliderImgFive,
        alt: "slider img 5",
        title: "Бармен",
        text: "Напоит вкусно и быстро",
      },
      {
        image: SliderImgSix,
        alt: "slider img 6",
        title: "Хостес Ангелина",
        text: "Проводит к столу и улыбнется",
      },
    ],
  };

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 1024px)");
    let mySwiper;

    const enableSwiper = () => {
      mySwiper = new SwiperCore(".swiper-container", {
        spaceBetween: 0,
        slidesPerView: 2.3,
        autoHeight: true,
      });
    };

    const breakpointChecker = () => {
      if (breakpoint.matches) {
        if (mySwiper !== undefined) {
          mySwiper.destroy(true, true);
        }
      } else {
        enableSwiper();
      }
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

    return () => {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      breakpoint.removeListener(breakpointChecker);
    };
  }, []);

  return (
    <section className="toy-chips">
      <Container className="toy-chips__container lg:pt-10 container flex flex-col items-center pt-5 pb-16">
        <div className="toy-chips__badge-w lg:mb-10 flex flex-col items-center mb-6">
          <PlusIcon className="lg:w-[42px] lg:h-[42px] w-[32px] h-[32px]" />
          <div className="toy-chips__badge badge badge_orange lg:mt-3 mt-2">
            {data.badge}
          </div>
        </div>

        <div className="toy-chips__slider w-full">
          <div className="swiper-container">
            <div className="swiper-wrapper lg:grid lg:grid-cols-3 flex">
              {data.slider.map((slide, key) => (
                <SwiperSlide
                  key={`__${key}__`}
                  className="kids-box__slider-slide lg:px-0 px-2 mb-4"
                >
                  <div className="toy-chips__item lg:flex-row lg:items-start flex flex-col">
                    <figure className="toy-chips__image lg:px-8 lg:py-2 px-2 py-1">
                      <Image
                        className="flex-grow flex-shrink-0"
                        src={slide.image.src}
                        alt={slide.alt}
                        width={slide.image.width}
                        height={slide.image.height}
                        blurDataURL={slide.image.blurDataURL}
                        placeholder="blur"
                      />
                    </figure>

                    <div className="toy-chips__entry lg:py-6">
                      <div className="toy-chips__item-title lg:text-2xl lg:mb-2 mb-1 text-lg font-bold leading-tight">
                        {slide.title}
                      </div>
                      <div className="toy-chips__item-text lg:text-base lg:leading-6 text-xs font-medium leading-normal">
                        {slide.text}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ToyChips;
