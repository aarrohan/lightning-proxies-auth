import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClientKey } from "@/utils/auth";

export default function ProvidersWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={googleClientKey}>
      {children}
    </GoogleOAuthProvider>
  );
}
