import { MoreIcon } from "@src/assets/icons";
import { Card, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/regle1.jpg";
import img2 from "../../assets/images/regle2.jpg";
import img3 from "../../assets/images/regle3.jpg";
const { Paragraph, Title } = Typography;
const { Meta } = Card;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function ImageCards() {
  useEffect(() => {
    const targetElement = document.querySelector(".regulatory");

    if (targetElement) {
      const firstDivAfterTarget = targetElement.nextElementSibling;

      if (firstDivAfterTarget) {
        firstDivAfterTarget.classList.add("ma-classe");
      }
    }
  }, []);

  useEffect(() => {
    const node = document.querySelectorAll(".regulatory-texts .slick-slide");
    const newNode = [];
    Array.from(node).forEach((element) => {
      element.childNodes.forEach((child) => {
        const newChild = child as HTMLElement;
        newChild.classList.add("slick-slide-child");
        newNode.push(newChild);
      });
    });
  }, []);

  const t = useTranslations("page_home");
  const t2 = useTranslations("btn");
  const reglesData = [
    {
      image: img1,
      title: t("regulatory_texts.regulatory_texts_1.title"),
      description: t("regulatory_texts.regulatory_texts_1.description"),
      date: t("regulatory_texts.regulatory_texts_1.date"),
      key: 1,
    },
    {
      image: img2,
      title: t("regulatory_texts.regulatory_texts_2.title"),
      description: t("regulatory_texts.regulatory_texts_2.description"),
      date: t("regulatory_texts.regulatory_texts_2.date"),
      key: 2,
    },
    {
      image: img3,
      title: t("regulatory_texts.regulatory_texts_3.title"),
      description: t("regulatory_texts.regulatory_texts_3.description"),
      date: t("regulatory_texts.regulatory_texts_3.date"),
      key: 3,
    },
    {
      image: img2,
      title: t("regulatory_texts.regulatory_texts_2.title"),
      description: t("regulatory_texts.regulatory_texts_2.description"),
      date: t("regulatory_texts.regulatory_texts_2.date"),
      key: 2,
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {reglesData.map(({ key, image, title, description, date }) => (
          <div key={key}>
            <div className="card regle-cards" key={key}>
              <div>
                <div className="regle-img">
                  <Image className="" src={image} alt={title} />
                </div>
                <div className="content-regle-cards">
                  <div>
                    <div className="tag date-regle">{date}</div>

                    <Title level={4}>{title}</Title>
                    <Paragraph>{description}</Paragraph>
                  </div>
                </div>
              </div>
              <div className="read-more">
                <a href="" className="read-more-slide">
                  <span>{t2("read_more")} </span>
                  <MoreIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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
