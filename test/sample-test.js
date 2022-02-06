const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NTFCoupon", function () {
  const coupon;
  beforeEach(() => {
    const Coupon = await ethers.getContractFactory("Coupon");
    const coupon = await Coupon.deploy("0xb09Ec64d3552e0461b41dDbF674CeD7dF9373F6C");
    await coupon.deployed();
  });

  it("Should return info about the NFT coupon creation", async function () {

    expect(await coupon.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

