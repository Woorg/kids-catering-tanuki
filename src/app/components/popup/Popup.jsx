import clsx from "clsx";
import CloseIcon from "@components/icons/CloseIcon";
import { useState } from "react";

const Popup = ({ className, visible }) => {
  const closePopup = (e) => {
    if (e.target.classList.contains("popup__bg")) visible(false);
  };

  return (
    <div
      className={clsx(
        className,
        "popup fixed inset-0 z-20 ",
        visible ? "" : "hidden"
      )}
    >
      <div
        className="popup__bg h-full flex bg-[#767676] justify-center items-center"
        onClick={closePopup}
      >
        <div className="popup__container relative">
          <h2 className="popup__title title title_general mb-8 lg:mb-10 text-center ">
            Контакты
          </h2>
          <form
            action=""
            className="popup__form form flex flex-col items-center"
          >
            <div className="popup__field form__field">
              <input
                type="text"
                name="name"
                className="form__input"
                placeholder="Ваше имя"
              />
            </div>
            <div className="popup__field form__field">
              <input
                type="text"
                name="phone"
                className="form__input"
                placeholder="Телефон"
              />
            </div>
            <div className="popup__field form__field">
              <input
                type="text"
                name="email"
                className="form__input"
                placeholder="E-mail"
              />
            </div>

            <button
              className="popup__submit  form__submit mt-6 lg:mt-10 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
              aria-label="Отправить"
            >
              Отправить
            </button>
          </form>
          <button
            className="popup__close absolute right-0 -bottom-10 lg:bottom-auto lg:top-0 lg:-right-12"
            onClick={() => visible(false)}
          >
            <CloseIcon className="w-16 h-16 lg:w-20 lg:h-20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
