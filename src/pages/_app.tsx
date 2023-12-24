import type { AppProps } from "next/app";
import "../styles/style.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideFooterHeader =
    router.pathname.includes("/Cart") ||
    router.pathname === "/payment" ||
    router.pathname === "/Contact";

  return (
    <>
      <Header />
      <Component {...pageProps} />
      {!hideFooterHeader && <Footer />}{" "}
    </>
  );
}
