import img5 from "@src/assets/images/img5.jpg";
import InvestmentTypes from "@src/components/Investment/InvestmentTypes";
import { Collapse, Typography, type CollapseProps } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React from "react";
const { Title } = Typography;
const InvestmentMobile: React.FC = () => {
  const t = useTranslations("page_investment");
  const type2: CollapseProps["items"] = [
    {
      key: "type2_1",
      label: t("types.type_2.sub_1"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_2.sub_1")}
            key="1"
            subtitle={t("types.type_2.sub_1")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
    {
      key: "type2_2",
      label: t("types.type_2.sub_2"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_2.title")}
            key="1"
            subtitle={t("types.type_2.title")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
    {
      key: "type2_3",
      label: t("types.type_2.sub_3"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_3.title")}
            key="1"
            subtitle={t("types.type_3.title")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
  ];
  const type3: CollapseProps["items"] = [
    {
      key: "type3_1",
      label: t("types.type_3.sub_1"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_3.sub_1")}
            key="1"
            subtitle={t("types.type_3.sub_1")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
    {
      key: "type3_2",
      label: t("types.type_3.sub_2"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_3.title")}
            key="1"
            subtitle={t("types.type_3.title")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
  ];
  const type4: CollapseProps["items"] = [
    {
      key: "type4_1",
      label: t("types.type_4.sub_1"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_4.sub_1")}
            key="1"
            subtitle={t("types.type_4.sub_1")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
    {
      key: "type4_2",
      label: t("types.type_4.sub_2"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_4.title")}
            key="1"
            subtitle={t("types.type_4.title")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
  ];
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t("types.type_1.title"),
      children: (
        <>
          <InvestmentTypes
            title={t("types.type_1.title")}
            key="1"
            subtitle={t("types.type_1.title")}
            img={img5}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore gnaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      ),
    },
    {
      key: "2",
      label: t("types.type_2.title"),
      children: <Collapse defaultActiveKey="1" ghost items={type2} />,
    },
    {
      key: "3",
      label: t("types.type_3.title"),
      children: <Collapse defaultActiveKey="1" ghost items={type3} />,
    },
    {
      key: "4",
      label: t("types.type_4.title"),
      children: <Collapse defaultActiveKey="1" ghost items={type4} />,
    },
  ];

  return (
    <>
      <div className="investement-mobile">
        <Title level={3}>{t("title")}</Title>

        <Collapse defaultActiveKey={["3"]} ghost items={items} />
      </div>
    </>
  );
};

export default InvestmentMobile;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../../locale/${locale}.json`) },
    },
  };
}
