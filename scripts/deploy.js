const hre = require("hardhat");

async function main() {

  const NFTCoupon = await hre.ethers.getContractFactory("CouponNFT");
  const coupon = await NFTCoupon.deploy("0xb09Ec64d3552e0461b41dDbF674CeD7dF9373F6C");

  await coupon.deployed();

  console.log("Coupon deployed to:", coupon.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
