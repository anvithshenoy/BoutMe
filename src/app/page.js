import QuickLinks from "./components/ui/quick-links";

const name = process.env.USER_NAME ?? "{Your Name}";
const description =
  process.env.DESCRIPTION ??
  "{Describe yourself. (Suggestion: Max. 2 lines. Keep it simple. )}";

const Home = () => {
  return (
    <>
      <main className="relative z-50 grid auto-cols-auto place-items-start text-slate-400 drop-shadow">
        <h1 className="text-2xl">Hey there, </h1>
        <h2 className="font-head mb-3.5 text-6xl font-bold text-foreground">
          I&apos;m {name}.<span className="text-blue-500">*</span>
        </h2>
        <div className="flex h-full flex-col items-center justify-between gap-2 md:max-w-screen-md md:flex-row">
          <p className="py-2.5 text-lg md:w-2/3">{description}</p>
          <section className="flex h-full w-full flex-col items-stretch justify-evenly p-3 px-0 text-foreground md:w-1/3 md:px-3">
            <p>
              If you want my resume<span className="text-blue-500">**</span>
            </p>
            <p>Or have a chat</p>
          </section>
        </div>
      </main>
      <QuickLinks />
    </>
  );
};

export default Home;
