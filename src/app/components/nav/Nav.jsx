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
        <ul className={"nav__list flex gap-6"}>
          {data.menu.map((link, key) => (
            <li key={`__${key}__`} className={clsx("nav__item mb-3")}>
              <Link
                href={link.link}
                className={clsx(
                  "nav__link text-black text-opacity-90 text-sm font-medium leading-none"
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
