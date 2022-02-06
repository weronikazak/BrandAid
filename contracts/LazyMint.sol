pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LazyMint is AccessControl, EIP712 {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string private constant SIGNING_DOMAIN = "MAXZ";
    string private constant SIGNATURE_VERSION = "1";

    struct Coupon {
        uint256  couponId;
        uint256  value;
        string uri; // the attributes will be stored in the metadata
        uint256  quantity;
        bytes signature;
    }


    constructor(address payable minter)
        EIP712(SIGNING_DOMAIN, SIGNATURE_VERSION) {
        _setupRole(MINTER_ROLE, minter);
    }

    // Hashing functions
  function _hash(Coupon calldata coupon) internal view returns (bytes32) {
    return _hashTypedDataV4(keccak256(abi.encode(
      keccak256("Coupon(uint256 couponId,uint256 value,string uri,uint256 quantity)"),
      coupon.couponId,
      coupon.value,
      coupon.uri,
      coupon.quantity,
      keccak256(bytes(coupon.uri))
    )));
  }

  function getChainID() external view returns (uint256) {
    uint256 id;
    assembly {
        id := chainid()
    }
    return id;
  }

 
  function _verify(Coupon calldata coupon) internal view returns (address) {
    bytes32 digest = _hash(coupon);
    return ECDSA.recover(digest, coupon.signature);
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override (AccessControl) returns (bool) {
    return AccessControl.supportsInterface(interfaceId);
  }
}