import { Col, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
const { Title, Paragraph } = Typography;
const InvestmentTypes = ({
  title,
  description,
  subtitle,
  img,
}: {
  title: string;
  description?: string;
  subtitle?: string;
  img?: any;
}) => {
  return (
    <>
      <Row className="content-page-inv">
        <Col xs={24} lg={24}>
          <Title level={5}>{subtitle}</Title>
        </Col>
        <Col xs={24} lg={24}>
          <div className="">
            <Title level={1}>{title}</Title>
            <Image className="" src={img} alt={title} />
            <Paragraph> {description}</Paragraph>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InvestmentTypes;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../../locale/${locale}.json`) },
    },
  };
}
