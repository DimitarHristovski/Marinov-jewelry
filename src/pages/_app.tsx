import type { AppProps } from "next/app";
import "../styles/style.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { ProductsContextProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideFooterHeader =
    router.pathname.includes("/Cart") ||
    router.pathname.includes("/complete") ||
    router.pathname.includes("/payment") ||
    router.pathname.includes("/Contact");

  return (
    <>
      <Header />{" "}
      <ProductsContextProvider>
        <Component {...pageProps} />{" "}
      </ProductsContextProvider>
      {!hideFooterHeader && <Footer />}{" "}
    </>
  );
}
