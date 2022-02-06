import { Typography } from "antd";
import React, { Component } from "react";
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
        border: "none"
      },
      textWrapper: { maxWidth: "80px", width: "100%",  },
      row: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      btnBack: {
        height: "54px",
        color: "white",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 800,
        justifyContent: "space-evenly",
        fontSize: "16px",
        width: "200px", 
        backgroundColor: "grey",
        marginTop: "25px",
        marginLeft: 160
      },
      btnNext: {
        height: "54px",
        color: "white",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 800,
        justifyContent: "space-evenly",
        fontSize: "16px",
        backgroundColor: "#7A09D2",
        width: "200px", 
        marginTop: "25px",
        marginLeft: 20
      },
      select: {
        fontSize: "14px", textAlign: "left", fontWeight: "light", margin: "10px 0"
      }
}

export class AdCampaign extends Component {
  render () {
    return (
      <>
        <div style={{width: "100vw", height: "100vh", background: "#fff", position: "fixed", top: 0}}>
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{ margin: "auto", width: "40vw", justifyContent: "center" }}>
      <div style={{padding: "0 48px"}}>
        <div style={{fontWeight: 500, textAlign: "left"}}>
          <h1 >Brand & Campaign Details</h1>
        </div>
        <p style={{color: "#86898D"}}>Advertiser: Nike Philippines Inc.</p>
        <p style={{color: "#86898D"}}>Brand: <b>Nike</b></p>
        <p style={{color: "#8209AD"}}>(Add/Change Brand)</p>
        <div style={styles.select}>
            <Text>Campaign Name</Text>
          <br/>
          <Input  value="Jordan Max Collection"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Campaign Start Date</Text>
          <br/>
          <Input  value="02/08/2022"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Campaign End Date</Text>
          <br/>
          <Input value="02/28/2022"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Preferred Reach: Country</Text>
          <br/>
          <Input value="Philippines"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Preferred Blockchain</Text>
          <br/>
          <Input value="Polygon"
           style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>

        <Link href="/dashboard">
        <Button
          type="primary"
          size="large" style={styles.btnBack}>
          Back
        </Button>
        </Link>

        <Link href="/dashboard">
        <Button
          type="primary"
          size="large" style={styles.btnNext}>
          Next
        </Button>
        </Link>
      </div>
    </div>
        </div>
      </>
    );
  }
}

export default AdCampaign;