"use client";
import SocialAuthBtn from "@/components/SocialAuthBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { backendServerBaseURL } from "@/utils/auth";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

export default function Form() {
  const [username, setUsername] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const discordCode = searchParams.get("code");

    if (discordCode) {
      axios
        .post(`${backendServerBaseURL}/auth/login`, {
          discordCode: discordCode,
          type: "discord",
        })
        .then((response) => {
          if (
            response.status === 200 &&
            response.data.message === "Logged in Successfully"
          ) {
            localStorage.setItem(
              "accessToken",
              response.data.payload.accessToken
            );
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.payload.user)
            );

            router.push("/dashboard");
          }

          if (
            response.status === 200 &&
            response.data.message === "2FA is enabled"
          ) {
            router.push(
              `/2-step-verification/${response.data.payload.twoFactorToken}`
            );
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error(error.response.data.message);
          }

          if (error.response.data.message === "User email is not verified") {
            router.push(`/verify-email/${error.response.data.payload.id}`);
          }
        });
    }
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );

      const userData = userInfo.data;

      try {
        await axios
          .post(`${backendServerBaseURL}/auth/login`, {
            username: userData.email,
            password: userData.sub + "24" + userData.email,
            recaptchToken: sessionStorage.getItem("recaptchaToken"),
            type: "google",
          })
          .then((response) => {
            if (
              response.status === 200 &&
              response.data.message === "Logged in Successfully"
            ) {
              localStorage.setItem(
                "accessToken",
                response.data.payload.accessToken
              );
              localStorage.setItem(
                "user",
                JSON.stringify(response.data.payload.user)
              );

              router.push("/dashboard");
            }

            if (
              response.status === 200 &&
              response.data.message === "2FA is enabled"
            ) {
              router.push(
                `/2-step-verification/${response.data.payload.twoFactorToken}`
              );
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              toast.error(error.response.data.message);
            }

            if (error.response.data.message === "User email is not verified") {
              router.push(`/verify-email/${error.response.data.payload.id}`);
            }
          });
      } catch (error) {
        toast.error(error as string);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios
        .post(`${backendServerBaseURL}/auth/login`, {
          username,
          password,
          recaptchToken: sessionStorage.getItem("recaptchaToken"),
          type: "normal",
        })
        .then((response) => {
          if (
            response.status === 200 &&
            response.data.message === "Logged in Successfully"
          ) {
            localStorage.setItem(
              "accessToken",
              response.data.payload.accessToken
            );
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.payload.user)
            );

            router.push("/dashboard");
          }

          if (
            response.status === 200 &&
            response.data.message === "2FA is enabled"
          ) {
            router.push(
              `/2-step-verification/${response.data.payload.twoFactorToken}`
            );
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
    <form onSubmit={handleSubmit} className="mb-6 w-full max-w-[465px]">
      <div className="hidden sm:grid grid-cols-2 gap-5">
        <Link
          href={`https://discord.com/api/oauth2/authorize?client_id=1295808694851866654&redirect_uri=${encodeURIComponent(
            `${process.env.NEXT_PUBLIC_APP_URL}/login`
          )}&response_type=code&scope=${encodeURIComponent(
            "identify email"
          )}&state=1`}
        >
          <SocialAuthBtn
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[16px] sm:w-[20px] h-auto"
              >
                <g clipPath="url(#clip0_239_9141)">
                  <path
                    d="M16.5924 4.54963C15.3799 3.99329 14.0797 3.5834 12.7203 3.34864C12.6955 3.34411 12.6708 3.35543 12.658 3.37808C12.4908 3.67549 12.3056 4.06349 12.1759 4.36845C10.7137 4.14955 9.25902 4.14955 7.82683 4.36845C7.69709 4.05671 7.50514 3.67549 7.33717 3.37808C7.32442 3.35619 7.29969 3.34487 7.27493 3.34864C5.91623 3.58265 4.61602 3.99254 3.40278 4.54963C3.39228 4.55416 3.38327 4.56171 3.3773 4.57152C0.911071 8.25601 0.235467 11.8499 0.566896 15.3993C0.568395 15.4167 0.578143 15.4333 0.59164 15.4438C2.21879 16.6388 3.79496 17.3642 5.34186 17.8451C5.36661 17.8526 5.39285 17.8436 5.4086 17.8232C5.77452 17.3235 6.1007 16.7966 6.38038 16.2425C6.39688 16.21 6.38113 16.1715 6.34739 16.1587C5.83001 15.9624 5.33736 15.7231 4.86346 15.4514C4.82597 15.4295 4.82297 15.3759 4.85746 15.3502C4.95718 15.2755 5.05693 15.1977 5.15216 15.1192C5.16939 15.1049 5.19339 15.1019 5.21365 15.1109C8.32696 16.5324 11.6975 16.5324 14.7741 15.1109C14.7943 15.1011 14.8183 15.1042 14.8363 15.1185C14.9315 15.197 15.0313 15.2755 15.1317 15.3502C15.1662 15.3759 15.164 15.4295 15.1265 15.4514C14.6526 15.7284 14.1599 15.9624 13.6418 16.1579C13.6081 16.1708 13.5931 16.21 13.6096 16.2425C13.8953 16.7958 14.2214 17.3227 14.5806 17.8224C14.5956 17.8436 14.6226 17.8526 14.6473 17.8451C16.2017 17.3642 17.7779 16.6388 19.4051 15.4438C19.4193 15.4333 19.4283 15.4174 19.4298 15.4001C19.8265 11.2966 18.7654 7.73214 16.6172 4.57227C16.6119 4.56171 16.6029 4.55416 16.5924 4.54963ZM6.8453 13.2381C5.90798 13.2381 5.13565 12.3776 5.13565 11.3208C5.13565 10.2639 5.893 9.40342 6.8453 9.40342C7.80507 9.40342 8.56992 10.2715 8.55492 11.3208C8.55492 12.3776 7.79757 13.2381 6.8453 13.2381ZM13.1664 13.2381C12.2291 13.2381 11.4568 12.3776 11.4568 11.3208C11.4568 10.2639 12.2141 9.40342 13.1664 9.40342C14.1262 9.40342 14.891 10.2715 14.8761 11.3208C14.8761 12.3776 14.1262 13.2381 13.1664 13.2381Z"
                    fill="#5865F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_239_9141">
                    <rect
                      width="19.1977"
                      height="19.1977"
                      fill="white"
                      transform="translate(0.400391 0.401367)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Discord"
          />
        </Link>

        <SocialAuthBtn
          onClick={googleLogin}
          icon={
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] sm:w-[20px] h-auto"
            >
              <path
                d="M17.42 9.1875C17.42 8.6025 17.3675 8.04 17.27 7.5H9.5V10.695H13.94C13.745 11.7225 13.16 12.5925 12.2825 13.1775V15.255H14.96C16.52 13.815 17.42 11.7 17.42 9.1875Z"
                fill="#4285F4"
              />
              <path
                d="M9.49977 17.2502C11.7273 17.2502 13.5948 16.5152 14.9598 15.2552L12.2823 13.1777C11.5473 13.6727 10.6098 13.9727 9.49977 13.9727C7.35477 13.9727 5.53227 12.5252 4.87977 10.5752H2.13477V12.7052C3.49227 15.3977 6.27477 17.2502 9.49977 17.2502Z"
                fill="#34A853"
              />
              <path
                d="M4.88 10.5677C4.715 10.0727 4.6175 9.54773 4.6175 9.00023C4.6175 8.45273 4.715 7.92773 4.88 7.43273V5.30273H2.135C1.5725 6.41273 1.25 7.66523 1.25 9.00023C1.25 10.3352 1.5725 11.5877 2.135 12.6977L4.2725 11.0327L4.88 10.5677Z"
                fill="#FBBC05"
              />
              <path
                d="M9.49977 4.035C10.7148 4.035 11.7948 4.455 12.6573 5.265L15.0198 2.9025C13.5873 1.5675 11.7273 0.75 9.49977 0.75C6.27477 0.75 3.49227 2.6025 2.13477 5.3025L4.87977 7.4325C5.53227 5.4825 7.35477 4.035 9.49977 4.035Z"
                fill="#EA4335"
              />
            </svg>
          }
          title="Google"
        />
      </div>

      <div className="grid sm:hidden grid-cols-2 gap-3 sm:gap-5">
        <Link
          href={`https://discord.com/api/oauth2/authorize?client_id=1295808694851866654&redirect_uri=${encodeURIComponent(
            `${process.env.NEXT_PUBLIC_APP_URL}/login`
          )}&response_type=code&scope=${encodeURIComponent(
            "identify email"
          )}&state=1`}
        >
          <SocialAuthBtn
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[16px] sm:w-[20px] h-auto"
              >
                <g clipPath="url(#clip0_239_9141)">
                  <path
                    d="M16.5924 4.54963C15.3799 3.99329 14.0797 3.5834 12.7203 3.34864C12.6955 3.34411 12.6708 3.35543 12.658 3.37808C12.4908 3.67549 12.3056 4.06349 12.1759 4.36845C10.7137 4.14955 9.25902 4.14955 7.82683 4.36845C7.69709 4.05671 7.50514 3.67549 7.33717 3.37808C7.32442 3.35619 7.29969 3.34487 7.27493 3.34864C5.91623 3.58265 4.61602 3.99254 3.40278 4.54963C3.39228 4.55416 3.38327 4.56171 3.3773 4.57152C0.911071 8.25601 0.235467 11.8499 0.566896 15.3993C0.568395 15.4167 0.578143 15.4333 0.59164 15.4438C2.21879 16.6388 3.79496 17.3642 5.34186 17.8451C5.36661 17.8526 5.39285 17.8436 5.4086 17.8232C5.77452 17.3235 6.1007 16.7966 6.38038 16.2425C6.39688 16.21 6.38113 16.1715 6.34739 16.1587C5.83001 15.9624 5.33736 15.7231 4.86346 15.4514C4.82597 15.4295 4.82297 15.3759 4.85746 15.3502C4.95718 15.2755 5.05693 15.1977 5.15216 15.1192C5.16939 15.1049 5.19339 15.1019 5.21365 15.1109C8.32696 16.5324 11.6975 16.5324 14.7741 15.1109C14.7943 15.1011 14.8183 15.1042 14.8363 15.1185C14.9315 15.197 15.0313 15.2755 15.1317 15.3502C15.1662 15.3759 15.164 15.4295 15.1265 15.4514C14.6526 15.7284 14.1599 15.9624 13.6418 16.1579C13.6081 16.1708 13.5931 16.21 13.6096 16.2425C13.8953 16.7958 14.2214 17.3227 14.5806 17.8224C14.5956 17.8436 14.6226 17.8526 14.6473 17.8451C16.2017 17.3642 17.7779 16.6388 19.4051 15.4438C19.4193 15.4333 19.4283 15.4174 19.4298 15.4001C19.8265 11.2966 18.7654 7.73214 16.6172 4.57227C16.6119 4.56171 16.6029 4.55416 16.5924 4.54963ZM6.8453 13.2381C5.90798 13.2381 5.13565 12.3776 5.13565 11.3208C5.13565 10.2639 5.893 9.40342 6.8453 9.40342C7.80507 9.40342 8.56992 10.2715 8.55492 11.3208C8.55492 12.3776 7.79757 13.2381 6.8453 13.2381ZM13.1664 13.2381C12.2291 13.2381 11.4568 12.3776 11.4568 11.3208C11.4568 10.2639 12.2141 9.40342 13.1664 9.40342C14.1262 9.40342 14.891 10.2715 14.8761 11.3208C14.8761 12.3776 14.1262 13.2381 13.1664 13.2381Z"
                    fill="#5865F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_239_9141">
                    <rect
                      width="19.1977"
                      height="19.1977"
                      fill="white"
                      transform="translate(0.400391 0.401367)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Discord"
          />
        </Link>

        <SocialAuthBtn
          onClick={googleLogin}
          icon={
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] sm:w-[20px] h-auto"
            >
              <path
                d="M17.42 9.1875C17.42 8.6025 17.3675 8.04 17.27 7.5H9.5V10.695H13.94C13.745 11.7225 13.16 12.5925 12.2825 13.1775V15.255H14.96C16.52 13.815 17.42 11.7 17.42 9.1875Z"
                fill="#4285F4"
              />
              <path
                d="M9.49977 17.2502C11.7273 17.2502 13.5948 16.5152 14.9598 15.2552L12.2823 13.1777C11.5473 13.6727 10.6098 13.9727 9.49977 13.9727C7.35477 13.9727 5.53227 12.5252 4.87977 10.5752H2.13477V12.7052C3.49227 15.3977 6.27477 17.2502 9.49977 17.2502Z"
                fill="#34A853"
              />
              <path
                d="M4.88 10.5677C4.715 10.0727 4.6175 9.54773 4.6175 9.00023C4.6175 8.45273 4.715 7.92773 4.88 7.43273V5.30273H2.135C1.5725 6.41273 1.25 7.66523 1.25 9.00023C1.25 10.3352 1.5725 11.5877 2.135 12.6977L4.2725 11.0327L4.88 10.5677Z"
                fill="#FBBC05"
              />
              <path
                d="M9.49977 4.035C10.7148 4.035 11.7948 4.455 12.6573 5.265L15.0198 2.9025C13.5873 1.5675 11.7273 0.75 9.49977 0.75C6.27477 0.75 3.49227 2.6025 2.13477 5.3025L4.87977 7.4325C5.53227 5.4825 7.35477 4.035 9.49977 4.035Z"
                fill="#EA4335"
              />
            </svg>
          }
          title="Google"
        />
      </div>

      <div className="my-4 sm:my-5 flex items-center gap-3.5">
        <span className="flex-1 h-px bg-primary/10 block"></span>

        <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/25">
          or
        </p>

        <span className="flex-1 h-px bg-primary/10 block"></span>
      </div>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="mb-1.5 block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75"
        >
          Username
        </label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username or email"
          required
          id="username"
          className="w-full py-2.5 px-3.5 focus:!ring-4 focus:!ring-accent/20 border border-[#D0D5DD] focus:border-accent rounded-lg text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] placeholder:text-primary/50 duration-200"
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        />
      </div>
      <div className="mb-6">
        <div className="mb-1.5 flex justify-between items-center">
          <label
            htmlFor="password"
            className="block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75"
          >
            Password
          </label>

          <Link
            href={"/reset-password"}
            className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75"
          >
            <span className="font-semibold">Forgot password?</span>
          </Link>
        </div>

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
      <button className="active:scale-95 w-full py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200">
        Login
      </button>
    </form>
  );
}
