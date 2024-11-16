"use client";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState<string>("");

  return (
    <form className="mb-6 w-full max-w-[465px]">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75"
        >
          Registered email
        </label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          required
          id="email"
          className="w-full py-2.5 px-3.5 focus:!ring-4 focus:!ring-accent/20 border border-[#D0D5DD] focus:border-accent rounded-lg text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] placeholder:text-primary/50 duration-200"
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        />
      </div>

      <button className="active:scale-95 w-full py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200">
        Send Reset Link
      </button>
    </form>
  );
}
