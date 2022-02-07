import { useState } from "react";
import { useTokenPrice } from "react-moralis";

const styles = {
  token: {
    padding: "0 7px",
    height: "42px",
    gap: "5px",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
};
function TokenPrice(props) {
  const { data: formattedData } = useTokenPrice(props);

  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(!isUSDMode);

  const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

  return (
    <div style={styles.token}>
<<<<<<< HEAD
      <img
        src={props.image || noLogoToken}
        alt="logo"
        style={{ height: props?.size || "35px" }}
=======
      {/* <img
        src={props.image || noLogoToken}
        alt="logo"
        height={props?.size || "35px"}
        width={props?.size || "35px"}
>>>>>>> 6dad8e2ccb53543882e8f543c7f932272f7ca374
      />
      <span
        style={{ cursor: "pointer" }}
        onClick={toggleDisplayStyle}
        title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
      >
        {formattedData &&
          (isUSDMode
            ? formattedData.formattedUsd
            : formattedData.formattedNative)}
<<<<<<< HEAD
      </span>
=======
      </span> */}
>>>>>>> 6dad8e2ccb53543882e8f543c7f932272f7ca374
    </div>
  );
}
export default TokenPrice;
