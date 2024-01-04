import BannerPage from "@src/components/Banner/BannerPage";
import { Collapse, Divider, Row, Typography, type CollapseProps } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import logo from "../assets/images/faq.svg";
const { Paragraph, Title } = Typography;
export default function Faq() {
  const t = useTranslations("page_faq");
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t("content.question_1"),
      children: <p>{t("content.answer_1")}</p>,
    },
    {
      key: "2",
      label: t("content.question_2"),
      children: <p>{t("content.answer_2")}</p>,
    },
  ];
  return (
    <>
      <BannerPage
        title={t("title")}
        description={t("description")}
        img={logo}
      />
      <div className="content-wrapper faq" style={{ whiteSpace: "pre-line" }}>
        <Row>
          <Title level={3}>{t("content.title")} </Title>
          <Divider />
          <Collapse defaultActiveKey={["3"]} ghost items={items} />
        </Row>
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
