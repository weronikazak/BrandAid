import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import { Button, Card, Modal } from "antd";
import { useState } from "react";
import Address from "./Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import Text from "antd/lib/typography/Text";
import Link from "next/link";

const styles = {
  signup: {
    height: "48px",
    padding: "0 12px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "#7A09D2",
    marginLeft: "10px",
    cursor: "pointer",
    fontWeight: 800
  },
  login: {
    height: "48px",
    padding: "0 12px",
    color: "white",
    fontWeight: 800,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "#9E4FDC",
    cursor: "pointer"
  }
};

function Account() {
  const { authenticate, isAuthenticated, logout, account, chainId } =
    useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!isAuthenticated) {
    return (
      // <div
      //   style={styles.account}
      //   onClick={() => authenticate({ signingMessage: "Hello World!" })}
      // >
      //   <p style={styles.text}>Authenticate</p>
      // </div>
      <div style={{ display: "inline-block", display: "flex" }}>
        <Link  href="/login">
        <Button style={styles.login} >
          Login
        </Button>
        </Link>
      <Link href="/signUp">
        <Button
          style={styles.signup}
          // onClick={() => authenticate({ signingMessage: "Hello World!" })}
          >
          Sign Up
        </Button>
      </Link>
      </div>
    );
  }

  return (
    <>
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 6)}
        </p>
        <Blockie currentWallet scale={3} />
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={() => {
            logout();
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  );
}

export default Account;
