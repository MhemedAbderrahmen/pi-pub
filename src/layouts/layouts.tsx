import { Layout as AntLayout } from "antd";
import { GetStaticPropsContext } from "next";
import React from "react";
import Footer from "./footer/index";
import Navbar from "./header/index";
type LayoutProps = {
  children?: React.ReactNode;
};
const { Content } = AntLayout;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content className="">{children}</Content>
      <Footer />
    </>
  );
};
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: { ...require(`../../locale/${locale}.json`) },
    },
  };
}

export default Layout;
