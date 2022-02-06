import React from "react";
import Text from "antd/lib/typography/Text";

function Logo() {
  return (
    <Text style={{  display: "block", fontWeight: "bold", fontSize: 32, paddingLeft: 32 }}>
        <Text style={{ color: "black" }}>
          Brand
        </Text>
        <Text style={{ color: "#8209AD" }}>
          Aid
      </Text>
    </Text>
  );
}

export default Logo;
