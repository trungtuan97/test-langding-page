import IconF from "@/image/IconF";
import IconI from "@/image/IconI";
import IconT from "@/image/IconT";
import IconTriangle from "@/image/IconTriangle";
import IconY from "@/image/IconY";
import Iconrounded from "@/image/Iconrounded";
import Image from "next/image";
import React from "react";

function LangdingPageBody() {
  return (
    <div className="w-full lg:w-[1410px]">
      {/* About us */}
      <div className="mt-[60px] lg:mt-[100px] grid gap-[10px] lg:gap-[15px] text-center lg:text-left ">
        <div className="font-Sansita text-[36px] lg:text-[54px] font-[700] leading-[47px] capitalize text-[#1A1114]">
          About us
        </div>
        <div className="font-Open-Sans text-[15px] leading-[26px] font-[400] flex justify-center lg:justify-start">
          <div className="">Home </div>{" "}
          <div className="mx-3 text-[#1a111433]">|</div>{" "}
          <div className=" text-[#1a111480]">About</div>
        </div>
      </div>
      {/*  */}
      <div className="mt-[47px] lg:mt-[70px] h-[733px] lg:h-[600px] flex flex-col lg:flex-row	">
        <div className="w-full lg:w-1/2 pl-[62px] lg:pl-[90px] pt-[60px] lg:pt-[112px] pb-[60px] lg:pb-[122px] bg-[#E5F8FD] pr-[61px] lg:pr-[67px] order-last lg:order-first ">
          <div className="py-[7px] px-[15px] bg-[#e6e6ef] font-Open-Sans rounded-[5px] w-max text-[15px] font-[700] text-[#EC80A0]">
            <div className="inline lg:hidden">SPRCICAL PRICE</div>
            <div className="hidden lg:inline">ABOUT US</div>
          </div>
          <div className="font-Sansita text-[30px] font-[700] leading-[40px] capitalize lg:text-[54px] lg:leading-[70px] mt-[20px]">
            bring exciting moments of fun while playing & learning for children.
          </div>
          <div className="inline-flex px-[30px] py-[13px] bg-[#EC80A0] text-[#FFFFFF] lg:px-[40px] lg:py-[17px] rounded-[10px] uppercase font-Open-Sans tracking-[1.7px] lg:tracking-[2px] mt-[30px] lg:mt-[40px]">
            Contact Us
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[url('/image/Bird.png')] flex items-center  justify-center bg-center bg-cover h-1/2 lg:h-full">
          <div className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px] bg-[#FFF] rounded-full flex items-center  justify-center">
            <IconTriangle
              width="64"
              height="64"
              className="hidden lg:inline w-[100px]"
            />
            <IconTriangle width="32" height="32" className="inline lg:hidden" />
          </div>
        </div>
      </div>
      {/* What we are proud of. */}
      {/*  */}
      <div className="mt-[76px] lg:mt-[100px]">
        <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize text-center lg:text-[54px] leading-[70px] ">
          What we are proud of.
        </div>
        <div className="grid gap-[20px] lg:gap-[30px] grid-cols-1 lg:grid-cols-4 mt-[30px] lg:mt-[50px]">
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              20+
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px]">
              Total top services
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>

          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              15+
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px]">
              Countries
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              98%
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px]">
              Positive Feedback
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              2,558
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px]">
              Usual users
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="mt-[60px] lg:mt-[100px] flex justify-between items-center flex-wrap">
        <div className="">
          <Image
            src="/image/82.png"
            width="450"
            height="550"
            className="w-[187px] lg:w-[450px]"
          />
        </div>

        <div className="">
          {" "}
          <Image
            src="/image/1de24aae-2036-45ac-8318-5afe0baf60fe_1 1.png"
            width="450"
            height="550"
            className="w-[238px] lg:w-[430px] rounded-[20px]"
          />
        </div>
        <div className="py-[30px] px-[20px] lg:px-[41px] py-[88px] text-center bg-[#FDF4F7] rounded-[20px] w-full  lg:w-[450px] h-min ">
          <div className="font-Sansita text-[36px] font-[700] leading-[47px]  lg:text-[54px] leading-[70px]">
            Big love for our lovely kids.
          </div>
          <div className="mt-[20px] lg:mt-[40px] font-Open-Sans text-[15px] font-[400] leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </div>
          <div className="">
            <div className="inline-flex px-[30px] py-[13px] bg-[#EC80A0] text-[#FFFFFF] lg:px-[40px] lg:py-[17px] rounded-[10px] uppercase font-Open-Sans tracking-[1.7px] lg:tracking-[2px] mt-[30px] lg:mt-[40px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Our team */}
      <div className="mt-[60px] lg:mt-[100px]">
        {" "}
        <div className="mb-[30px] lg:mb-[50px] font-Sansita text-[54px] font-[700] leading-[70px] text-center capitalize">
          Our team
        </div>
        <div className="grid gap-[20px] grid-cols-1	lg:grid-cols-4	 lg:gap-[30px]  ">
          <div className="pt-[35px] pb-[30px] lg:pt-[40px] text-center rounded-[10px] bg-[#FFF] our-tem-card px-[30px] flex flex-col items-center">
            <div className="w-[130px]">
              <Image
                src="/image/christian-buehner-DItYlc26zVI-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px]">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              CEO & Founder
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
            <div className="mt-[15px] flex gap-[20px]">
              <IconF />
              <IconT />
              <IconI />
              <IconY />
            </div>
          </div>

          <div className="pt-[35px] pb-[30px] lg:pt-[40px] text-center rounded-[10px] bg-[#FFF] our-tem-card px-[30px] flex flex-col items-center">
            <div className="w-[130px]">
              <Image
                src="/image/diana-polekhina-70LUMmAw3L0-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px]">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
            <div className="mt-[15px] flex gap-[20px]">
              <IconF />
              <IconT />
              <IconI />
              <IconY />
            </div>
          </div>
          <div className="pt-[35px] pb-[30px] lg:pt-[40px] text-center rounded-[10px] bg-[#FFF] our-tem-card px-[30px] flex flex-col items-center">
            <div className="w-[130px]">
              <Image
                src="/image/joeyy-lee-VMSb0mFhnQ8-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px]">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
            <div className="mt-[15px] flex gap-[20px]">
              <IconF />
              <IconT />
              <IconI />
              <IconY />
            </div>
          </div>
          <div className="pt-[35px] pb-[30px] lg:pt-[40px] text-center rounded-[10px] bg-[#FFF] our-tem-card px-[30px] flex flex-col items-center">
            <div className="w-[130px]">
              <Image
                src="/image/behrouz-sasani-1B22UBPK1Pw-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px]">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
            <div className="mt-[15px] flex gap-[20px]">
              <IconF />
              <IconT />
              <IconI />
              <IconY />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangdingPageBody;
