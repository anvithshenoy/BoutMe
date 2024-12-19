import { Inter, Syne } from "next/font/google";
import { BackgroundBeams } from "./components/ui/background-beams";
import "./globals.css";

const name = process.env.USER_NAME ?? "Username";

const head = Syne({
  variable: "--font-head",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: `${name} • Portfolio`,
  description: `Single Page Portfolio by ${name}`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${head.variable} ${body.variable} font-body relative flex h-dvh w-dvw flex-col items-center justify-center bg-background px-1.5 py-1 text-foreground antialiased transition-colors duration-300 ease-linear`}
      >
        <BackgroundBeams />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
