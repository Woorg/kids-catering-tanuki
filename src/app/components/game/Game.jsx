import Container from "../container/Container";
import Image from "next/image";
import ImgOne from "@images/content/game/img-1.webp";
import ImgTwo from "@images/content/game/img-2.webp";
import ImgThree from "@images/content/game/img-3.webp";
import BigImg from "@images/content/game/img-big.webp";
import Button from "@components/ui/button/Button";
import PlusIcon from "@components/icons/PlusIcon";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, A11y } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

const Game = () => {
  const data = {
    title: "Вступайте в игру!",
    list: [
      {
        text: "Получайте стикер за каждый купленный Kids Box",
        image: ImgOne,
      },
      {
        text: "Соберите все 6 стикеров в стикерпак",
        image: ImgTwo,
      },
      {
        text: "Получите игру в подарок",
        image: ImgThree,
      },
    ],
    badge: "Игра “Вперёд, Тануки”",

    // slider: [
    //   {
    //     image: SliderImgOne,
    //     alt: "slider img 1",
    //     text: "Kid`s Box с шашлычками из курицы",
    //   },
    //   {
    //     image: SliderImgTwo,
    //     alt: "slider img 2",
    //     text: "Kid`s Box с куриными наггетсами",
    //   },
    //   {
    //     image: SliderImgThree,
    //     alt: "slider img 3",
    //     text: "Kid`s Box с куриным бургером",
    //   },
    // ],
  };
  return (
    <section className="party party_game bg-orange mb-3">
      <Container className="party__container container flex flex-col items-center py-10">
        <h2 className="party__title m-auto mb-9 text-center max-w-3xl text-6xl font-seymour text-white">
          {data.title}
        </h2>
        {data.list && (
          <ul className="party__list w-full max-w-4xl">
            {data.list.map((item, key) => (
              <li
                key={`__${key}__`}
                className="party__item mb-3 flex items-center text-left gap-16 h-[142px] shrink-0 items-center pl-5 bg-white rounded-[53px]"
              >
                <span className="party__item-num w-12 flex justify-center text-4xl  font-bold">
                  {key + 1}
                </span>
                <span className="party__item-text text-xl font-medium leading-6 mr-auto">
                  {item.text}
                </span>
                <figure className="party__item-image relative -right-10">
                  <Image
                    src={item.image.src}
                    alt={item.alt}
                    width={item.image.width}
                    height={item.image.height}
                    blurDataURL={item.image.blurDataURL}
                    placeholder="blur"
                  />
                </figure>
              </li>
            ))}
          </ul>
        )}

        <div className="party__badge badge badge_white mt-9 mb-10">
          {data.badge}
        </div>

        <Image
          className="party__big-image -mb-20 maw"
          src={BigImg.src}
          alt={BigImg.alt}
          width={BigImg.width}
          height={BigImg.height}
          blurDataURL={BigImg.blurDataURL}
          placeholder="blur"
        />
      </Container>
    </section>
  );
};

export default Game;
