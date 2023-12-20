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
import useModal from "../../hooks/useModal";

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

  const modal = useModal();

  return (
    <>
      <section className="party rounded-default bg-horn lg:mb-3 mb-2">
        <Container className="party__container lg:py-10 container flex flex-col items-center py-6">
          <h2 className="party__title title font-seymour max-w-3xl m-auto mb-3 text-6xl text-center text-black">
            {data.title}
          </h2>
          <div className="party__content lg:flex-row flex flex-col-reverse items-center w-full gap-4 text-left">
            <div className="party__slider flex-grow w-full sm:w-[553px] md:w-[553px]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                {data.slider.map((slide, key) => {
                  return (
                    <SwiperSlide
                      key={`__${key}__`}
                      className="party__slider-slide rounded-default"
                    >
                      <div className="party__slider-item">
                        <figure className="party__slider-image">
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

            <div className="party__entry lg:pl-16">
              <div className="party__text text-sm lg:text-lg text-black font-medium leading-6 lg:leading-[30px]">
                {data.text}
              </div>
            </div>
          </div>

          <button
            className="party__button mt-11 lg:mt-20 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
            aria-label="Заказать праздник"
            onClick={modal.open}
          >
            Заказать праздник
          </button>
          <HornIcon className="absolute w-[142px] h-[112px] lg:w-[324px] lg:h-[257px] left-0 z-10 bottom-[114px] lg:bottom-10" />
        </Container>
      </section>
    </>
  );
};

export default PartyHorn;
