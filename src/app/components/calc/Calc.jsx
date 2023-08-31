import clsx from "clsx";
import DatePickerIcon from "../icons/DatePickerIcon";
import AnimTypeIcon from "../icons/AnimTypeIcon";
import CreateTypeIcon from "../icons/CreateTypeIcon";
import CookTypeIcon from "../icons/CookTypeIcon";
import ShowTypeIcon from "../icons/ShowTypeIcon";
import RubIcon from "../icons/RubIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { useState, forwardRef } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import "react-datepicker/dist/react-datepicker.css";

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
          icon: CookTypeIcon,
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

  const guestsMarks = {
    2: "2",
    15: "15",
    30: "30",
  };

  const hoursMarks = {
    1: "1",
    4: "4",
    8: "8",
  };

  // const Handle = Slider.Handle;

  const [startDate, setStartDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState("Анимационная программа");
  const [guests, setQuests] = useState(15);
  const [hours, setHours] = useState(4);

  // const customDatepickerInput = forwardRef(({ value, onClick }, ref) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     <DatePickerIcon />
  //     {value}
  //   </button>
  // ));

  const onChangeGuests = (guests) => {
    console.log("new Value", guests);
    setQuests(guests);
  };

  const onChangeHours = (hours) => {
    console.log("new Value", hours);
    setHours(hours);
  };

  const showData = () => {
    console.log("Type:", selectedType);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
  };

  return (
    <div className={clsx(className, "calc")}>
      <h2 className="calc__title title max-w-2xl m-auto text-6xl text-center text-white">
        {data.title}
      </h2>

      <form
        className="calc__form form text-center m-auto max-w-4xl"
        onSubmit={onSubmit}
      >
        <div className="calc__row calc__date form__row form__field form__field_datepicker mb-10">
          <div className="calc__datepicker">
            <DatePicker
              // customInput={<customDatepickerInput />}
              showIcon
              locale="ru"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <section className="calc__row calc__types form__row mb-10 ">
          <h3 className="calc__row-title mb-4 text-center text-lg font-bold leading-5 text-white">
            тип программы
          </h3>
          <div className="calc__types-w flex items-center flex-wrap">
            {data.form.types.map((type, key) => (
              <div
                key={`__${key}__`}
                className={clsx(
                  "calc__type form__field form__field_radio transition-colors w-[222px] h-[130px]",
                  `calc__type_ ${type.css}`,
                  selectedType === type.name ? " calc__type_selected" : ""
                )}
              >
                <label
                  className="calc__type-label form__label flex items-center transition-colors py-10 px-10 justify-center  text-center text-lg text-white font-bold 
              leading-5"
                >
                  <span className="calc__type-text form__label-text">
                    {type.name}
                  </span>
                  <input
                    type="radio"
                    name="type"
                    value={type.name}
                    className="calc__radio form__radio hidden"
                    checked={selectedType === type.name}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                </label>
                <type.icon className="calc__type-bg" />
              </div>
            ))}
          </div>
        </section>

        <div className="calc__row mb-6">
          <div className="calc__row-title mb-4 text-center text-lg font-bold leading-5 text-white">
            Количество гостей
          </div>
          <div className="calc__slider calc__slider_guests">
            <Slider
              min={2}
              max={30}
              step={null}
              marks={guestsMarks}
              // startPoint={2}
              // defaultValue={15}
              // reverse={true}
              allowCross={true}
              value={guests}
              onChange={onChangeGuests}
            />
          </div>
        </div>

        <div className="calc__row mb-6">
          <div className="calc__row-title mb-4 text-center text-lg font-bold leading-5 text-white">
            Количество гостей
          </div>
          <div className="calc__slider calc__slider_hours">
            <Slider
              min={1}
              max={8}
              step={null}
              marks={hoursMarks}
              allowCross={true}
              // keyboard={true}
              // startPoint={4}
              defaultValue={4}
              onChange={onChangeHours}
              // handle={Handle}
            />
          </div>
        </div>

        <section className="calc__row flex flex-col cen calc__total form__row ">
          <h3 className="calc__row-title mb-4 text-center text-lg font-bold leading-5 text-white">
            Приблизительная стоимость:
          </h3>
          <div className="calc__price-w leading-none  flex justify-center items-center flex-wrap gap-2">
            <span className="calc__price text-[62px] text-white font-seymour">
              24 000
            </span>
            <RubIcon className="calc__rub-icon w-[68px] h-[62px]" />
          </div>
        </section>

        <button
          className="calc__button mt-11 lg:mt-10 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
          aria-label="Отправить заявку"
          onClick={showData}
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default Calc;
