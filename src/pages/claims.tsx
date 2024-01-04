import { UploadIcon } from "@src/assets/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import { Button, Col, Form, Input, Row, Typography, Upload } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import logo from "../assets/images/claims.svg";
const { Title } = Typography;
export default function Claims() {
  const t = useTranslations("page_claims");
  const t2 = useTranslations("btn");
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <BannerPage
        title={t("title")}
        description={t("description")}
        img={logo}
      />
      <div className="content-wrapper">
        <Row gutter={[48, 48]}>
          <Col md={{ span: 18, offset: 3 }} className="contact_form">
            <Title level={3}>{t("content.form.title")} </Title>
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
                    label={t("content.form.name")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("content.form.your_name")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="prenom"
                    label={t("content.form.first_name")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("content.form.your_first_name")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="Email"
                    label={t("content.form.email")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("content.form.your_email")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="subject"
                    label={t("content.form.subject")}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={t("content.form.subject")} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label={t("content.form.attach_doc")}>
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle
                    >
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <UploadIcon />
                        </p>
                        <p className="ant-upload-text upload-text">
                          <span>{t("content.form.choose_file_part1")} </span>
                          {t("content.form.choose_file_part2")}
                        </p>
                        <p className="ant-upload-hint upload-hint">
                          PDF (max. 12Mo)
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="message"
                    label={t("content.form.message")}
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea
                      rows={8}
                      placeholder={t("content.form.message")}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      {t2("send_claims")}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
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
