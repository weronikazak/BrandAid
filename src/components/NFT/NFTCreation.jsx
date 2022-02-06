import { Typography } from "antd";
import React, { Component } from "react";
import { CreditCardOutlined } from "@ant-design/icons";
import { UploadOutlined  } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
import Dropzone from 'react-dropzone';

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


export class NFTCreation extends Component {

// const droppedFile = () => {
// <div style={}></div>
// };
  
  render () {
    return (
      <>
        <div style={{width: "100vw", height: "100vh", scrollBehavior:"smooth", overflowY: "scroll", background: "#fff", position: "fixed", top: 0}}>
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{ margin: "auto", width: "40vw", justifyContent: "center" }}>
      <div style={{padding: "0 48px"}}>
        <div style={{fontWeight: 500, textAlign: "left"}}>
          <h1>Publisher & NFT Details</h1>
        </div>
        
        <div style={styles.select}>
            <Text>Select Publisher</Text>
          <br/>
          <Input value="Revv Racing"
           style={{borderRadius: "10px",padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>

        <div style={styles.select}>
            <Text>NFT Creative 1</Text>
          <p style={{color: "#86898D"}}>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 9 MB</p>
        </div>
        
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div style={{textAlign:"center", width: "100%", padding:"100px", border: "dashed 2px grey"}}>
        <UploadOutlined style={{fontSize: 64}} />
        </div>
      </div>
    </section>
  )}
</Dropzone>

        <div style={{fontWeight: 500, textAlign: "left"}}>
          <h2>Metadata</h2>
        </div>
        <div style={styles.select}>
            <Text>NFT Name</Text>
          <br/>
          <Input value="Nike Tier 1"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Rarity</Text>
          <br/>
          <Input value="Common"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Value</Text>
          <br/>
          <Input value="0.5 MATIC"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Quantity</Text>
          <br/>
          <Input value="10,000"
          style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>NFT Evolution Count</Text>
          <br/>
          <Input value="5"
           style={{borderRadius: "10px", padding: "10px",background: "#F2F2F2"}} size="large" />
        </div>
        <div style={styles.select}>
            <Text>Description</Text>
          <br/>
          <textarea style={{borderRadius: "10px", width:"100%", height:"100px", padding: "10px",background: "#F2F2F2"}}>
          Nike sells footwear, clothing and sports accessories in thousands of 
stores across the world. Collect more of this NFT and claim exciting
real world rewards!
           </textarea>
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>
      </>
    );
  }
}

export default NFTCreation;