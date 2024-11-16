"use client";
import { useState } from "react";

export default function Form() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const [showCPassword, setShowCPassword] = useState<boolean>(false);
  const [cPassword, setCPassword] = useState<string>("");

  return (
    <form className="mb-6 w-full max-w-[465px]">
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-1.5 block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75"
        >
          New Password
        </label>

        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="****************"
            required
            id="password"
            className="w-full py-2.5 px-3.5 focus:!ring-4 focus:!ring-accent/20 border border-[#D0D5DD] focus:border-accent rounded-lg text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] placeholder:text-primary/50 duration-200"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            }}
          />

          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            type="button"
            className="absolute top-1/2 right-3.5 -translate-y-1/2 flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[16px] sm:w-[18px] h-auto ${
                showPassword ? "opacity-100" : "opacity-50"
              } duration-200`}
            >
              <path
                d="M1.81509 9.5349C1.71296 9.37312 1.66188 9.29228 1.63329 9.16755C1.61182 9.07388 1.61182 8.92612 1.63329 8.83245C1.66188 8.70772 1.71296 8.62688 1.81509 8.4651C2.65915 7.12863 5.17155 3.75 9.0003 3.75C12.8291 3.75 15.3415 7.12863 16.1855 8.4651C16.2877 8.62688 16.3388 8.70772 16.3673 8.83245C16.3888 8.92612 16.3888 9.07388 16.3673 9.16755C16.3388 9.29228 16.2877 9.37312 16.1855 9.5349C15.3415 10.8714 12.8291 14.25 9.0003 14.25C5.17155 14.25 2.65915 10.8714 1.81509 9.5349Z"
                stroke="#181818"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11.25C10.2427 11.25 11.25 10.2427 11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25Z"
                stroke="#181818"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="cPassword"
          className="mb-1.5 block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75"
        >
          Confirm New Password
        </label>

        <div className="relative">
          <input
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            type={showCPassword ? "text" : "password"}
            placeholder="****************"
            required
            id="cPassword"
            className="w-full py-2.5 px-3.5 focus:!ring-4 focus:!ring-accent/20 border border-[#D0D5DD] focus:border-accent rounded-lg text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] placeholder:text-primary/50 duration-200"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            }}
          />

          <button
            onClick={() => {
              setShowCPassword(!showCPassword);
            }}
            type="button"
            className="absolute top-1/2 right-3.5 -translate-y-1/2 flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[16px] sm:w-[18px] h-auto ${
                showCPassword ? "opacity-100" : "opacity-50"
              } duration-200`}
            >
              <path
                d="M1.81509 9.5349C1.71296 9.37312 1.66188 9.29228 1.63329 9.16755C1.61182 9.07388 1.61182 8.92612 1.63329 8.83245C1.66188 8.70772 1.71296 8.62688 1.81509 8.4651C2.65915 7.12863 5.17155 3.75 9.0003 3.75C12.8291 3.75 15.3415 7.12863 16.1855 8.4651C16.2877 8.62688 16.3388 8.70772 16.3673 8.83245C16.3888 8.92612 16.3888 9.07388 16.3673 9.16755C16.3388 9.29228 16.2877 9.37312 16.1855 9.5349C15.3415 10.8714 12.8291 14.25 9.0003 14.25C5.17155 14.25 2.65915 10.8714 1.81509 9.5349Z"
                stroke="#181818"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11.25C10.2427 11.25 11.25 10.2427 11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25Z"
                stroke="#181818"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <button className="active:scale-95 w-full py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200">
        Confirm Password
      </button>
    </form>
  );
}
