import clsx from "clsx";
import Button from "@components/ui/button/Button";

const Calc = ({ className }) => {
  const data = {
    title: "Калькулятор праздника",
  };

  return (
    <div className={clsx(className, "calc")}>
      <h2 className="calc__title text-center max-w-2xl m-auto text-6xl font-seymour text-white">
        {data.title}
      </h2>
      <div className="calc__form text-center">
        <div className="calc__date"></div>

        <Button
          className="faq__button mt-20  lg:px-14 lg:py-7 bg-black rounded-full justify-center items-center inline-flex text-center text-white lg:text-2xl font-bold tracking-tight"
          href={"button"}
        >
          Отправить заявку
        </Button>
      </div>
    </div>
  );
};

export default Calc;
