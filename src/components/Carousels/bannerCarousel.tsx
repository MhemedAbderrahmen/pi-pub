import { Carousel, Grid, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
const { Paragraph, Title } = Typography;
const { useBreakpoint } = Grid;
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
export default function BannerCarousel() {
  const t = useTranslations("page_home");
  const featuresData = [
    {
      numbers: "+ 7000",
      paragraph: t("numbers.nb1"),
      key: 1,
    },
    {
      numbers: "9",
      paragraph: t("numbers.nb2"),
      key: 2,
    },
    {
      numbers: "157",
      paragraph: t("numbers.nb3"),
      key: 3,
    },
    {
      numbers: "7",
      paragraph: t("numbers.nb4"),
      key: 4,
    },
    {
      numbers: "7826982",
      paragraph: t("numbers.nb5"),
      key: 5,
    },
    {
      numbers: "7826982",
      paragraph: t("numbers.nb6"),
      key: 6,
    },
    {
      numbers: "7826982",
      paragraph: t("numbers.nb7"),
      key: 7,
    },
    {
      numbers: "7826982",
      paragraph: "-- Restez en contact avec les services  --",
      key: 8,
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          rows: 3,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Carousel arrows {...settings}>
        {featuresData.map(({ key, numbers, paragraph }) => (
          <div className="content-banner-carousel " key={key}>
            <Title level={2} className="white-color">
              {numbers}
            </Title>
            <p>{paragraph}</p>
          </div>
        ))}
      </Carousel>
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
