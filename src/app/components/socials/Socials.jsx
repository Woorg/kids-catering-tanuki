import clsx from "clsx";
import VkIcon from "../icons/VkIcon";
import TelegramIcon from "../icons/TelegramIcon";
import Link from "next/link";

const Socials = ({ className }) => {
  const data = {
    socials: {
      title: "Присоединяйтесь к нам",
      links: [
        {
          label: "Vk",
          link: "https://vk.com",
          icon: <VkIcon />,
        },
        {
          label: "Telegram",
          link: "https://t.me/some",
          icon: <TelegramIcon />,
        },
      ],
    },
  };
  return (
    <div className={clsx(className, "social ")}>
      <div
        className={clsx(
          "social__title mb-3 text-black text-opacity-40 text-sm font-medium leading-none"
        )}
      >
        {data.socials.title}
      </div>
      <ul className={clsx("social__list flex gap-3 flex-wrap")}>
        {data.socials.links.map((social, key) => (
          <li key={`__${key}__`} className={clsx("social__item")}>
            <Link
              key={`__${key}__`}
              aria-label={social.label}
              href={social.link}
              className={clsx("social__link")}
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
