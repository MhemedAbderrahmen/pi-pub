import img5 from "@src/assets/images/img5.jpg";
import img6 from "@src/assets/images/img6.jpg";
import img7 from "@src/assets/images/img7.jpg";
import InvestmentTypes from "@src/components/Investment/InvestmentTypes";
import {
  Grid,
  Layout,
  Menu,
  Typography,
  type CollapseProps,
  type MenuProps,
} from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
const { Sider } = Layout;
const { Title } = Typography;

const InvestmentDesktop: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);
  const { lg } = useBreakpoint();
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(() => !lg);
  }, [lg]);

  const t = useTranslations("page_investment");
  const items2: MenuProps["items"] = [
    {
      label: t("types.type_1.title"),
      key: "inv1",
    },
    {
      label: t("types.type_2.title"),
      key: "inv2",

      children: [
        {
          type: "group",
          children: [
            {
              label: t("types.type_2.sub_1"),
              key: "inv2_1",
            },
            {
              label: t("types.type_2.sub_2"),
              key: "inv2_2",
            },
            {
              label: t("types.type_2.sub_3"),
              key: "inv2_3",
            },
          ],
        },
      ],
    },
    {
      label: t("types.type_3.title"),
      key: "inv5",

      children: [
        {
          type: "group",
          children: [
            {
              label: t("types.type_3.sub_1"),
              key: "inv5",
            },
            {
              label: t("types.type_3.sub_1"),
              key: "inv6",
            },
          ],
        },
      ],
    },
    {
      label: t("types.type_4.title"),
      key: "inv7",
      children: [
        {
          type: "group",
          children: [
            {
              label: t("types.type_4.sub_1"),
              key: "inv7",
            },
            {
              label: t("types.type_4.sub_2"),
              key: "inv8",
            },
          ],
        },
      ],
    },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");
  const handleMenuItemClick = (item: any) => {
    setSelectedMenuItem(item.key);
  };

  let content;
  // type_1: Biens Immobiliers
  //type_2: Investissement Direct  sub_1 :Création d'une société  sub_2 :Augmentation de capital ...
  //...
  switch (selectedMenuItem) {
    case "inv1":
      content = (
        <InvestmentTypes
          title={t("types.type_1.title")}
          key="1"
          subtitle={t("types.type_1.title")}
          img={img5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv2":
      content = (
        <InvestmentTypes
          title={t("types.type_2.sub_1")}
          key="2"
          subtitle={t("types.type_2.title")}
          img={img6}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv3":
      content = (
        <InvestmentTypes
          title={t("types.type_2.sub_2")}
          key="3"
          subtitle={t("types.type_2.title")}
          img={img7}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv4":
      content = (
        <InvestmentTypes
          title={t("types.type_2.sub_3")}
          key="4"
          subtitle={t("types.type_2.title")}
          img={img7}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv5":
      content = (
        <InvestmentTypes
          title={t("types.type_3.sub_1")}
          key="5"
          subtitle={t("types.type_3.title")}
          img={img6}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv6":
      content = (
        <InvestmentTypes
          title={t("types.type_3.sub_2")}
          key="6"
          subtitle={t("types.type_3.title")}
          img={img7}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv7":
      content = (
        <InvestmentTypes
          title={t("types.type_4.sub_1")}
          key="7"
          subtitle={t("types.type_4.title")}
          img={img5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    case "inv8":
      content = (
        <InvestmentTypes
          title={t("types.type_4.sub_2")}
          key="8"
          subtitle={t("types.type_4.title")}
          img={img7}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
      break;
    default:
      content = (
        <InvestmentTypes
          title={t("types.type_1.title")}
          key="1"
          subtitle={t("types.type_1.title")}
          img={img5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      );
  }
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
    <Layout>
      <Sider width={350} theme="light" className="sidebar-inv">
        <Title level={4}>{t("title")}</Title>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          onClick={handleMenuItemClick}
          items={items2}
        />
      </Sider>
      <Layout.Content>{content}</Layout.Content>
    </Layout>
  );
};

export default InvestmentDesktop;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../../locale/${locale}.json`) },
    },
  };
}
