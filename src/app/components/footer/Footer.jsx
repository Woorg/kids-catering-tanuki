import Container from "../container/Container";
import clsx from "clsx";
import Link from "next/link";

import Nav from "../nav/Nav";
import Socials from "../socials/Socials";
import Stores from "../stores/Stores";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const data = {
    phone: {
      tel: "+74996492223",
      text: "+7 499 649-2-223",
    },

    copyright: [
      `© 2019-${currentYear} Семья любимых ресторанов «ТанукиFamily в Москве»`,
    ],
  };

  return (
    <footer className={clsx("footer")}>
      <Container
        className={clsx(
          "footer__container py-6 font-pt-root-ui grid grid-cols-12"
        )}
      >
        <div className={clsx("footer__side col-span-7")}>
          <Nav className={clsx("footer__nav")} />

          {data.phone && (
            <a
              href={`tel:${data.phone.tel}`}
              className={clsx(
                "footer__phone phone mb-2 inline-flex text-black text-opacity-40 text-sm font-medium leading-none"
              )}
            >
              {data.phone.text}
            </a>
          )}
          <p className="footer__copyright text-black text-opacity-40 text-sm font-medium leading-none">
            {data.copyright}
          </p>
        </div>

        <div className={clsx("footer__media col-span-5 grid grid-cols-12")}>
          <Stores className={clsx("footer__stores col-span-7")} />
          <Socials
            className={clsx("footer__socials col-span-5 footer__social")}
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
