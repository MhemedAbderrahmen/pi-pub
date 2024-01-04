import Article from "@src/components/Article";
import Banner from "@src/components/Banner";
import Block from "@src/components/Block/Block";
import QualitiesCard from "@src/components/Card/card";
import BannerCarousel from "@src/components/Carousels/bannerCarousel";
import ImageCards from "@src/components/Carousels/imageCards";
import UsefulLinks from "@src/components/Carousels/links";
import Steps from "@src/components/Carousels/steps";
import { Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Slider from "react-slick";
const { Paragraph, Title } = Typography;
export default function HomePage() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);
  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setActiveButton(index);
    }
  };
  const t = useTranslations("page_home");

  return (
    <>
      <Banner />
      <div className="banner-carousel">
        <BannerCarousel />
      </div>
      <div className="content-wrapper qualities">
        <Title level={2}>{t("quality.title")}</Title>
        <div className="cards-qualities">
          <QualitiesCard />
        </div>
      </div>
      <div className="type-investments  content_padding">
        <div className="content-wrapper ">
          <Block />
        </div>
      </div>
      <div className="article  content_padding">
        <div className="content-wrapper ">
          <Article />
        </div>
      </div>
      <div className="slide-steps  content_padding">
        <div className="content-wrapper ">
          <Title level={2}>{t("statement.title")}</Title>
          <Steps />
        </div>
      </div>
      <div className="useful-links  content_padding">
        <div className="content-wrapper ">
          <Title level={2} className=" white-color">
            {t("useful_links.title")}
          </Title>
          <div className="links">
            <UsefulLinks />
          </div>
        </div>
      </div>
      <div className="regulatory-texts content_padding">
        <div className="content-wrapper ">
          <Title level={2}>{t("regulatory_texts.title")}</Title>
          <Paragraph>{t("regulatory_texts.description")}</Paragraph>
          <ImageCards />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../locale/${locale}.json`) },
    },
  };
}
