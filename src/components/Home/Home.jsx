import { Button, Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";
import pic from '../../../public/Saly-11.png'; 
import Image from 'next/image'

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  }
};

const styles = {
    campaign: {
      marginTop: "24px",
      height: "100px",
      padding: "10px 32px",
      color: "white",
      borderRadius: "12px",
      backgroundColor: "#7A09D2",
      marginLeft: "10px",
      cursor: "pointer",
      fontWeight: 800,
      fontSize: "24px"
    },
}

export default function Home() {
  const { Moralis } = useMoralis();

  return (
      <div style={{width: "100vw"}}>
        <div style={{ textAlign: "center", justifyContent: "space-evenly", display: "flex", }}>
        <div style={{width: "60vw"}}>
            <h1 style={{fontSize: 64, fontWeight: 900}}>Bring your Brand to the <span style={{color: "#8209AD"}}>Metaverse</span></h1>
            <h2 style={{fontWeight: 800}}>BrandAid is the brand’s gateway to the crypto world through a rewarding system that is mutually beneficial to the brand, the metaverse, and users.</h2>
            <Button style={styles.campaign}>Start your <br/> campaign Now!</Button>
        </div>

        <div style={{fontSize: 64, fontWeight: 700, width: "30vw" }}>
            <Image src={pic} />
        </div>
        </div>
    </div>
  );
}