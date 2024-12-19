import Link from "next/link";

const links = [
  {
    application: "LinkedIn",
    target: process.env.LINKEDIN_PROFILE,
    errMsg: "{Missing: LinkedIn Link}",
  },
  {
    application: "GitHub",
    target:
      process.env.GITHUB_USERNAME &&
      `https://github.com/${process.env.GITHUB_USERNAME}/`,
    errMsg: "{Missing: GitHub Username}",
  },
  ...(process.env.OTHERS_NAME && process.env.OTHERS_LINK
    ? JSON.parse(process.env.OTHERS_NAME)
        .slice(0, 2)
        .map((name, index) => ({
          application: name,
          target: JSON.parse(process.env.OTHERS_LINK)[index],
          errMsg: `Missing: ${name} Link`,
        }))
    : []),
];

const QuickLinks = () => {
  return (
    <aside className="absolute right-0 top-0 flex h-full scale-[-1] flex-row-reverse flex-nowrap items-start justify-evenly gap-1 p-1 font-head [writing-mode:vertical-lr]">
      {links.map((link, index) => (
        <Link
          key={link?.application || index}
          href={link?.target ?? `https://${link.application}.com/`}
          target="_blank"
          rel="noreferrer noopener"
          className="origin-left text-xl capitalize transition-colors duration-300 ease-in-out hover:text-blue-500"
        >
          {link?.target ? link.application : link?.errMsg}
        </Link>
      ))}
    </aside>
  );
};

export default QuickLinks;
