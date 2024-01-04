import { Col, Row, Typography } from "antd";
import Image from "next/image";
const { Paragraph, Title } = Typography;
const BannerPage = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img?: any;
}) => {
  return (
    <>
      <Row className="BannerPage" justify="space-between" align="middle">
        <Col xs={24} lg={12}>
          <div className="content-banner-page">
            <Title level={1}>{title}</Title>
            <Paragraph> {description}</Paragraph>
          </div>
        </Col>
        <Col xs={24} lg={12} className="image-banner-page">
          <Image src={img} alt={title} />
        </Col>
      </Row>
    </>
  );
};

export default BannerPage;
