import localFont from "next/font/local";
import Providers from "./providers";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>
        <Providers>
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
