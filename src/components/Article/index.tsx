import { QuoteIcon } from "@src/assets/icons";
import { Col, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
const { Paragraph, Title } = Typography;
export default function Article() {
  const t = useTranslations("page_home");
  return (
    <>
      <Row className="content-article" gutter={16}>
        <Col>
          <QuoteIcon />
        </Col>
        <Col>
          <Title level={2} className="article-home">
            {t("article.part_1")}
            <span>{t("article.part_2")}</span>
            {t("article.part_3")}
          </Title>
          <Paragraph> {t("article.date_article_1")}</Paragraph>
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
