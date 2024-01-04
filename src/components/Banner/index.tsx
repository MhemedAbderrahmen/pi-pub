import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Background from "../../assets/images/banner.svg";
const { Paragraph, Title } = Typography;

export default function Banner() {
  const t = useTranslations("page_home");
  const t2 = useTranslations("btn");
  return (
    <>
      <Row className="banner-section bannerContainer">
        <Col xs={24} lg={12}>
          <div className="titleslide">
            <span>{t("banner.title.part1")} </span>
            {t("banner.title.part2")}
          </div>
          <div className="textslide">
            {t("banner.description")}
            <br />
            <br />
            <CheckOutlined /> {t("banner.description_1")}
            <br />
            <CheckOutlined />
            {t("banner.description_2")}
          </div>

          <Col xs={24} lg={16} className="btn-banner">
            <Button type="primary">
              <Link target="_blanck" href="">
                {t2("bt_investissement")}
              </Link>
            </Button>
          </Col>
        </Col>
        <Col xs={24} lg={12} className="img-banner">
          <Image alt={t("banner.title.part1")} src={Background} />
        </Col>
      </Row>
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
