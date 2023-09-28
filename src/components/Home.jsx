import React from "react";
import { ReactComponent as Vector } from "../assets/svg/Vector1.svg";
import { ReactComponent as ArrowIcon } from "../assets/svg/Vector.svg";
import { ReactComponent as AppleIcon } from "../assets/svg/1200px-Apple_gray_logo 1.svg";
import { ReactComponent as Line } from "../assets/svg/Line 4.svg";
import Applephone from "../assets/images/phone.png";
import Rectangle from "../assets/images/Rectangle 18.png";
import LeftArrow from "../assets/images/Fill With Left Arrow.png";
import RightArrow from "../assets/images/Fill with Right Arrow.png";

const Homepage = () => {
  return (
    <>
      <div className="flex">
        <div className="p-16">
          <div className="flex gap-36 ">
            <div className="mt-3">Woman’s Fashion </div>
            <div className="mt-4">
              <Vector />
            </div>
          </div>
          <div className="flex gap-40 ">
            <div className="mt-3">Men’s Fashion </div>
            <div className="mt-4">
              <Vector className="ml-2" />
            </div>
          </div>
          <div className="mt-3">Electronics</div>
          <div className="mt-3">Home & Lifestyle</div>
          <div className="mt-3">Medicine</div>
          <div className="mt-3">Sports & Outdoor</div>
          <div className="mt-3">Baby’s & Toys</div>
          <div className="mt-3">Groceries & Pets</div>
          <div className="mt-3">Health & Beauty</div>
        </div>

        <Line className="" />

        <div className=" bg-black text-white mt-5 p-16 ml-20">
          <div className="flex gap-6">
            <AppleIcon />
            <p className="mt-3">iPhone 14 Series</p>
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-3xl">Up to 10%</h1>
            <h1 className="font-bold text-3xl">off Voucher</h1>
          </div>
          <div className="flex gap-4">
            <button className="mb-3 mt-20">
              <p className="mt-2">ShopNow</p>
              <hr></hr>
            </button>
            <ArrowIcon className="mt-24" />
          </div>
        </div>
        <div className="flex">
          <img src={Applephone} className="w-[100%] h-[95.5%] mt-5"></img>
        </div>
      </div>
      <div className="mt-32 p-16 ">
        <div className="flex  gap-6">
          <img src={Rectangle}></img>
          <p className="text-red-600 mt-2">Today’s</p>
        </div>
        <div className="flex  justify-between mt-10">
          <div className="flex">
            <div>
              <h1 className="font-bold text-2xl ">Flash Sales</h1>
            </div>
            <div className=" flex ml-40">
              <div>
                <small className="">Days</small>
                <h1 className="font-bold  mt-2 ml-3">03</h1>
              </div>
              <div>
                <h1 className="font-bold  text-red-700 ml-5 mt-4">:</h1>
              </div>
            </div>
            <div className=" flex ml-5">
              <div>
                <small className="">Hours</small>
                <h1 className="font-bold  mt-2 ml-3">23</h1>
              </div>
              <div>
                <h1 className="font-bold  text-red-700 ml-5 mt-4">:</h1>
              </div>
            </div>
            <div className=" flex ml-5">
              <div>
                <small className="">Minutes</small>
                <h1 className="font-bold  mt-2 ml-3">5</h1>
              </div>
              <div>
                <h1 className="font-bold  text-red-700 ml-5 mt-4">:</h1>
              </div>
            </div>
            <div className=" flex ml-5">
              <div>
                <small className="">Seconds</small>
                <h1 className="font-bold  mt-2 ml-3">56</h1>
              </div>
            </div>
          </div>

          <div className="">
            <button>
              <img src={LeftArrow}></img>
            </button>
            <button className="ml-3">
              <img src={RightArrow}></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
