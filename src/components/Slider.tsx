"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import slider1Img from "@/assets/images/slider-1.svg";
import slider2Img from "@/assets/images/slider-2.svg";
import slider3Img from "@/assets/images/slider-3.svg";
import googleImg from "@/assets/images/google.svg";
import alphabetImg from "@/assets/images/alphabet.svg";
import metaImg from "@/assets/images/meta.svg";
import microsoftImg from "@/assets/images/microsoft.svg";
import amazonImg from "@/assets/images/amazon.svg";
import stripeImg from "@/assets/images/stripe.svg";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="h-full py-10 px-6 bg-gradient-to-b from-accent to-accent-dark rounded-2xl flex flex-col justify-center items-center">
      <div className="relative w-[550px] 2xl:w-[700px] h-[405px] 2xl:h-[516px]">
        <Image
          src={slider1Img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-contain ${
            currentSlide === 0 ? "opacity-100" : "opacity-0"
          } duration-300`}
        />

        <Image
          src={slider2Img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-contain ${
            currentSlide === 1 ? "opacity-100" : "opacity-0"
          } duration-300`}
        />

        <Image
          src={slider3Img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-contain ${
            currentSlide === 2 ? "opacity-100" : "opacity-0"
          } duration-300`}
        />
      </div>

      <div className="mt-12 mb-20">
        <h2 className="mb-3 text-3xl font-semibold tracking-[-0.3px] text-center text-white">
          {currentSlide === 0 && "Get Access to Lightning Fast Proxies"}
          {currentSlide === 1 && "Generator Preview"}
          {currentSlide === 2 && "Depositing Your Balance, Simplified"}
        </h2>

        <p className="mb-8 max-w-[580px] text-base tracking-[-0.16px] text-center text-white/75">
          {currentSlide === 0 &&
            "With LightningProxies, you can scrape public data at lightning-fast speeds while avoiding constant blocks and interruptions."}
          {currentSlide === 1 &&
            "Simplify proxy management with our advanced proxy generators—no more manual hassle!"}
          {currentSlide === 2 &&
            "Pay anytime, anywhere, with any method. LightningProxies accepts credit cards, PayPal, and even cryptocurrency."}
        </p>

        <div className="flex justify-center items-center gap-4">
          <span
            onClick={() => setCurrentSlide(0)}
            className={`w-[8px] aspect-square rounded-full bg-white ${
              currentSlide === 0 ? "opacity-100" : "opacity-25"
            } duration-300 cursor-pointer`}
          ></span>

          <span
            onClick={() => setCurrentSlide(1)}
            className={`w-[8px] aspect-square rounded-full bg-white ${
              currentSlide === 1 ? "opacity-100" : "opacity-25"
            } duration-300 cursor-pointer`}
          ></span>

          <span
            onClick={() => setCurrentSlide(2)}
            className={`w-[8px] aspect-square rounded-full bg-white ${
              currentSlide === 2 ? "opacity-100" : "opacity-25"
            } duration-300 cursor-pointer`}
          ></span>
        </div>
      </div>

      <div className="max-w-[500px]">
        <p className="mb-6 text-xs 2xl:text-sm font-medium tracking-[-0.12px] 2xl:tracking-[-0.14px] uppercase text-center text-white/75">
          TRUSTED BY TOP PARTNERS IN THE INDUSTRY
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 2xl:gap-4">
          <Image src={googleImg} alt="" className="h-[18px] 2xl:h-[25px]" />

          <span className="w-px h-[15px] bg-white/50"></span>

          <Image src={alphabetImg} alt="" className="h-[18px] 2xl:h-[25px]" />

          <span className="w-px h-[15px] bg-white/50"></span>

          <Image src={metaImg} alt="" className="h-[18px] 2xl:h-[25px]" />

          {/* <span className="w-px h-[15px] bg-white/50"></span> */}

          <Image src={microsoftImg} alt="" className="h-[16px] 2xl:h-[20px]" />

          <span className="w-px h-[15px] bg-white/50"></span>

          <Image src={amazonImg} alt="" className="h-[18px] 2xl:h-[25px]" />

          <span className="w-px h-[15px] bg-white/50"></span>

          <Image src={stripeImg} alt="" className="h-[18px] 2xl:h-[25px]" />
        </div>
      </div>
    </div>
  );
}
