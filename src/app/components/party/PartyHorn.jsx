"use client";

import Container from "../container/Container";
import Image from "next/image";
import SliderImgOne from "@images/content/party/horn/img-1.webp";
import SliderImgTwo from "@images/content/party/horn/img-2.webp";
import SliderImgThree from "@images/content/party/horn/img-3.webp";
import Button from "@components/ui/button/Button";
import HornIcon from "@components/icons/HornIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const PartyHorn = () => {
  const data = {
    title: "Праздник в стиле ЁРШ",
    text: "Появление малыша приносит счастье и радость в каждый дом! Чтобы поддержать будущую маму, RIBAMBELLE предлагает устроить незабываемый праздник Baby Shower. По-домашнему уютная и милая вечеринка в честь мамы и будущего малыша обычно проходит в формате девичника-сюрприза с самыми близкими. Команда Ribambelle поможет найти и оформить красивую и светлую площадку, позаботится об угощениях, анимационной программе и приглашениях для гостей.",

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
    <section className="party bg-horn mb-3">
      <Container className="party__container container flex flex-col items-center py-10">
        <h2 className="party__title m-auto mb-3 text-center max-w-3xl text-6xl font-seymour text-black">
          {data.title}
        </h2>
        <div className="party__content w-full flex items-center text-left gap-4 ">
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

          <div className="party__entry pl-16">
            <div className="party__text text-lg text-black font-medium leading-[30px]">
              {data.text}
            </div>
          </div>
        </div>
        <Button
          className="faq__button mt-20  lg:px-14 lg:py-7 bg-black rounded-full justify-center items-center inline-flex text-center text-white lg:text-2xl font-bold tracking-tight "
          href="/button"
        >
          Заказать праздник
        </Button>
        <HornIcon className="absolute w-[324px] h-[257px] left-0 z-10 bottom-10" />
      </Container>
    </section>
  );
};

export default PartyHorn;
