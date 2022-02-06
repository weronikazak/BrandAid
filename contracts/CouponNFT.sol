//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./LazyMint.sol";

// import "@openzeppelin/contracts/access/AccessControl.sol";
// import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
// import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract CouponNFT is 
    ERC1155, 
    Ownable,
    Pausable,
    ERC1155Burnable,
    ERC1155Pausable,
    ERC1155Supply, LazyMint
     {


    using Counters for Counters.Counter;

    Counters.Counter private _couponIds;

    mapping(uint256 => string) private _tokenURIs;

    // an array of all coupons
    Coupon[] public coupons;

    event CreateCouponNFT(Coupon _coupon, address _current_owner);
    

    constructor(address payable minter)
        LazyMint(minter)
        ERC1155("ipfs://") {
        _setupRole(MINTER_ROLE, minter);
    }

    function setURI(uint256 tokenId, string memory _tokenURI) public onlyOwner {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return
            string(abi.encodePacked(super.uri(tokenId), _tokenURIs[tokenId]));
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function createCouponNFT(address redeemer, Coupon calldata coupon) public payable returns (uint256) {
        address signer = _verify(coupon);
        
        require(hasRole(MINTER_ROLE, signer), "Signature invalid or unauthorized");

        require(msg.value >= coupon.value, "Insufficient funds to redeem");

        _mint(signer, coupon.couponId, coupon.quantity, "");

        coupons.push(coupon);
        _couponIds.increment();

        safeTransferFrom(signer, redeemer, coupon.couponId, 1, "0x0");
        
        emit CreateCouponNFT(coupon, msg.sender);

        return coupon.couponId;
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Pausable, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }


  function supportsInterface(bytes4 interfaceId) public view virtual override (LazyMint, ERC1155) returns (bool) {
    return ERC1155.supportsInterface(interfaceId) || LazyMint.supportsInterface(interfaceId);
  }

}
