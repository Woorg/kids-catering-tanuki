"use client";

import Container from "../container/Container";
import Image from "next/image";
import SliderImgOne from "@images/content/party/caspian/img-1.webp";
import SliderImgTwo from "@images/content/party/caspian/img-2.webp";
import SliderImgThree from "@images/content/party/caspian/img-3.webp";
import Button from "@components/ui/button/Button";
import CaspianIconOne from "@components/icons/CaspianIconOne";
import CaspianIconTwo from "@components/icons/CaspianIconTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const PartyTanuki = () => {
  const data = {
    title: "Праздник в стиле Каспийка",
    text: "Появление малыша приносит счастье и радость в каждый дом! Чтобы поддержать будущую маму, RIBAMBELLE предлагает устроить незабываемый праздник Baby Shower. По-домашнему уютная и милая вечеринка в честь мамы и будущего малыша обычно проходит в формате девичника-сюрприза с самыми близкими. Команда Ribambelle поможет найти и оформить красивую и светлую площадку, позаботится об угощениях, анимационной программе и приглашенияхдля гостей.",

    slider: [
      {
        image: SliderImgOne,
        alt: "slider img 1",
      },
      {
        image: SliderImgTwo,
        alt: "slider img 2",
      },
      {
        image: SliderImgThree,
        alt: "slider img 3",
      },
    ],
  };
  return (
    <section className="party bg-sky mb-3">
      <Container className="party__container container flex flex-col items-center py-10">
        <h2 className="party__title m-auto mb-3 text-center max-w-3xl text-6xl font-seymour text-blue">
          {data.title}
        </h2>
        <div className="party__content w-full flex flex-row-reverse items-center text-left gap-4 ">
          <div className="party__slider flex-grow w-[553px]">
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
              {data.slider.map((slide, key) => {
                return (
                  <SwiperSlide
                    key={`__${key}__`}
                    className="party__slider-slide bg-transparent"
                  >
                    <div className="party__slider-item ">
                      <figure className="party__slider-image ">
                        <Image
                          src={slide.image.src}
                          alt={slide.alt}
                          width={slide.image.width}
                          height={slide.image.height}
                          blurDataURL={slide.image.blurDataURL}
                          placeholder="blur"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="party__entry pr-16">
            <div className="party__text text-lg text-blue  font-medium leading-[30px]">
              {data.text}
            </div>
          </div>
        </div>
        <Button
          className="faq__button mt-20  lg:px-14 lg:py-7 bg-blue rounded-full justify-center items-center inline-flex text-center text-white lg:text-2xl font-bold tracking-tight "
          href="/button"
        >
          Заказать праздник
        </Button>
        <CaspianIconOne className="absolute w-[214px] h-[260px] left-[252px] z-10 bottom-10" />
        <CaspianIconTwo className="absolute w-[199px] h-[144px] right-0 z-10 bottom-14" />
      </Container>
    </section>
  );
};

export default PartyTanuki;
