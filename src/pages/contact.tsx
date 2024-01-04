import {
  EnvelopeIcon,
  FaxIcon,
  MarkerIcon,
  PhoneIcon,
} from "@src/assets/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import { Button, Col, Flex, Form, Input, Row, Typography } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import logo from "../assets/images/contact.svg";
const { Title } = Typography;
export default function Contact() {
  const t = useTranslations("page_contact");
  const t2 = useTranslations("btn");
  const [form] = Form.useForm();
  return (
    <>
      <BannerPage
        title={t("title")}
        description={t("description")}
        img={logo}
      />
      <div className="content-wrapper">
        <Row gutter={[48, 48]}>
          <Col lg={16} className="contact_form">
            <Title level={3}>{t("form.title")}</Title>
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    label={t("form.name")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("form.your_name")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="prenom"
                    label={t("form.first_name")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("form.your_first_name")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="Email"
                    label={t("form.email")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("form.your_email")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="subject"
                    label={t("form.subject")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("form.subject")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="message"
                    label={t("form.message")}
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea rows={4} placeholder={t("form.message")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      {t2("send_bt")}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>{" "}
            </Form>
          </Col>
          <Col md={24} lg={8}>
            <Row>
              <Col className="google-map-code" lg={24}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  aria-hidden="false"
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col className="contact-information" lg={24}>
                <Flex style={{ padding: 15 }}>
                  <div className="icon-contact">
                    <MarkerIcon />
                  </div>
                  <Flex vertical>
                    <p>{t("information.adresse")}:</p>
                    <span>{t("information.adresse_content")}:</span>
                  </Flex>
                </Flex>
                <Flex style={{ padding: 15 }}>
                  <div className="icon-contact">
                    <PhoneIcon />
                  </div>
                  <Flex vertical>
                    <p>{t("information.phone")}:</p>
                    <span>(+216) 71 122 000</span>
                  </Flex>
                </Flex>
                <Flex style={{ padding: 15 }}>
                  <div className="icon-contact">
                    <FaxIcon />
                  </div>
                  <Flex vertical>
                    <p>Fax:</p>
                    <span>(+216) 71 340 615</span>
                  </Flex>
                </Flex>
                <Flex style={{ padding: 15 }}>
                  <div className="icon-contact">
                    <EnvelopeIcon />
                  </div>
                  <Flex vertical>
                    <p>E-mail:</p>
                    <span>boc@bct.gov.tn</span>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </Col>
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
