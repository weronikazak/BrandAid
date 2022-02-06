import React from "react";
import { Layout } from "antd";
import Text from "antd/lib/typography/Text";

import Account from "./Account";
import Chains from "./Chains";
import TokenPrice from "./TokenPrice";
import NativeBalance from "./NativeBalance";
import MenuItems from "./MenuItems";
import Logo from "./Logo";

import "antd/dist/antd.css";
import "styles/style.module.css";

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    // fontFamily: "Roboto, sans-serif",
    fontFamily: "'Inter', sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#F2F2F2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
    // fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  }
};

function BaseLayout({ children }) {
  return (
    <Layout style={{ display:"absolute", "bottom":0, height: "100vh", overflow: "auto", background: "#DBDBDB" }}>
      <Header style={styles.header}>
        <Logo />
        <MenuItems />
        <div style={styles.headerRight}>
          {/* <Chains /> */}
          
          {/* <NativeBalance /> */}
          <Account />
        </div>
      </Header>
      <div style={styles.content}>{children}</div>
      
      <Footer style={{ textAlign: "left", background: "#F2F2F2", width: "100vw", display: "flex",
                      justifyContent: "space-between"}}>
        <Text style={{ display: "inline-block", fontSize: 16, fontWeight: "bold" }}>
          <Text style={{ color: "black" }}>
            Brand
          </Text>
          <Text style={{ color: "#8209AD" }}>
            Aid
          </Text>
        </Text>

        <Text style={{ display: "inline-block", fontWeight: "bold", float: "right" }}>
          Copyright 2022 © BrandAid. All rights reserved.
        </Text>

      </Footer>
    </Layout>
  );
}

export default BaseLayout;
