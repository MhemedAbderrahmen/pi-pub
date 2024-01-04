import {
  CloseOutlined,
  DownOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import LocaleSwitcher from "@src/components/LocaleSwitcher/LocaleSwitcher";
import type { CollapseProps } from "antd";
import { Button, Collapse, Grid, Menu, Space } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
const { SubMenu } = Menu;

const TopMenu = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);
  const { lg } = useBreakpoint();
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(() => !lg);
  }, [lg]);
  console.log(isMobile);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("header");
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t("menu.type.title"),
      children: (
        <>
          <div>
            <Link href="/investment">{t("menu.type.sub_menu_1")}</Link>
          </div>
          <div>
            <Link href="/investment">{t("menu.type.sub_menu_2")}</Link>
          </div>
          <div>
            <Link href="/investment">{t("menu.type.sub_menu_3")}</Link>
          </div>
          <div>
            <Link href="/investment">{t("menu.type.sub_menu_4")}</Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <nav className="top-menu">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="dropdown">
          {" "}
          {isMobile ? (
            <Collapse defaultActiveKey={["1"]} ghost items={items} />
          ) : (
            <>
              {" "}
              <Link href="/investment">
                <span className="nav-text">{t("menu.type.title")}</span>{" "}
                <DownOutlined />
              </Link>
              <div className="dropdown-content">
                <div>
                  <Link href="/investment">{t("menu.type.sub_menu_1")}</Link>
                </div>
                <div>
                  <Link href="/investment">{t("menu.type.sub_menu_2")}</Link>
                </div>
                <div>
                  <Link href="/investment">{t("menu.type.sub_menu_3")}</Link>
                </div>
                <div>
                  <Link href="/investment">{t("menu.type.sub_menu_4")}</Link>
                </div>
              </div>
            </>
          )}
        </li>
        <li>
          <Link href="/faq">
            {" "}
            <span className="nav-text">{t("menu.faq")}</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            {" "}
            <span className="nav-text">{t("menu.contact")}</span>
          </Link>
        </li>
        <li>
          <Link href="/claims">
            {" "}
            <span className="nav-text">{t("menu.claims")}</span>
          </Link>
        </li>
        <li className="lang-btn">
          <GlobalOutlined />
          <LocaleSwitcher />
        </li>
        <li>
          <Space wrap className="connect-btn">
            <Button className="InterSemiBoldFont btn-link login-btn">
              <Link target="_blanck" href="">
                {t("menu.login")}
              </Link>
            </Button>
            <Button
              type="primary"
              className="InterSemiBoldFont btn-link sign-btn"
            >
              <Link target="_blanck" href="">
                {t("menu.sign_up")}
              </Link>
            </Button>
          </Space>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
