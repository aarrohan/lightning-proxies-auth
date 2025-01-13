"use client";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { backendServerBaseURL } from "@/utils/auth";

export default function Form({ twoFactorToken }: { twoFactorToken: string }) {
  const [showAlert1, setShowAlert1] = useState<boolean>(false);
  const [showAlert2, setShowAlert2] = useState<boolean>(false);
  const [showAlert3, setShowAlert3] = useState<boolean>(false);

  const [otp, setOtp] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    try {
      await axios
        .post(`${backendServerBaseURL}/auth/mfa/verify`, {
          twoFactorToken: twoFactorToken,
          totp: otp,
        })
        .then((response) => {
          if (response.status === 200) {
            router.push("/dashboard");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error(error.response.data.message);
          }
        });
    } catch (error) {
      if (error) {
        toast.error(error as string);
      }
    }
  };

  return (
    <>
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
          Authentication Success
        </p>
      </div>

      <div
        className={`absolute z-10 top-5 left-1/2 -translate-x-1/2 origin-top ${
          !showAlert2 ? "scale-50" : ""
        } py-2.5 px-4 bg-[#FEDEE0] rounded-xl flex items-center gap-2.5 ${
          !showAlert2 ? "opacity-0" : ""
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
            d="M15 5L5 15M5 5L15 15"
            stroke="#DE0C3C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] whitespace-nowrap text-[#DE0C3C]">
          Authentication Failed
        </p>
      </div>

      <div
        className={`absolute z-10 top-5 left-1/2 -translate-x-1/2 origin-top ${
          !showAlert3 ? "scale-50" : ""
        } py-2.5 px-4 bg-[#FFED9F] rounded-xl flex items-center gap-2.5 ${
          !showAlert3 ? "opacity-0" : ""
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
            d="M9.99821 7.50019V10.8335M9.99821 14.1669H10.0065M8.84429 3.24329L1.9902 15.0821C1.61002 15.7388 1.41994 16.0671 1.44803 16.3366C1.47254 16.5716 1.59568 16.7852 1.78682 16.9242C2.00594 17.0835 2.38533 17.0835 3.1441 17.0835H16.8522C17.611 17.0835 17.9904 17.0835 18.2095 16.9242C18.4006 16.7852 18.5238 16.5716 18.5483 16.3366C18.5764 16.0671 18.3863 15.7388 18.0061 15.0821L11.152 3.24329C10.7733 2.58898 10.5839 2.26183 10.3368 2.15196C10.1212 2.05612 9.87513 2.05612 9.65963 2.15196C9.41246 2.26183 9.22304 2.58899 8.84429 3.24329Z"
            stroke="#DC9100"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] whitespace-nowrap text-[#DC9100]">
          Authentication Failed
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-[465px]">
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

        <button
          onClick={() => {
            if (showAlert1) {
              setShowAlert1(false);
              setShowAlert2(true);
              setShowAlert3(false);
            } else if (showAlert2) {
              setShowAlert1(false);
              setShowAlert2(false);
              setShowAlert3(true);
            } else {
              setShowAlert1(true);
              setShowAlert2(false);
              setShowAlert3(false);
            }
          }}
          className="active:scale-95 w-full py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200"
        >
          Authenticate
        </button>
      </form>
    </>
  );
}
