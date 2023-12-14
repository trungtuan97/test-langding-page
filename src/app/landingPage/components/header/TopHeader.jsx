import IconDown from "@/image/IconDown";
import IconLine from "@/image/IconLine";
import React from "react";

function TopHeader() {
  return (
    <div className="hidden px-[255px] leading-[26px] lg:grid  py-[7px] w-full font-Open-Sans text-[15px] font-[400] bg-[#fdf2f5]	">
      <div className="lg:w-[1410px] flex justify-between">
        <div className="text-[#1A1114] opacity-70	">
          KITO - Every day low price
        </div>
        <div className="text-[#C81B10]">
          Free Delivery on orders over £120. Don’t miss discount.
        </div>
        <div className="flex items-center">
          <div className="pr-[5px]">ENG</div>
          <div className="pr-[15px]">
            <IconDown />
          </div>
          <div className="pr-[15px]">
            <IconLine />
          </div>
          <div className="pr-[5px]">USD</div>
          <div className="">
            {" "}
            <IconDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
