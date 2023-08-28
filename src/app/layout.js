import clsx from "clsx";

// import "../../public/assets/styles/style.scss";

import "./globals.scss";

import { Montserrat, Seymour_One } from "next/font/google";
import localFont from "next/font/local";

const pt_root_ui = localFont({
  src: "../../public/assets/fonts/pt-root-ui_vf.woff2",
  display: "swap",
  preload: true,
  variable: "--pt-root-ui",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  variable: "--montserrat",
});

const seymour = Seymour_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--seymour",
});

import Footer from "./components/footer/Footer";

// console.log(seymour);

export const metadata = {
  title: "Детские праздникис «Tануки»",
  description:
    "На вашем празднике будет настоящая, яркая Звездочка. Она появилась специально, чтобы вы загадали своё самое заветное желание. Звездочка знает секрет: как правильно мечтать и загадывать, чтобы наверняка сбылось.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={clsx(
          seymour.variable,
          montserrat.variable,
          pt_root_ui.variable,
          "page flex min-h-screen flex-col"
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
