import IconDown from "@/image/IconDown";
import IconHeart from "@/image/IconHeart";
import Image from "next/image";

import React from "react";

function Nav() {
  return (
    <div id="nav" className="w-full flex justify-center">
      <div className="w-full lg:w-[1410px] h-[75px] lg:h-[110px] flex items-center justify-between px-[20px] py-[10px] lg:px-0 lg:py-0">
        <div className="hidden lg:flex gap-[40px] text-[#000000] text-[15px] font-Open-Sans font-[700] leading-[26px]">
          <div className="">HOME</div>
          <div className="">Shop</div>
          <div className="flex items-center gap-[5px]">
            <div>Pages</div>
            <IconDown />
          </div>
          <div className="">Contact</div>
        </div>
        <div className="text-[#1A1114] text-[30px] font-[800] lg:text-[54px] leding-[55px] lg:leading-[70px] uppercase font-Sansita">
          kito
        </div>
        <div className="hidden lg:flex gap-[30px]">
          <div className="">
            <Image src="/image/search.png" width="25" height="25" />
          </div>
          <div className="relative">
            <Image src="/image/bag.png" width="25" height="25" />
            <div className="  bg-[#1A1114] rounded-full text-white text-center px-[7px] py-[4px] inline-flex text-[10px] font-[600] leading-[14px] font-Open-Sans border-[1px] boder-white absolute left-[9px] top-[12px]">
              0
            </div>
          </div>
          <div className="relative">
            <IconHeart />
            <div className="  bg-[#1A1114] rounded-full text-white text-center px-[7px] py-[4px] inline-flex text-[10px] font-[600] leading-[14px] font-Open-Sans border-[1px] boder-white absolute left-[9px] top-[12px]">
              0
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          {" "}
          <Image src="/image/mobileNavIcon.png" width="25" height="25" />
        </div>
      </div>{" "}
    </div>
  );
}

export default Nav;
