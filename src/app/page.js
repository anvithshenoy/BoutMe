import Footer from "@/components/footer";
import QuickLinks from "@/components/ui/quick-links";
import Link from "next/link";
import { GrDocumentPdf } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const name = process.env.USER_NAME ?? "{Your Name}";
const role = process.env.USER_ROLE ?? "{User Role}";
const description =
  process.env.DESCRIPTION ??
  "{Describe yourself. (Suggestion: Max. 2 lines. Keep it simple. )}";
const mailId = process.env.MAILING_ID ?? "hello@example.com";
const resume = process.env.RESUME_LINK ?? "https://example.com/";

const Home = () => {
  return (
    <>
      <main className="relative z-50 m-auto grid auto-cols-auto place-items-start text-slate-400 drop-shadow">
        <p className="text-xl">Hey there, </p>
        <div>
          <h1 className="font-head text-6xl font-bold text-foreground">
            I&apos;m {name}
            <span className="text-blue-500">*</span>
          </h1>
          <h2 className="mb-2.5 max-w-prose text-left font-head text-2xl font-bold text-blue-400 md:text-end">
            {role}
          </h2>
        </div>
        <div className="flex h-full flex-col items-center justify-between gap-2 md:max-w-screen-md md:flex-row">
          <p className="py-2.5 text-lg md:w-2/3">{description}</p>
          <section className="flex h-full w-full flex-col items-stretch justify-evenly p-3 px-0 font-head text-foreground md:w-1/3 md:px-3">
            <p>
              <GrDocumentPdf className="inline-block align-middle" />
              <span className="ml-2 inline-block align-middle">View</span>{" "}
              <Link
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block align-middle capitalize outline-none before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              >
                my resume
              </Link>
              {/* <span className="text-blue-500">**</span> */}
            </p>

            <p>
              <IoChatboxEllipsesOutline className="inline-block align-middle" />
              <span className="ml-2 inline-block align-middle">
                Let&apos;s
              </span>{" "}
              <Link
                href={`mailto:${mailId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block align-middle capitalize outline-none before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              >
                Have a Chat
              </Link>
            </p>
          </section>
        </div>
      </main>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Home;
