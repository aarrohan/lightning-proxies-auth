"use client";
import { useState } from "react";
import OtpInput from "react-otp-input";

export default function Form() {
  const [otp, setOtp] = useState<string>("");

  return (
    <form className="mb-6 w-full max-w-[465px]">
      <div className="mb-6 flex flex-col items-center">
        <label className="mb-2.5 block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75">
          Authentication Code
        </label>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          containerStyle={{
            width: "100%",
            maxWidth: "275px",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "8px",
          }}
          inputStyle={{
            width: "100%",
          }}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="0"
              className="aspect-square py-2.5 focus:!ring-4 focus:!ring-accent/20 border border-[#D0D5DD] focus:border-accent rounded-lg text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] placeholder:text-primary/50 duration-200"
            />
          )}
        />
      </div>

      <button className="active:scale-95 w-full py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200">
        Authenticate
      </button>
    </form>
  );
}
