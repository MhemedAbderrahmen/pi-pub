import { Col, Divider, Layout, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../assets/images/logo-footer.png";
const { Footer } = Layout;
const FooterBottom = () => {
  const t = useTranslations("footer");
  return (
    <Footer className="footer">
      <div>
        <Row align="middle">
          <Col md={4} xs={24}>
            <Image
              className="logoFooter"
              style={{
                width: "auto",
              }}
              src={logo}
              alt="logo BCT"
            />
          </Col>
          <Col md={20} xs={24}>
            <div className="menuFooter">
              <ul>
                <li>{t("menu.about")}</li>
                <li>{t("menu.type")}</li>
                <li>{t("menu.contact")}</li>
                <li>{t("menu.centre")}</li>
              </ul>
            </div>
          </Col>
          <Divider />
        </Row>
        <Row className="copyrightSection">
          <Col className="copyright" xs={24} sm={24} md={12}>
            © Copyright{new Date().getFullYear()}
            {t("copyright")}.
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className="copyrightSection">
              <ul>
                <li>
                  <a> {t("policy")}</a>
                </li>
                <li>
                  <a> {t("mentions")}</a>
                </li>
                <li>
                  <a> {t("conditions")}</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterBottom;
