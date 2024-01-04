import { Col, Grid, Typography } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import link1 from "../../assets/images/link1.svg";
import link2 from "../../assets/images/link2.svg";
import link3 from "../../assets/images/link3.svg";
import link4 from "../../assets/images/link4.svg";
import link5 from "../../assets/images/link5.svg";
const { Paragraph, Title } = Typography;
const { useBreakpoint } = Grid;
const linksData = [
  {
    image: link1,
    alt: "Parcours Digitalisé",
    key: 1,
  },
  {
    image: link2,
    alt: "Parcours Digitalisé",
    key: 1,
  },
  {
    image: link3,
    alt: "Parcours Digitalisé",
    key: 1,
  },
  {
    image: link4,
    alt: "Parcours Digitalisé",
    key: 1,
  },
  {
    image: link5,
    alt: "Parcours Digitalisé",
    key: 1,
  },
];

export default function UsefulLinks() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 4,
          speed: 500,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 576,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "10px",
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 450,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {linksData.map(({ key, image, alt }) => (
          <Col className="link-img" key={key}>
            <Image className="" src={image} alt={alt} />
          </Col>
        ))}
      </Slider>
    </>
  );
}
