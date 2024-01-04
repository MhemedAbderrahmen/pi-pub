import InvestmentDesktop from "@src/components/Investment/InvestmentDesktop";
import InvestmentMobile from "@src/components/Investment/InvestmentMobile";
import { Grid } from "antd";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const Investment: React.FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);
  const { lg } = useBreakpoint();
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(() => !lg);
  }, [lg]);

  const t = useTranslations("page_investment");

  return (
    <div className="content-wrapper page_investment">
      {!isMobile ? <InvestmentDesktop /> : <InvestmentMobile />}
    </div>
  );
};

export default Investment;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../locale/${locale}.json`) },
    },
  };
}
