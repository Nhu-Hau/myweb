import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./HomeSlide.module.css";

// Import Slider (no SSR)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  fade: true,
  cssEase: "ease-in-out",
  swipeToSlide: true,
};

const images = [
  "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/background1.png",
  "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/background2.png",
  "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/background3.png",
  "https://my-images-of-nhuhau.s3.ap-southeast-2.amazonaws.com/images-background/background4.png",
];

const HomeSlide = () => {
  return (
    <section className={`relative w-full z-0 transition-transform duration-500 ease-in-out hover:scale-105`}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <figure key={index}>
            <Image
              src={img}
              alt={`Slide ${index + 1} - Background image`}
              className="max-h-[550px] w-full object-cover"
              priority
              width={1200}
              height={550}
            />
            <figcaption className="sr-only">Slide {index + 1}</figcaption>
          </figure>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlide;
