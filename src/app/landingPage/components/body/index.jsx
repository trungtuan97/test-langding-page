import IconEmail from "@/image/IconEmail";
import IconF from "@/image/IconF";
import IconGits from "@/image/IconGits";
import IconGps from "@/image/IconGps";
import IconHeaPhone from "@/image/IconHeaPhone";
import IconI from "@/image/IconI";
import IconSync from "@/image/IconSync";
import IconT from "@/image/IconT";
import IconTriangle from "@/image/IconTriangle";
import IconTruck from "@/image/IconTruck";
import IconY from "@/image/IconY";
import Image from "next/image";
import React from "react";

function LangdingPageBody() {
  return (
    <div className="w-full lg:w-[1410px]">
      {/* About us */}
      <div className="mt-[60px] lg:mt-[100px] grid gap-[10px] lg:gap-[15px] text-center lg:text-left ">
        <div className="font-Sansita text-[36px] lg:text-[54px] font-[700] leading-[47px] lg:leading-[70px] capitalize text-[#1A1114]">
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
        <div className="w-full lg:w-1/2 pl-[62px] lg:pl-[90px] pt-[60px] lg:pt-[112px] pb-[60px] lg:pb-[122px] bg-[#E5F8FD] pr-[61px] lg:pr-[67px] order-last lg:order-first flex flex-col items-center lg:items-start  ">
          <div className="py-[7px] px-[15px] bg-[#e6e6ef] font-Open-Sans rounded-[5px] w-max text-[15px] font-[700] text-[#EC80A0]">
            <div className="inline lg:hidden">SPRCICAL PRICE</div>
            <div className="hidden lg:inline">ABOUT US</div>
          </div>
          <div className="font-Sansita text-[30px] font-[700] leading-[40px] capitalize lg:text-[54px] lg:leading-[70px] mt-[20px] text-center lg:text-left">
            bring exciting moments of fun while playing & learning for children.
          </div>
          <div className="font-[700] text-[17px] lg:text-[20px] inline-flex px-[30px] py-[13px] bg-[#E76088] lg:bg-[#EC80A0] text-[#FFFFFF] lg:px-[40px] lg:py-[17px] rounded-[10px] uppercase font-Open-Sans tracking-[1.7px] lg:tracking-[2px] mt-[30px] lg:mt-[40px]">
            Contact Us
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[url('/image/Bird.png')] flex items-center  justify-center bg-center bg-cover h-1/2 lg:h-full">
          <div className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px] bg-[#FFF] rounded-full flex items-center  justify-center">
            <IconTriangle width="48" height="48" className="hidden lg:inline" />
            <IconTriangle width="30" height="30" className="inline lg:hidden" />
          </div>
        </div>
      </div>
      {/* What we are proud of. */}
      {/*  */}
      <div className="mt-[76px] lg:mt-[100px] px-[20px] lg:px-0">
        <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize text-center lg:text-[54px] leading-[70px] ">
          What we are proud of.
        </div>
        <div className="grid gap-[20px] lg:gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[30px] lg:mt-[50px]">
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              20+
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Total top services
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>

          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              15+
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Countries
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              98%
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Positive Feedback
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
          <div className="bg-[#FFFFFF] card-proud rounded-[10px] p-[30px] lg:px-[30px] lg:py-[40px] text-center ">
            <div className="font-Sansita text-[36px] font-[700] leading-[47px] capitalize Lg:text-[42px] leading-[55px] text-[#EC80A0]">
              2,558
            </div>
            <div className="font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Usual users
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="mt-[60px] lg:mt-[100px] flex justify-between items-center flex-wrap px-[20px] lg:px-0 gap-[20px]">
        <div className="w-[187px] md:w-[240px] lg:w-[450px]">
          <Image
            alt=""
            src="/image/82.png"
            width="450"
            height="550"
            className=""
          />
        </div>

        <div className="w-[178px] md:w-1/3 lg:w-[430px]">
          {" "}
          <Image
            alt=""
            src="/image/1de24aae-2036-45ac-8318-5afe0baf60fe_1 1.png"
            width="450"
            height="550"
            className=" rounded-[20px]"
          />
        </div>
        <div className="py-[30px] px-[20px] lg:px-[41px] lg:py-[88px] text-center bg-[#FDF4F7] rounded-[20px] w-full md:w-[240px] lg:w-[450px]  h-min ">
          <div className="font-Sansita text-[36px] font-[700] leading-[47px]  lg:text-[54px] lg:leading-[70px]">
            Big love for <br /> our lovely kids.
          </div>
          <div className="mt-[20px] lg:mt-[40px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] ">
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
      <div className="mt-[60px] lg:mt-[100px] px-[20px] lg:px-0">
        {" "}
        <div className="mb-[30px] lg:mb-[50px] font-Sansita text-[54px] font-[700] leading-[70px] text-center capitalize">
          Our team
        </div>
        <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2	lg:grid-cols-4	 lg:gap-[30px]  ">
          <div className="pt-[35px] pb-[30px] lg:pt-[40px] text-center rounded-[10px] bg-[#FFF] our-tem-card px-[30px] flex flex-col items-center">
            <div className="w-[130px]">
              <Image
                alt=""
                src="/image/christian-buehner-DItYlc26zVI-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              CEO & Founder
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
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
                alt=""
                src="/image/diana-polekhina-70LUMmAw3L0-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
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
                alt=""
                src="/image/joeyy-lee-VMSb0mFhnQ8-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
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
                alt=""
                src="/image/behrouz-sasani-1B22UBPK1Pw-unsplash 1.png"
                width="130"
                height="130"
                className="rounded-full"
              />
            </div>
            <div className="mt-[25px] font-Barlow text-[24px] font-[700] leading-[31px] mt-[15px] lg:mt-[20px">
              Name 01
            </div>
            <div className="font-Open-Sans opacity-[0.5] text-[15px] font-[400] leading-[26px] mt-[5px] text-[#1A1114]">
              Personnel
            </div>
            <div className="mt-[10px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
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
      {/*  */}
      <div className="px-[70px] py-[50px] hidden lg:flex justify-between rounded-[10px] border-[1px] border-[#1a11141a] bg-[#fff] mt-[100px] ">
        <div className="flex gap-[20px]">
          <div className="w-[60px] h-[60px] rounded-full border-[#EC80A0] border-[1px] flex justify-center items-center">
            <IconTruck width="30" height="30" />
          </div>
          <div className="grid gap-[10px]">
            <div className="font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Free shipping{" "}
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] text-[#585D67]">
              Free shipping orders from $150
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[60px] h-[60px] rounded-full border-[#EC80A0] border-[1px] flex justify-center items-center">
            <IconGits width="25" height="28" />
          </div>
          <div className="grid gap-[10px]">
            <div className="font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Gift/Discount codes
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] text-[#585D67]">
              Many discount codes every day
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[60px] h-[60px] rounded-full border-[#EC80A0] border-[1px] flex justify-center items-center">
            <IconSync width="25" height="28" />
          </div>
          <div className="grid gap-[10px]">
            <div className="font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Money return
            </div>
            <div className="font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] text-[#585D67]">
              Return it within 30 days
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="px-[20px] lg:px-0 mt-[60px] lg:mt-[100px]">
        <div className="flex justify-between flex-col lg:flex-row mb-[40px] lg:mb-[80px]">
          <div className="text-[#1A1114] text-[30px] font-[800] lg:text-[54px] leding-[55px] lg:leading-[70px] uppercase font-Sansita w-full lg:w-min mb-[30px] lg:mb-[0px] text-center lg:text-left">
            kito
          </div>
          <div className="w-full lg:w-1/2 flex  items-center flex-col lg:flex-row ">
            <div className="font-Open-Sans font-[700] text-[15px] leading-[22px] mb-[20px] lg:mb-[0px]">
              Join our list and get 20% off your first purchase!
            </div>
            <div className=" rounded-[10px] flex items-center border-[#EC80A0]  border-[1px] w-min pl-[20px] h-min ">
              <IconEmail width="16" height="16" className="mr-2" />{" "}
              <input className="outline-none" placeholder="Enter your  email" />
              <button className="font-Open-Sans text-[17px] font-[700] tracking-[1.7] uppercase text-[#FFFFFF] bg-[#EC80A0] rounded-r-[8px]  px-[20px] lg:px-[20px]  py-[13px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-[40px] md:gap-[60px]  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-[40px] lg:pt-[70px] border-t-[0px] lg:border-t-[1px] border-[#e8e7e7]">
          <div className="">
            <div className="mb-[20px] lg:mb-[30px] font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Contact info
            </div>
            <div className="grid gap-[20px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] text-[#1A1114]">
              <div className="flex gap-[25px] items-center">
                <IconGps width="20" />
                <div className="">
                  560 King St W, Kingston, ON K7L 4V7, Canada
                </div>
              </div>
              <div className="flex gap-[25px] items-center">
                <IconEmail fill="#000" width="20" height="18" />
                <div className="">contactinfo@gmail.com</div>
              </div>
              <div className="flex gap-[25px] items-center">
                <IconHeaPhone />
                <div className="">+1 212 736 3100</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-[20px] lg:mb-[30px] font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Quick links
            </div>
            <div className="grid gap-[20px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              <div className="flex gap-[25px] items-center">My account</div>
              <div className="flex gap-[25px] items-center">Cart</div>
              <div className="flex gap-[25px] items-center"> Wishlist</div>
              <div className="">Product Compare</div>
            </div>
          </div>

          <div className="">
            <div className="mb-[20px] lg:mb-[30px] font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Information
            </div>
            <div className="grid gap-[20px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              <div className="flex gap-[25px] items-center">Privacy policy</div>
              <div className="flex gap-[25px] items-center">Refund policy</div>
              <div className="flex gap-[25px] items-center">
                Shipping & Return
              </div>
              <div className="flex gap-[25px] items-center">
                Term & conditions
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-[20px] lg:mb-[30px] font-Sansita text-[24px] font-[700] leading-[31px] capitalize">
              Follow us
            </div>
            <div className="grid gap-[20px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px]">
              <div className="flex gap-[25px] items-center">
                <IconF />
                <div className="">Facebook </div>
              </div>
              <div className="flex gap-[25px] items-center">
                <IconT />
                <div className="">Tweeter </div>
              </div>
              <div className="flex gap-[25px] items-center">
                <IconI />
                <div className="">Instagram </div>
              </div>
              <div className="flex gap-[25px] items-center">
                <IconY />
                <div className="">Youtube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[15px] lg:p-[27px] font-Open-Sans text-[15px] font-[400] leading-[26px] mt-[10px] text-center font-[#1A1114] border-t-[1px] border-[#e8e7e7] mt-[40px] lg:mt-[70px] mx-[20px] lg:mx-0">
        Beae’stemplate © 2022. All Rights Reserved.
      </div>
    </div>
  );
}

export default LangdingPageBody;
