import Image from "next/image";
import { HeroBg, HeroBgMob } from "../icons/HeroBg";

const SliderItem = ({ image, imageMob, alt, title, text }) => (
  <div className="hero__slider-item aspect-hero-mob lg:aspect-hero">
    <div className="hero__slider-inside">
      <figure className="hero__slider-image mb-2 lg:mb-0 flex-shrink-0 flex-grow-0 lg:flex-shrink lg:w-[487px]">
        <Image
          className="hidden lg:block"
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
        />
        <Image
          className="block lg:hidden"
          src={imageMob.src}
          alt={alt}
          width={imageMob.width}
          height={imageMob.height}
          blurDataURL={imageMob.blurDataURL}
          placeholder="blur"
        />
      </figure>
      <div className="hero__slider-entry lg:flex-shrink lg:w-[370px]">
        <h3 className="hero__slider-title line-clamp-2 lg:pr-5 mb-2 lg:mb-6 text-base lg:text-2xl font-bold text-white">
          {title}
        </h3>
        <div className="hero__slider-text line-clamp-13 lg:line-clamp-12  text-sm lg:text-md font-medium text-white">
          {text}
        </div>
      </div>
    </div>
    <HeroBg className="hero__bg hidden lg:block" />
    <HeroBgMob className="hero__bg hero__bg_mob block lg:hidden" />
  </div>
);

export default SliderItem;
