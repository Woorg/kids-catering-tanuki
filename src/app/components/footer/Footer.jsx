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
        className={clsx("footer__container py-6 font-pt-root-ui font-medium ")}
      >
        <Nav className={clsx("footer__nav mb-5 lg:mb-0")} />

        <a
          href={`tel:${data.phone.tel}`}
          className={clsx(
            "footer__phone phone mb-2 inline-flex text-gray text-lg lg:text-sm lg:text-gray"
          )}
        >
          {data.phone.text}
        </a>

        <Stores className={clsx("footer__stores mb-5 lg:mb-0")} />
        <Socials className={clsx("footer__socials")} />

        <p className="footer__copyright mt-8 lg:mt-0  text-black text-opacity-40 text-sm font-medium leading-4 ">
          {data.copyright}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
