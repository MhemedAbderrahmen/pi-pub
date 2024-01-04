import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import TopMenu from "../menu";
const { Content, Sider, Footer } = Layout;
const { Item } = Menu;
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="header">
      <div className="content-menu">
        <div className="links">
          <Link
            href="/"
            onClick={() => setIsActive(false)}
            className="logo-header logo"
          >
            <Image className="logo-header-img" src={logo} alt="logo bct" />
            {isActive}
          </Link>
          <TopMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
