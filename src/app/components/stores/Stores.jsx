import clsx from "clsx";
import Link from "next/link";
import AppStoreIcon from "../icons/AppStoreIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";

const Stores = ({ className }) => {
  const data = {
    stores: {
      title: "Заказывайте с телефона",
      markets: [
        {
          link: "https://www.apple.com/uk/app-store/",
          icon: <AppStoreIcon />,
        },
        {
          link: "https://play.google.com/store/games",
          icon: <GooglePlayIcon />,
        },
      ],
    },
  };

  return (
    <div className={clsx(className, "stores")}>
      <h4
        className={clsx(
          "stores__title mb-3 text-black text-opacity-40 text-sm font-medium leading-none"
        )}
      >
        {data.stores.title}
      </h4>
      <ul className={clsx("stores__list flex gap-2 flex-wrap")}>
        {data.stores.markets.map((store, key) => (
          <li key={`__${key}__`} className={clsx("stores__item")}>
            <Link key={`__${key}__`} href={store.link} className="stores__link">
              {store.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stores;
