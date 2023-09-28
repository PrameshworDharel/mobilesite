import React from "react";
import { ReactComponent as Dropdown } from "../assets/svg/DropDown.svg";
import { ReactComponent as Search } from "../assets/svg/Component 2.svg";
import { ReactComponent as Wishlist } from "../assets/svg/Wishlist.svg";
import { ReactComponent as Shop } from "../assets/svg/Cart1 with buy.svg";
const Header = () => {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="flex justify-center gap-5 ">
          <p className="p-3">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="mb-3">
            <p className="mt-2">ShopNow</p>
            <hr></hr>
          </button>
          <div className="flex ml-64 p-3 gap-3">
            <h2>English</h2>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className=" justify-between flex p-12">
        <div>
          <h1 className="font-bold text-5xl">Exclusive</h1>
        </div>
        <div className="mt-6">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="flex gap-5 mr-5 mt-2">
          <div className="flex gap-5 mt-2">
            <input
              type=""
              value=""
              placeholder="What are you looking for? "
              className="border bg-primary px-9 py-2 shadow-sm "
            ></input>
            <Search className="-translate-x-12 mt-3 " />
          </div>
          <div className="flex gap-9 mt-4">
            <Wishlist />
            <Shop />
          </div>
        </div>
      </div>
      <hr className="h-2"></hr>
    </>
  );
};
export default Header;
