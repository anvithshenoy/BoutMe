import Link from "next/link";

const links = [
  ...(process.env.SOCIALS_NAME && process.env.SOCIALS_LINK
    ? JSON.parse(process.env.SOCIALS_NAME)
        .slice(0, 4)
        .map((name, index) => ({
          application: name,
          target: JSON.parse(process.env.SOCIALS_LINK)[index],
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
          className="origin-left text-xl capitalize outline-none transition-colors duration-300 ease-in-out hover:text-blue-500 focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
        >
          {link?.target ? link.application : link?.errMsg}
        </Link>
      ))}
    </aside>
  );
};

export default QuickLinks;
