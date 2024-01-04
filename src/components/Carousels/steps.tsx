import img1 from "@src/assets/images/inv.jpg";
import img2 from "@src/assets/images/inv2.jpg";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

export default function Steps() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);
  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setActiveButton(index);
    }
  };
  const t = useTranslations("page_home");

  const settings = {
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: any) => {
      setActiveButton(currentSlide);
    },
  };
  return (
    <>
      <div className="slides-inv">
        <Slider {...settings} ref={sliderRef}>
          <div className="image-slide-inv">
            <Image className="" src={img1} alt="BCT" />
          </div>
          <div className="image-slide-inv">
            <Image className="" src={img2} alt="BCT" />
          </div>
        </Slider>
        <div className="text-btn">
          <div className="">
            <div
              className="button-slide"
              onClick={() => goToSlide(0)}
              style={{ opacity: activeButton === 0 ? 1 : 0.5 }}
            >
              <div className="slide-number">
                <div className="number">1</div>
              </div>
              <p>{t("statement.step_1")}</p>
            </div>
            <div
              className="button-slide"
              onClick={() => goToSlide(1)}
              style={{ opacity: activeButton === 1 ? 1 : 0.5 }}
            >
              <div className="slide-number">
                <div className="number">2</div>
              </div>
              <p>{t("statement.step_2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../../locale/${locale}.json`) },
    },
  };
}
