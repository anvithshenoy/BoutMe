import Link from "next/link";

const links = [
  {
    application: "LinkedIn",
    target: process.env.LINKEDIN_PROFILE,
    message: process.env.LINKEDIN_PROFILE ?? "{Missing: LinkedIn Link}",
  },
  {
    application: "GitHub",
    target:
      process.env.GITHUB_PROFILE &&
      `https://github.com/${process.env.GITHUB_PROFILE}/`,
    message: process.env.GITHUB_PROFILE ?? "{Missing: GitHub Username}",
  },
];

const QuickLinks = () => {
  return (
    <aside className="font-head absolute right-0 top-0 flex h-full scale-[-1] flex-row-reverse flex-nowrap items-start justify-evenly gap-1 p-1 [writing-mode:vertical-lr]">
      {links.map((link) => (
        <Link
          key={link?.application}
          href={link?.target ?? "https://example.com/"}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link?.target ? link.application : link?.message}
        </Link>
      ))}
    </aside>
  );
};

export default QuickLinks;
