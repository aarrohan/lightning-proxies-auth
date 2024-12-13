"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import passwordResetSuccessImg from "@/assets/images/password-reset-success.png";
import Link from "next/link";

export default function Content() {
  const [showAlert1, setShowAlert1] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert1(false);
    }, 3000);
  }, []);

  return (
    <main>
      <div
        className={`absolute top-5 left-1/2 -translate-x-1/2 origin-top ${
          !showAlert1 ? "scale-50" : ""
        } py-2.5 px-4 bg-[#C4F5D5] rounded-xl flex items-center gap-2.5 ${
          !showAlert1 ? "opacity-0" : ""
        } duration-300`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3346 9.99935C18.3346 5.39697 14.6036 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39697 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327C14.6036 18.3327 18.3346 14.6017 18.3346 9.99935Z"
            stroke="#00C943"
            strokeWidth="1.5"
          />
          <path
            d="M6.66797 10.4167L8.7513 12.5L13.3346 7.5"
            stroke="#00C943"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] whitespace-nowrap text-[#00C943]">
          Success
        </p>
      </div>

      <section>
        <div className="h-[100svh] xl:py-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={passwordResetSuccessImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Password Reset Successful!
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Your password has been reset successfully. <br /> Log in to your
                account using the new password
              </p>

              <Link
                href={"/"}
                className="active:scale-95 mb-6 w-full max-w-[465px] py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] flex justify-center items-center text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200"
              >
                Go to Login
              </Link>

              <Link
                href={"/"}
                className="mb-3 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75"
              >
                Facing other issues?{" "}
                <span className="font-semibold text-accent">
                  Contact Support
                </span>
              </Link>
            </div>

            <Footer isVertical />
          </div>
        </div>
      </section>
    </main>
  );
}
