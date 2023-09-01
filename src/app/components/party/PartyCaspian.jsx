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
import Popup from "@components/popup/Popup";
import { useState } from "react";

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

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <section className="party rounded-default bg-sky lg:mb-3 mb-2">
        <Container className="party__container lg:py-10 container flex flex-col items-center py-6">
          <h2 className="party__title title font-seymour text-blue max-w-3xl m-auto mb-3 text-6xl text-center">
            {data.title}
          </h2>
          <div className="party__content lg:flex-row-reverse flex flex-col-reverse items-center w-full gap-4 text-left">
            <div className="party__slider flex-grow w-full lg:w-[553px]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                {data.slider.map((slide, key) => {
                  return (
                    <SwiperSlide
                      key={`__${key}__`}
                      className="party__slider-slide rounded-[99px]"
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

            <div className="party__entry lg:pr-16">
              <div className="party__text text-sm lg:text-lg text-blue font-medium leading-6 leading-[30px]">
                {data.text}
              </div>
            </div>
          </div>
          <button
            className="party__button  mt-11 lg:mt-20 lg:px-14 lg:py-7 lg:text-2xl bg-blue inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white rounded-full"
            aria-label="Заказать праздник"
            onClick={() => setOpenPopup(!openPopup)}
          >
            Заказать праздник
          </button>
          <CaspianIconOne className="absolute w-[214px] h-[260px] left-[230px] z-10 bottom-10 pointer-events-none hidden lg:block" />
          <CaspianIconTwo className="absolute w-[99px] h-[71px] lg:w-[199px] lg:h-[144px] left-0 lg:left-auto lg:right-14 z-10 bottom-28 lg:bottom-28" />
        </Container>
      </section>

      {openPopup && <Popup visible={setOpenPopup} />}
    </>
  );
};

export default PartyTanuki;
