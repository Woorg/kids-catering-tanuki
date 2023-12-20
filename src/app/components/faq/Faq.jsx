"use client";
import clsx from "clsx";
import Container from "../container/Container";
import Link from "next/link";
import Button from "@components/ui/button/Button";
import useModal from "../../hooks/useModal";

const Faq = () => {
  const data = [
    {
      question: "Сколько стоит День Рождения в «Тануки»?",
      answer:
        "Если вы ищите, где отметить день рождения в Москве для ребенка, лучше всех подскажут сами дети. Мамы нам рассказывают, что дети просят сказочных героев, большой торт, квесты, подарки, выступления животных, дискотеку. Они хотят прыгать на батутах, покорять вершины скалодрома, лазить по ниндзя-арене и веревочному парку. А мы отличаемся тем, что все это можем предоставить в одном месте!Вы экономите время, силы и деньги. И получаете праздник, о котором ребенок скажет: «Это мой самый лучший день рождения, спасибо мама и папа!»",
    },
    {
      question: "Праздники для детей, подростков и малышей от 3 до 6 лет",
      answer:
        "Ребята будут в восторге, когда на их праздник придут любимые сказочные герои! Актеры в роли сказочных персонажей проводят экшен-игры на батутной арене, которые учат детей добру, справедливости, семейным ценностям и дружбе. На мастер-классах дети делают красивые подарки и необычные сладости.Проведение детского дня рождения в спортивно-развлекательном парке «НЕБО» — это не только развлечения на батутной арене. Малыши также могут побывать в сказочном лабиринте, забраться на вулкан и исследовать чудеса башни гравитации в детском центре «Туса Джуса».В этом возрасте дети с удовольствием участвую в активных играх. У нас есть готовые тематические программы по сюжетам мультиков и фильмов. Хотите другой сюжет? Бесплатно напишем сценарий специально для вашего ребенка!Аниматоры тщательно готовят реквизит, пересматривают мультики и фильмы с выбранными героями, чтобы быть в теме. Ведь дети — самые строгие критики. Нельзя промахнуться с сюжетом!",
    },
    {
      question: "Для подростков от 12 до 16 лет",
      answer:
        "Тематические вечеринки для взрослых детей — это волна драйва с зажигательными ведущими. Именинник и гости научатся делать сальто, летать на полотнах, проявят бесстрашие на самых сложных тропах веревочного парка!Программу продолжат дискотеки на батутах под диджейские сеты, бармен-шоу, вечеринки в ретро стиле и еще 30 развлечений парка на одном празднике. Мы ограничены лишь нашей фантазией!",
    },
    {
      question: "Что будет на празднике?",
      answer:
        "Активные программы. В нашей коллекции 40 готовых тематических игр, в которых задействованы все локации парка. Детей ждет закрученный сюжет с препятствиями, заданиями, головоломками и неожиданным концом.Семейное кафе. В каждом парке есть уютное кафе «НЕБО» с домашней кондитерской. Когда дети проголодаются после активных игр, их ждет праздничный стол с детскими блюдами и домашними десертами. Мы заботимся о том, чтобы дети на празднике ели только свежие блюда.Атмосфера. Застольная часть праздника проходит в банкетных залах или в кафе. Декораторы украшают пространство в соответствии со стилем вечеринки.Анимация с шоу-программой. Выбирайте любимого героя, и он придет на праздник! Чтобы удивить гостей, закажите шоу с жидким азотом или электричеством, мастер-классы, цирковые номера или выступление фокусников.Поздравления от парка «НЕБО». Самый трогательный момент, когда в конце дня рождения на батутах фирменный заяц Скай выносит торт и поздравляет именинника. Дети обожают этот момент и ждут его с замиранием сердца.",
    },
  ];

  const modal = useModal();

  return (
    <>
      <section className={clsx("faq")}>
        <Container
          className={clsx(
            "faq__container flex flex-col items-center pt-8 pb-11 lg:py-20"
          )}
        >
          <div className={clsx("faq__list max-w-sm lg:max-w-3xl ")}>
            {data.map((item, key) => (
              <div
                key={`__${key}__`}
                className={clsx("faq__item")}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h2
                  className={clsx(
                    "faq__question text-black text-[22px] lg:text-4xl font-extrabold mb-4 pb"
                  )}
                  itemProp="name"
                >
                  {item.question}
                </h2>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className={clsx(
                      "faq__answer text-black text-sm lg:text-lg font-medium leading-relaxed"
                    )}
                    itemProp="text"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="faq__button mt-11 lg:mt-20 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
            aria-label="Заказать праздник"
            onClick={modal.open}
          >
            Заказать праздник
          </button>
        </Container>
      </section>
    </>
  );
};

export default Faq;
