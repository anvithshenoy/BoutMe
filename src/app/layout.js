import { Inter, Syne } from "next/font/google";
import Loader from "./components/Loader/Loader";
import { BackgroundBeams } from "./components/ui/background-beams";
import "./globals.css";

const name = process.env.USER_NAME ?? "{Your Name}";
const description =
  process.env.DESCRIPTION ??
  "{Describe yourself. (Suggestion: Max. 2 lines. Keep it simple. )}";

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
  description: `Single Page Portfolio by ${name}. ${description}`,
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
        className={`${head.variable} ${body.variable} relative flex h-svh w-svw flex-col items-center justify-center bg-background px-2.5 py-3 font-body text-foreground antialiased transition-colors duration-300 ease-linear`}
      >
        <Loader />
        <BackgroundBeams />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
