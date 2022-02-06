import React from "react";
import { useRouter } from "next/router";
import { Menu } from "antd";
import Link from "next/link";

function MenuItems() {
  const { pathname } = useRouter();

  return (
    <Menu
      mode="horizontal"
      style={{
        display: "flex",
        background: "#F2F2F2",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "right",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/home">
        <Link href="/home">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/exploreAds">
        <Link href="/exploreAds">
          <a>Explore Ads</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/contact">
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="/login">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/signup">
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
