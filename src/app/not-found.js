import Image from "next/image";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center *:max-w-prose">
      <div className="relative text-9xl font-extrabold">
        <h1 className="hover: absolute right-0 top-0 animate-bounce transition-all duration-1000">
          404
        </h1>
        <span
          aria-hidden
          className="text-transparent [-webkit-text-stroke:1px_var(--foreground)]"
        >
          404
        </span>
      </div>
      <h2 className="mb-2 animate-pulse font-head text-2xl font-bold uppercase text-slate-400">
        Oops! ...
      </h2>
      <p className="animate-pulse text-slate-400">
        The page you were looking for doesn&apos;t exit
      </p>
      <Link
        href="/"
        className="relative mt-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border px-2.5 py-1 font-head text-xl outline-none hover:ring-2 hover:ring-foreground hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
      >
        <span className="animate-shimmer absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-foreground to-transparent opacity-50 delay-500" />
        <Image height={20} width={20} src="/icon/home.svg" alt="Home Icon" />
        <span className="relative">Go to Home</span>
      </Link>
    </div>
  );
};

export default Error404;
