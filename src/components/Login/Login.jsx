import { Typography } from "antd";
import React, { useMemo } from "react";
import { CreditCardOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";

const { Text } = Typography;

const styles = {
    card: {
        alignItems: "center",
        width: "100%",
      },
      header: {
        textAlign: "center",
      },
      input: {
        width: "100%",
        outline: "none",
        fontSize: "16px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textverflow: "ellipsis",
        appearance: "textfield",
        color: "#041836",
        fontWeight: "700",
        border: "none",
        backgroundColor: "transparent",
      },
      textWrapper: { maxWidth: "80px", width: "100%",  },
      row: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      btn: {
        height: "54px",
        color: "white",
        borderRadius: "12px",
        backgroundColor: "#7A09D2",
        cursor: "pointer",
        fontWeight: 800,
        fontSize: "16px",
        width: "100%", 
        marginTop: "25px"
      },
      select: {
        fontSize: "16px", textAlign: "left", fontWeight: "light", margin: "10px 0"
      }
}

export default function Login() {
  return (
      <div style={{width: "100vw"}}>
        <div style={{ textAlign: "center", justifyContent: "space-evenly", display: "flex", }}>
        <div style={{width: "60vw"}}>
            <h1 style={{fontSize: 64, fontWeight: 900}}>Bring your Brand to the <span style={{color: "#8209AD"}}>Metaverse</span></h1>
            <h2 style={{fontWeight: 800, padding: "0 150px"}}>BrandAid is the brand’s gateway to the crypto world through a rewarding system that is mutually beneficial to the brand, the metaverse, and users.</h2>
        </div>

       
       
        <div style={{ width: "30vw" }}>
      <div style={{padding: "0 48px"}}>
        <div style={styles.header, {textAlign: "left"}}>
          <h2>Login</h2>
        </div>
        <div style={styles.select}>
            <Text>Email or Phone Number:</Text>
          <br/>
          <Input style={{borderRadius: "10px", padding: "10px",background: "#5E6167", color: "white"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Password:</Text>
          <br/>
          <Input type="password" style={{borderRadius: "10px", padding: "10px",background: "#5E6167", color: "white"}} size="large" />
        </div>

        <Button
          type="primary"
          size="large" style={styles.btn}>
          Next
        </Button>
        <br/><br/>
        <Text style={{fontSize: "16px", marginTop: "24px"}}>
        Not yet a member? 
            <Link href="/signUp">
            <span style={{textDecoration: "underline", cursor: "pointer", color: "#8209AD"}}>Sign Up</span>
            </Link>
        </Text>

      </div>
    </div>
        </div>
    </div>
  );
}