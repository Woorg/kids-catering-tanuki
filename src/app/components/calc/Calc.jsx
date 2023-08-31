import clsx from "clsx";
import Button from "@components/ui/button/Button";
import DatePickerIcon from "../icons/DatePickerIcon";
import TanukIcon from "../icons/TanukIcon";
import ClockIcon from "../icons/ClockIcon";
import AnimTypeIcon from "../icons/AnimTypeIcon";
import CreateTypeIcon from "../icons/CreateTypeIcon";
import CookTypeIcon from "../icons/CookTypeIcon";
import ShowTypeIcon from "../icons/ShowTypeIcon";
import { useState } from "react";

const Calc = ({ className }) => {
  const data = {
    title: "Калькулятор праздника",

    form: {
      types: [
        {
          icon: AnimTypeIcon,
          css: "anim",
          name: "Анимационная программа",
        },
        {
          icon: CreateTypeIcon,
          css: "create",
          name: "Творческий Мастер-класс",
        },
        {
          icon: CreateTypeIcon,
          css: "cook",
          name: "Kулинарный Мастер-класс",
        },
        {
          icon: ShowTypeIcon,
          css: "show",
          name: "Шоу программа",
        },
      ],
    },
  };

  const [labelState, setLabelState] = useState(false);
  const handleLabelClick = (e) => {
    setLabelState(
      !labelState
        ? e.currentTarget.classList.add("selected")
        : e.currentTarget.classList.remove("selected")
    );
    console.log("selected");
  };
  return (
    <div className={clsx(className, "calc")}>
      <h2 className="calc__title title max-w-2xl m-auto text-6xl text-center text-white">
        {data.title}
      </h2>
      <form className="calc__form text-center m-auto max-w-4xl">
        <div className="calc__date mb-10">
          <DatePickerIcon className="lg:w-8 lg:h-8 calc__date-icon w-6 h-6" />
        </div>

        <section className="calc__types mb-10 ">
          <h3 className="calc__types-title mb-4 text-center text-lg font-bold leading-5 text-white">
            тип программы
          </h3>
          <div className="calc__types-w flex items-center flex-wrap">
            {data.form.types.map((type, key) => (
              <div
                key={`__${key}__`}
                onClick={handleLabelClick}
                className={clsx(
                  "calc__type  flex items-center py-10 px-10 justify-center w-[222px] h-[130px]",
                  "calc__type_" + type.css,
                  labelState ? labelState : null
                )}
              >
                <label  
                  className="calc__type-title text-center text-lg  text-white  font-bold
              leading-5"
                >
                  {type.name}
                </label>
                <input
                  type="radio"
                  name="type"
                  value={type.name}
                  className="calc__radio hidden"
                />
                <type.icon className="calc__type-bg" />
              </div>
            ))}
          </div>
        </section>

        <Button
          className="calc__button mt-11 lg:mt-20 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
          href="/button"
          label="Отправить заявку"
        >
          Отправить заявку
        </Button>
      </form>
    </div>
  );
};

export default Calc;
