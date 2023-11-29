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
import Speaker from "../assets/images/Frame 694.png";
import Remote from "../assets/images/Frame 611.png";
import Eye from "../assets/images/Fill Eye.png";
import Keyboard from "../assets/images/ak-900-01-500x500 1.png";
import Desktop from "../assets/images/Frame 613.png";
import Chair from "../assets/images/Frame 614.png";
import Phone from "../assets/images/Category-CellPhone.png";
import Computer from "../assets/images/Category-Computer.png";
import Watch from "../assets/images/Category-SmartWatch.png";
import Camera from "../assets/images/Category-Camera.png";
import Headphone from "../assets/images/Category-Headphone.png";
import Gaming from "../assets/images/Category-Gamepad.png";
import Jocket from "../assets/images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import Bag from "../assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import Cpu from "../assets/images/gammaxx-l240-argb-1-500x500 1.png";
import Booktable from "../assets/images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png";
import Dogfood from "../assets/images/71RdoeXxtrL 1.png";
import Curology from "../assets/images/652e82cd70aa6522dd785109a455904c.png";
import Asus from "../assets/images/ideapad-gaming-3i-01-500x500 1.png";
import Dslr from "../assets/images/eos-250d-03-500x500 1.png";
import Gp from "../assets/images/GP11_PRD3 1.png";
import Shoes from "../assets/images/Copa_Sense 1.png";
import Playstation from "../assets/images/ps5-slim-goedkope-playstation_large 1.png";
import Women from "../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
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
          <p className="text-red mt-2">Today’s</p>
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
                <button className="rounded-full px-2 py-2 bg-white hover:bg-red">
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
                <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
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
                <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
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
                <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
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

      <div className=" p-16 ">
        <div className="flex  gap-6">
          <img src={Rectangle}></img>
          <p className="text-red mt-2">categories</p>
        </div>
        <div className="mt-10 flex justify-between ">
          <div>
            <h1 className="font-bold text-2xl ">Browse By Category</h1>
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
        <div className="flex justify-between mt-8 ">
          <div className="shadow-lg  p-10">
            <img src={Phone}></img>
            <h5 className="mt-2">Phones</h5>
          </div>
          <div className="shadow-lg  p-10">
            <img src={Computer}></img>
            <h5 className="mt-2">Computer</h5>
          </div>
          <div className="shadow-lg  p-10">
            <img src={Watch}></img>
            <h5 className="mt-2">Watch</h5>
          </div>
          <div className="shadow-lg  p-10 bg-red">
            <img src={Camera}></img>
            <h5 className="mt-2">Camera</h5>
          </div>
          <div className="shadow-lg w-25 p-10">
            <img src={Headphone}></img>
            <h5 className="mt-2">Headphone</h5>
          </div>
          <div className="shadow-lg  p-10">
            <img src={Gaming}></img>
            <h5 className="mt-2">Gmaing</h5>
          </div>
        </div>
        <hr className=" mt-20"></hr>
      </div>

      <div className=" p-16 ">
        <div className="flex  gap-6">
          <img src={Rectangle}></img>
          <p className="text-red mt-2">This Month</p>
        </div>
        <div className="mt-10 flex justify-between ">
          <div>
            <h1 className="font-bold text-2xl ">Best Sellings Products</h1>
          </div>
          <div className="bg-red rounded-sm px-4 py-2">
            <button className="">View All</button>
          </div>
        </div>
      </div>

      <div className="p-16">
        <div className="flex gap-10">
          <div className="bg-gray  w-[25%]   mt-20  shadow-md">
            <div className="flex justify-end  p-6">
              <button className="rounded-full px-2 py-2 bg-white hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Jocket}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Bag}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Cpu}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>

            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Booktable}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-6">
            <h5 className="font-bold">The north coat</h5>
            <div className="flex gap-3">
              <p className="text-red">$260</p>
              <p>$360</p>
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
          <div className="mt-6 ml-56">
            <h5 className="font-bold">Gucci duffle bag</h5>
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
              <small className="">(75)</small>
            </div>
          </div>
          <div className="mt-6 ml-52">
            <h5 className="font-bold">RGB liquid CPU cooler</h5>
            <div className="flex gap-3">
              <p className="text-red">$160</p>
              <p>$170</p>
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
            <h5 className="font-bold">Small BookSelf </h5>
            <div className="flex gap-3">
              <p className="text-red">$360</p>
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
      </div>
      <div className="bg-black p-16 text-white">
        <div>
          <h1 className="text-red">categories</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-4xl bold mt-6">
              <h1>Enhance Your</h1>
              <h1 className="mt-3">Music Experience</h1>
            </div>
            <div className=" flex mt-10 gap-7 text-black">
              <button className="rounded-full px-6 py-3 bg-white ">
                23 <br></br>Hours
              </button>
              <button className="rounded-full px-7 py-3 bg-white ">
                05 <br></br>Days
              </button>
              <button className="rounded-full px-4 py-5 bg-white ">
                59 <br></br>Minutes
              </button>
              <button className="rounded-full px-4 py-5 bg-white ">
                35 <br></br>Seconds
              </button>
            </div>
            <div className="mt-16">
              <button className="bg-red rounded px-7 py-2">Buy Now!</button>
            </div>
          </div>

          <div className="">
            <img src={Speaker}></img>
          </div>
        </div>
      </div>
      <div className="p-16">
        <div className="flex  gap-6">
          <img src={Rectangle}></img>
          <p className="text-red mt-2">Our products </p>
        </div>
        <div className="mt-10 flex justify-between ">
          <div>
            <h1 className="font-bold text-2xl ">Explore Our Products</h1>
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
        <div className="flex gap-10">
          <div className="bg-gray  w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Dslr}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Dslr}></img>
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
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Asus}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>

            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Curology}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-6">
            <h5 className="font-bold">Breed Dry Dog Food</h5>
            <div className="flex gap-3">
              <p className="text-red">$100</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(35)</small>
            </div>
          </div>
          <div className="mt-6 ml-52">
            <h5 className="font-bold">CANON EOS DSLR Camera</h5>
            <div className="flex gap-3">
              <p className="text-red">$360</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(95)</small>
            </div>
          </div>
          <div className="mt-6 ml-40">
            <h5 className="font-bold">ASUS FHD Gmaing Laptop</h5>
            <div className="flex gap-3">
              <p className="text-red">$700</p>
              <p>$170</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(325)</small>
            </div>
          </div>
          <div className="mt-6 ml-40">
            <h5 className="font-bold">Curology Product Set </h5>
            <div className="flex gap-3">
              <p className="text-red">$500</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(145)</small>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="bg-gray w-[25%]  mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3"> New</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white hover:bg-red">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Gp}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%]  mt-20  shadow-md">
            <div className="flex justify-between p-6">
              <div>
                <button className="bg-red rounded-sm px-3"> New</button>
              </div>
              <div>
                <button className="rounded-full px-2 py-2 bg-white hover:bg-red">
                  <img src={love} alt="" />
                </button>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Shoes}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>
            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Asus}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray w-[25%] mt-20  shadow-md">
            <div className="flex justify-end p-6">
              <button className="rounded-full px-2 py-2 bg-white  hover:bg-red">
                <img src={love} alt="" />
              </button>
            </div>

            <div className="flex mt-2 justify-between">
              <div className=" ml-6 mb-5">
                <img src={Curology}></img>
              </div>
              <div className="ml-15">
                <button className="rounded-full mr-5 px-1 py-1 bg-white">
                  <img src={Eye} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-6">
            <h5 className="font-bold">GP11 Shooter USB Gamepad</h5>
            <div className="flex gap-3">
              <p className="text-red">$100</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(35)</small>
            </div>
          </div>
          <div className="mt-6 ml-36">
            <h5 className="font-bold">Jr.Zoom Soccer Cleats</h5>
            <div className="flex gap-3">
              <p className="text-red">$360</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(95)</small>
            </div>
          </div>
          <div className="mt-6 ml-48">
            <h5 className="font-bold">ASUS FHD Gmaing Laptop</h5>
            <div className="flex gap-3">
              <p className="text-red">$700</p>
              <p>$170</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(325)</small>
            </div>
          </div>
          <div className="mt-6 ml-40">
            <h5 className="font-bold">Curology Product Set </h5>
            <div className="flex gap-3">
              <p className="text-red">$500</p>
            </div>
            <div className="flex gap-2 mt-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <small className="">(145)</small>
            </div>
          </div>
        </div>
        <div className="mt-10  flex justify-center">
          <button className=" bg-red text-center text-white shadow-sm rounded-sm p-3 px-7">
            View All Products
          </button>
        </div>
      </div>
      <div className=" p-16 ">
        <div className="flex  gap-6">
          <img src={Rectangle}></img>
          <p className="text-red mt-2">Featured</p>
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-2xl ">New Arrival</h1>
        </div>
      </div>
    </>
  );
};
export default Homepage;
