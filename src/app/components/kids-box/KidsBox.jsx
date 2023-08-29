"use client";

import Container from "../container/Container";
import Image from "next/image";
import SliderImgOne from "@images/content/kidsbox/img-1.webp";
import SliderImgTwo from "@images/content/kidsbox/img-2.webp";
import SliderImgThree from "@images/content/kidsbox/img-3.webp";
import Button from "@components/ui/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const KidsBox = () => {
  const data = {
    title: "Вступайте в игру!",
    badge: "Новый состав",

    slider: [
      {
        image: SliderImgOne,
        alt: "slider img 1",
        text: "Kid`s Box с шашлычками из курицы",
      },
      {
        image: SliderImgTwo,
        alt: "slider img 2",
        text: "Kid`s Box с куриными наггетсами",
      },
      {
        image: SliderImgThree,
        alt: "slider img 3",
        text: "Kid`s Box с куриным бургером",
      },
    ],
  };
  return (
    <section className="party party_kids-box bg-red mb-3">
      <Container className="party__container container flex flex-col items-center py-10">
        <h2 className="party__title m-auto mb-3 text-center max-w-3xl text-6xl font-seymour text-white">
          {data.title}
        </h2>
        <div className="party__text badge">{data.badge}</div>
        <div className="party__content w-full flex items-center text-left gap-4 ">
          <div className="party__slider flex-grow w-[553px]">
            <Swiper
              modules={[Pagination]}
              grabCursor={true}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
              }}
              spaceBetween={0}
              autoHeight={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <button className="party__pagination">
                {/* <SliderButton /> */}
              </button>

              {data.slider.map((slide, key) => {
                return (
                  <SwiperSlide
                    key={`__${key}__`}
                    className="party__slider-slide "
                  >
                    <div className="party__slider-item">
                      <figure className="party__slider-image mb-6">
                        <Image
                          src={slide.image.src}
                          alt={slide.alt}
                          width={slide.image.width}
                          height={slide.image.height}
                          blurDataURL={slide.image.blurDataURL}
                          placeholder="blur"
                        />
                      </figure>

                      <div className="party__entry min-h-[50px] px-10 max-w-xs">
                        <div className="party__text text-lg font-semibold leading-6 text-white">
                          {slide.text}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default KidsBox;
