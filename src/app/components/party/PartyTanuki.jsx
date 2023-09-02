"use client";

import Container from "../container/Container";
import Image from "next/image";
import SliderImgOne from "@images/content/party/tanuki/img-1.webp";
import SliderImgTwo from "@images/content/party/tanuki/img-2.webp";
import SliderImgThree from "@images/content/party/tanuki/img-3.webp";
import Button from "@components/ui/button/Button";
import Popup from "@components/popup/Popup";
import Bear from "@images/content/bears/bear-1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useState } from "react";
const PartyTanuki = () => {
  const data = {
    title: "Праздник в стиле Тануки",
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

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <section className="party rounded-default bg-[#f5f3f2] mb-2 lg:mb-3">
        <Container className="party__container lg:py-10 container flex flex-col items-center py-6">
          <h2 className="party__title title text-red max-w-3xl m-auto mb-3 text-6xl text-center">
            {data.title}
          </h2>
          <div className="party__content lg:flex-row flex flex-col-reverse items-center w-full gap-4 text-left">
            <div className="party__slider flex-grow w-full md:w-[553px]">
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

            <div className="party__entry lg:pl-16">
              <div className="party__text text-sm lg:text-lg font-medium leading-6 lg:leading-[30px]">
                {data.text}
              </div>
            </div>
          </div>
          <button
            className="party__button mt-11 lg:mt-20 lg:px-14 lg:py-7 lg:text-2xl bg-red inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white rounded-full"
            aria-label="Заказать праздник"
            onClick={() => setOpenPopup(!openPopup)}
          >
            Заказать праздник
          </button>
          <figure className="party__bear w-[140px] h-[140px] lg:w-[366px] lg:h-[374px] absolute left-0 z-10 bottom-28 lg:bottom-0">
            <Image
              src={Bear.src}
              alt="Bear"
              width={Bear.width}
              height={Bear.height}
              blurDataURL={Bear.blurDataURL}
              placeholder="blur"
            />
          </figure>
        </Container>
      </section>
      {openPopup && <Popup visible={setOpenPopup} />}
    </>
  );
};

export default PartyTanuki;
