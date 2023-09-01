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
    title: "Обновленный Kids Box",
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
    <section className="kids-box rounded-default bg-red lg:mb-3 mb-2">
      <Container className="kids-box__container container flex flex-col items-center py-10">
        <h2 className="kids-box__title title font-seymour max-w-3xl m-auto mb-3 text-6xl text-center text-white">
          {data.title}
        </h2>
        <div className="kids-box__badge badge mb-5">{data.badge}</div>
        <div className="kids-box__content flex items-center w-full gap-4 text-left">
          <div className="kids-box__slider flex-grow w-[553px]">
            <Swiper
              modules={[Pagination]}
              grabCursor={true}
              pagination={{
                el: ".kids-box__pagination",
                clickable: true,
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
              <div className="kids-box__pagination z-10 flex items-center justify-center gap-2 mt-10">
                {/* <SliderButton /> */}
              </div>

              {data.slider.map((slide, key) => {
                return (
                  <SwiperSlide
                    key={`__${key}__`}
                    className="kids-box__slider-slide "
                  >
                    <div className="kids-box__slider-item flex flex-col items-center px-4">
                      <figure className="kids-box__slider-image lg:mb-6 mb-4">
                        <Image
                          src={slide.image.src}
                          alt={slide.alt}
                          width={slide.image.width}
                          height={slide.image.height}
                          blurDataURL={slide.image.blurDataURL}
                          placeholder="blur"
                        />
                      </figure>

                      <div className="kids-box__entry min-h-[50px] px-10 max-w-xs">
                        <div className="kids-box__text lg:text-lg text-base font-semibold leading-6 text-white">
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
