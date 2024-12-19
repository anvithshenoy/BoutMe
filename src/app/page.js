import Image from "next/image";
import Link from "next/link";
import QuickLinks from "./components/ui/quick-links";

const name = process.env.USER_NAME ?? "{Your Name}";
const description =
  process.env.DESCRIPTION ??
  "{Describe yourself. (Suggestion: Max. 2 lines. Keep it simple. )}";
const mailId = process.env.MAILING_ID;
const resume = process.env.RESUME_LINK ?? "https://example.com/404/";

const Home = () => {
  return (
    <>
      <main className="relative z-50 m-auto grid auto-cols-auto place-items-start text-slate-400 drop-shadow">
        <h1 className="text-2xl">Hey there, </h1>
        <h2 className="mb-3.5 font-head text-6xl font-bold text-foreground">
          I&apos;m {name}
          <span className="text-blue-500">*</span>
        </h2>
        <div className="flex h-full flex-col items-center justify-between gap-2 md:max-w-screen-md md:flex-row">
          <p className="py-2.5 text-lg md:w-2/3">{description}</p>
          <section className="flex h-full w-full flex-col items-stretch justify-evenly p-3 px-0 font-head text-foreground md:w-1/3 md:px-3">
            <p>
              <Image
                height={20}
                width={20}
                src="/icon/resume.svg"
                alt="Chat-icon"
                quality={50}
                className="inline-block align-middle"
              />
              <span className="ml-2 inline-block align-middle">View</span>{" "}
              <Link
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block align-middle capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                my resume
              </Link>
              <span className="text-blue-500">**</span>
            </p>

            <p>
              <Image
                height={20}
                width={20}
                src="/icon/chat-icon.svg"
                alt="Chat-icon"
                quality={50}
                className="inline-block align-middle"
              />
              <span className="ml-2 inline-block align-middle">Let&apos;s</span>{" "}
              <Link
                href={`mailto:${mailId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block align-middle capitalize before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                Have a Chat
              </Link>
            </p>
          </section>
        </div>
      </main>
      <QuickLinks />
    </>
  );
};

export default Home;
