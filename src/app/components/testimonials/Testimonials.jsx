"use client";

import Image from "next/image";
import Container from "@components/container/Container";
import UserOne from "@images/content/testimonials/user-1.webp";
import UserTwo from "@images/content/testimonials/user-2.webp";
import UserThree from "@images/content/testimonials/user-3.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";

const Testimonials = () => {
  const data = {
    title: "Отзывы",

    slider: [
      {
        image: UserOne,
        alt: "Name 1",
        name: "Мария Спиридонова",
        text: "Были с детьми на мастер-классе, все на высшем уровне, дети в восторге",
      },
      {
        image: UserTwo,
        alt: "Name 2",
        name: "Владислав Бесчатных",
        text: "Сказать что все понравилось, ничего не сказать! Просто супер! Ведущий класс, и конкурсы интересне!",
      },
      {
        image: UserThree,
        alt: "Name 3",
        name: "Ника Вавилова",
        text: "Самые позитивные впечатления от праздника, достойная организация, аниматоры пусечки)), еще обязательно посетим мастер-класс! Еще раз спасибо за праздник!",
      },
    ],
  };
  return (
    <section className="testimonials">
      <Container className="testimonials__container lg:pt-16 container pt-8">
        <h2 className="testimonials__title title lg:mb-10 mb-5 text-6xl text-center">
          {data.title}
        </h2>
      </Container>
      {data.slider && (
        <div className="testimonials__slider lg:pb-20 container pb-8">
          <Swiper
            // modules={[Navigation]}
            // centeredSlides={true}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
              },
              425: {
                slidesPerView: 1.6,
              },
              540: {
                slidesPerView: 2.4,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data.slider.map((slide, key) => (
              <SwiperSlide
                key={`__${key}__`}
                className="testimonials__slide lg:px-3 px-1"
              >
                <div key={`__${key}__`} className="testimonials__item">
                  <div className="testimonials__entry min-h-[136px] lg:min-h-[262px] px-7 lg:px-11 py-7  lg:py-10  flex flex-col justify-center min-h-40 lg:mr-5">
                    <div className="testimonials__text line-clamp-3 lg:line-clamp-7 text-sm lg:text-lg font-medium leading-5 lg:leading-[30px]">
                      {slide.text}
                    </div>
                  </div>
                  <div className="testimonials__author lg:mt-8 flex items-center gap-2 pl-5 mt-5">
                    <div className="testimonials__image w-12 lg:w-[76px]">
                      <Image
                        src={slide.image.src}
                        alt={slide.alt}
                        width={slide.image.width}
                        height={slide.image.height}
                        blurDataURL={slide.image.blurDataURL}
                        placeholder="blur"
                      />
                    </div>
                    <div className="testimonials__name lg:text-lg lg:leading-6 w-32 text-sm font-semibold leading-tight">
                      {slide.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
