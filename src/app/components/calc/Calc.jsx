import { useState, useEffect } from "react";
import clsx from "clsx";
import DatePickerIcon from "../icons/DatePickerIcon";
import AnimTypeIcon from "../icons/AnimTypeIcon";
import CreateTypeIcon from "../icons/CreateTypeIcon";
import CookTypeIcon from "../icons/CookTypeIcon";
import ShowTypeIcon from "../icons/ShowTypeIcon";
import RubIcon from "../icons/RubIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import "react-datepicker/dist/react-datepicker.css";
import Popup from "@components/popup/Popup";
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
    0: "2",
    15: "15",
    30: "30",
  };

  const hoursMarks = {
    0: "1",
    4: "4",
    8: "8",
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState("Анимационная программа");
  const [guests, setGuests] = useState(15);
  const [hours, setHours] = useState(4);
  const [totalPrice, setTotalPrice] = useState(""); // Add a state variable for the total price

  // Create a function to calculate the total price
  const calculateTotalPrice = () => {
    // Define your pricing logic based on program type, guests, and hours
    let basePrice = 0; // You can set a base price here

    if (selectedType === "Анимационная программа") {
      // Update the base price based on the program type
      basePrice = 400; // Adjust this according to your pricing
    } else if (selectedType === "Творческий Мастер-класс") {
      basePrice = 450;
    } else if (selectedType === "Kулинарный Мастер-класс") {
      basePrice = 500;
    } else if (selectedType === "Шоу программа") {
      basePrice = 550;
    }

    // Calculate the total price based on base price, guests, and hours
    const totalPrice = basePrice * guests * hours;

    setTotalPrice(totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // Update the total price state
  };

  useEffect(() => {
    // Call the calculateTotalPrice function whenever any of the relevant state variables change
    calculateTotalPrice();
  }, [calculateTotalPrice, selectedType, guests, hours]);

  const onChangeGuests = (guests) => {
    if (guests < 2) {
      setGuests(2);
    } else {
      setGuests(guests);
    }

    console.log("Guests", guests);
  };

  const onChangeHours = (hours) => {
    if (hours < 1) {
      setHours(1);
    } else {
      setHours(hours);
    }
    console.log("Hours", hours);
  };

  const showData = () => {
    setOpenPopup(!openPopup);
    // console.log("Date:", startDate);
    // console.log("Type:", selectedType);
    // console.log("PricePerHour:", totalPrice);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={clsx(className, "calc")}>
        <h2 className="calc__title title mb-6 lg:mb-10 max-w-2xl m-auto text-6xl text-center text-white">
          {data.title}
        </h2>

        <form
          className="calc__form form text-center m-auto max-w-4xl"
          onSubmit={onSubmit}
        >
          <div className="calc__row form__row form__field form__field_datepicker mb-6 lg:mb-10">
            <div className="calc__datepicker datepicker">
              <div className="datepicker__container flex items-center relative">
                <span className="datepicker__icon absolute top-1/2 left-0 -mt-3  lg:-mt-4 z-10">
                  <DatePickerIcon className="w-6 h-6 lg:w-8 lg:h-8 " />
                </span>
                <span className="datepicker__input flex flex-shrink ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    locale="ru"
                  />
                </span>
              </div>
            </div>
          </div>

          <section className="calc__row calc__types form__row mb-6 lg:mb-10 ">
            <h3 className="calc__row-title">тип программы</h3>
            <div className="calc__types-w ">
              {data.form.types.map((type, key) => (
                <div
                  key={`__${key}__`}
                  className={clsx(
                    "calc__type form__field form__field_radio transition-colors  ",
                    `calc__type_ ${type.css}`,
                    selectedType === type.name ? " calc__type_selected" : ""
                  )}
                >
                  <label className="calc__type-label form__label">
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

          <div className="calc__row mb-14 lg:mb-6">
            <div className="calc__row-title ">Количество гостей</div>
            <div className="calc__slider calc__slider_guests">
              <Slider
                min={0}
                max={30}
                // step={1}
                marks={guestsMarks}
                // startPoint={2}
                value={guests}
                onChange={onChangeGuests}
              />
            </div>
          </div>

          <div className="calc__row mb-14 lg:mb-6">
            <div className="calc__row-title">Продолжительность/час</div>
            <div className="calc__slider calc__slider_hours">
              <Slider
                min={0}
                max={8}
                // step={1}
                marks={hoursMarks}
                value={hours}
                // startPoint={1}
                onChange={onChangeHours}
              />
            </div>
          </div>

          <section className="calc__row flex flex-col cen calc__total form__row ">
            <h3 className="calc__row-title">Приблизительная стоимость:</h3>
            <div className="calc__price-w leading-none  flex justify-center items-center flex-wrap gap-2">
              <span className="calc__price text-[42px] lg:text-[62px] text-white font-seymour">
                {totalPrice}
              </span>
              <RubIcon className="calc__rub-icon w-[47px] h-[42px] lg:w-[68px] lg:h-[62px]" />
            </div>
          </section>

          <button
            className="calc__button mt-6 lg:mt-10 lg:px-14 lg:py-7 lg:text-2xl inline-flex items-center justify-center px-10 py-6 text-lg font-bold tracking-tight text-center text-white bg-black rounded-full"
            aria-label="Отправить заявку"
            onClick={showData}
          >
            Отправить заявку
          </button>
        </form>
      </div>
      {openPopup && <Popup visible={setOpenPopup} />}
    </>
  );
};

export default Calc;
