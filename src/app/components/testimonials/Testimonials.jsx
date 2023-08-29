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
      <Container className="testimonials__container py-16 container">
        <h2 className="testimonials__title mb-10 text-center text-6xl font-seymour ">
          {data.title}
        </h2>

        {data.slider && (
          <div className="testimonials__slider container">
            <Swiper
              // modules={[Navigation]}
              spaceBetween={0}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.slider.map((slide, key) => (
                <SwiperSlide
                  key={`__${key}__`}
                  className="testimonials__slide px-3"
                >
                  <div key={`__${key}__`} className="testimonials__item">
                    <div className="testimonials__entry flex flex-col justify-center px-12 h-80">
                      <div className="testimonials__text text-lg font-medium leading-[30px] ">
                        {slide.text}
                      </div>
                    </div>
                    <div className="testimonials__author pl-5 flex items-center gap-2">
                      <div className="testimonials__image">
                        <Image
                          src={slide.image.src}
                          alt={slide.alt}
                          width={slide.image.width}
                          height={slide.image.height}
                          blurDataURL={slide.image.blurDataURL}
                          placeholder="blur"
                        />
                      </div>
                      <div className="testimonials__name text-lg font-semibold leading-6   w-32">
                        {slide.name}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
