import { Col, Grid, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import {
  ChartIcon,
  CloudaddIcon,
  LickcircleIcon,
  LockIcon,
} from "../../assets/icons";
const { Paragraph, Title } = Typography;
export default function QualitiesCard() {
  const t = useTranslations("page_home");
  const { useBreakpoint } = Grid;
  const qualitiesData = [
    {
      icon: <LockIcon />,
      title: t("quality.qualities.confidentiality.title"),
      paragraph: t("quality.qualities.confidentiality.description"),
      key: 1,
    },
    {
      icon: <CloudaddIcon />,
      title: t("quality.qualities.digital.title"),
      paragraph: t("quality.qualities.digital.description"),
      key: 2,
    },
    {
      icon: <ChartIcon />,
      title: t("quality.qualities.real_time.title"),
      paragraph: t("quality.qualities.real_time.description"),
      key: 3,
    },
    {
      icon: <LickcircleIcon />,
      title: t("quality.qualities.single_account.title"),
      paragraph: t("quality.qualities.single_account.description"),
      key: 4,
    },
  ];

  return (
    <>
      <Row gutter={[48, 16]}>
        {qualitiesData.map(({ key, title, icon, paragraph }) => (
          <Col className="card" key={key} xs={24} md={12} lg={6}>
            <div className="icon">{icon}</div>
            <h3></h3>
            <Title level={4}>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </Col>
        ))}
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
