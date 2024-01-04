import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";
import { SvgImage } from "./../SvgImage/index";
const { Paragraph, Title } = Typography;
export default function Block() {
  const t = useTranslations("page_home");

  const qualitiesData = [
    {
      image: <SvgImage src={img1} alt={t("type_investment.type_1.title")} />,
      title: t("type_investment.type_1.title"),
      link: [
        {
          title: t("type_investment.type_1.btn_1"),
          link: "#",
          key: "1",
        },
      ],
      key: 1,
    },
    {
      image: <SvgImage src={img2} alt={t("type_investment.type_2.title")} />,
      title: t("type_investment.type_2.title"),
      link: [
        {
          title: t("type_investment.type_2.btn_1"),
          link: "#",
          key: "1",
        },
        {
          title: t("type_investment.type_2.btn_2"),
          link: "#",
          key: "2",
        },
        {
          title: t("type_investment.type_2.btn_3"),
          link: "#",
          key: "3",
        },
      ],
      key: 2,
    },
    {
      image: <SvgImage src={img3} alt={t("type_investment.type_3.title")} />,
      title: t("type_investment.type_3.title"),
      link: [
        {
          title: t("type_investment.type_3.btn_1"),
          link: "#",
          key: "1",
        },
        {
          title: t("type_investment.type_3.btn_2"),
          link: "#",
          key: "2",
        },
      ],
      key: 3,
    },
    {
      image: <SvgImage src={img4} alt={t("type_investment.type_4.title")} />,
      title: t("type_investment.type_4.title"),
      link: [
        {
          title: t("type_investment.type_4.btn_1"),
          link: "#",
          key: "1",
        },
        {
          title: t("type_investment.type_4.btn_2"),
          link: "#",
          key: "2",
        },
      ],
      key: 4,
    },
  ];
  return (
    <>
      {qualitiesData.map(({ key, title, image, link }) => (
        <Row
          key={key}
          className="content-block-inv"
          gutter={{ xs: 0, sm: 16, md: 48 }}
        >
          <Col className="type-title" md={12}>
            <Title level={2}>{title}</Title>
            {link.map(({ key, title, link }) => (
              <a href={link} className="links" key={key}>
                {title}
                <ArrowRightOutlined />
              </a>
            ))}
          </Col>
          <Col className="type-img" md={12}>
            <div className="image">{image}</div>
          </Col>
        </Row>
      ))}
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
