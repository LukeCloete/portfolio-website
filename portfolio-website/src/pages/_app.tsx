import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const futura = localFont({
  src: [
    {
      path: "./FuturaLT.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FuturaLT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${futura.variable} font-futura`}>
      <Component {...pageProps} />;
    </main>
  );
}
