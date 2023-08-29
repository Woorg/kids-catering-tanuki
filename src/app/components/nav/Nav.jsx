import clsx from "clsx";
import Link from "next/link";

const Nav = ({ className }) => {
  const data = {
    menu: [
      {
        link: "#privacy-policy",
        text: "Политика конфиденциальности",
      },
      {
        link: "#user-agreement",
        text: "Пользовательское соглашение",
      },
      {
        link: "#personal-data",
        text: "Согласие на обработку ПД",
      },
    ],
  };

  return (
    <nav className={clsx(className, "nav")}>
      {data.menu && (
        <ul
          className={
            "nav__list flex items-start  flex-col lg:flex-row lg:gap-6"
          }
        >
          {data.menu.map((link, key) => (
            <li key={`__${key}__`} className={clsx("nav__item mb-4 lg:mb-0")}>
              <Link
                href={link.link}
                className={clsx(
                  "nav__link text-gray lg:text-dark-gray text-sm font-medium leading-none"
                )}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
