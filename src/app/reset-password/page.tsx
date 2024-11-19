import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import forgotPasswordImg from "@/assets/images/forgot-password.svg";
import Link from "next/link";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Reset Password - Lightning Proxies",
};

export default function ResetPassword() {
  return (
    <main>
      <section className="grid xl:grid-cols-2">
        <div className="h-[100svh] py-5 pl-5 hidden xl:block">
          <Slider />
        </div>

        <div className="h-[100svh] xl:py-5 xl:pr-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={forgotPasswordImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Forgot Password
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Enter your registered email to reset password
              </p>

              <Form />

              <Link
                href={"/"}
                className="mb-3 text-xs sm:text-sm font-semibold tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75"
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-[2.5px] sm:mb-1 mr-1.5 w-[5px] sm:w-[6px] h-auto inline-block"
                >
                  <path
                    opacity="0.75"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033L4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L2.06066 5L5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967Z"
                    fill="#181818"
                  />
                </svg>
                Go back to Login
              </Link>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
