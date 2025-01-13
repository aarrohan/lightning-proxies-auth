"use client";
import { useEffect } from "react";
import { backendServerBaseURL } from "@/utils/auth";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Content({ verifyToken }: { verifyToken: string }) {
  const router = useRouter();

  useEffect(() => {
    if (verifyToken) {
      async function handleVerifyEmail() {
        await axios
          .post(`${backendServerBaseURL}/auth/verify-email`, {
            verifyToken: verifyToken,
          })
          .then((response) => {
            if (response.status === 200) {
              router.push("/email-verified");
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              router.push("/");
            }
          });
      }

      handleVerifyEmail();
    }
  }, []);

  return <></>;
}
