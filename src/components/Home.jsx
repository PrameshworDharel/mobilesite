import React from "react";
import { ReactComponent as Vector } from "../assets/svg/Vector1.svg";
import { ReactComponent as ArrowIcon } from "../assets/svg/Vector.svg";
import { ReactComponent as AppleIcon } from "../assets/svg/1200px-Apple_gray_logo 1.svg";
import { ReactComponent as Line } from "../assets/svg/Line 4.svg";
import { ReactComponent as Star } from "../assets/svg/star.svg";
import Applephone from "../assets/images/phone.png";
import Rectangle from "../assets/images/Rectangle 18.png";
import LeftArrow from "../assets/images/Fill With Left Arrow.png";
import RightArrow from "../assets/images/Fill with Right Arrow.png";
import love from "../assets/images/love.png";
import Remote from "../assets/images/Frame 611.png";
import Eye from "../assets/images/Fill Eye.png";
import Keyboard from "../assets/images/ak-900-01-500x500 1.png";
import Desktop from "../assets/images/Frame 613.png";
import Chair from "../assets/images/Frame 614.png";

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
        <div className="flex justify-between">
          <div className="bg-gray  mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3">-40%</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Remote}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3">-35%</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Keyboard}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
            <div className="bg-black text-white text-center mt-10 p-3">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3">-30%</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Desktop}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3">-25%</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Chair}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  ">
          <div className="mt-6">
            <h5 className="font-bold">HAVIT HV-G92 Gamepad</h5>
            <div className="flex gap-3">
              <p className="text-red">$120</p>
              <p>$160</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(88)</small>
            </div>
          </div>
          <div className="mt-6 ml-28">
            <h5 className="font-bold">IPS LCD Gaming Monitor</h5>
            <div className="flex gap-3">
              <p className="text-red">$920</p>
              <p>$1060</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(75)</small>
            </div>
          </div>
          <div className="mt-6 ml-48">
            <h5 className="font-bold">AK-900 Wired Keyboard</h5>
            <div className="flex gap-3">
              <p className="text-red">$960</p>
              <p>$1160</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(99)</small>
            </div>
          </div>
          <div className="mt-6 ml-48">
            <h5 className="font-bold">S-Series Comfort Chair </h5>
            <div className="flex gap-3">
              <p className="text-red">$370</p>
              <p>$400</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(99)</small>
            </div>
          </div>
        </div>
        <div className="mt-10  flex justify-center">
          <button className=" bg-red text-center text-white shadow-sm rounded-sm p-3 px-7">
            View All Products
          </button>
        </div>
        <hr className=" p-5 mt-10"></hr>
      </div>
    </>
  );
};
export default Homepage;
