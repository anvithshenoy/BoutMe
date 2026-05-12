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

const QuickLinks = () => (
  <aside className="font-head absolute top-0 right-0 flex h-full scale-[-1] flex-row-reverse flex-nowrap items-start justify-start gap-4 p-1 [writing-mode:vertical-lr]">
    {links.reverse().map((link, index) => (
      <Link
        key={link?.application || index}
        href={link?.target ?? `https://${link.application}.com/`}
        target="_blank"
        rel="noreferrer noopener"
        className="focus:ring-foreground focus:ring-offset-background origin-left text-xl capitalize outline-hidden transition-colors duration-300 ease-in-out hover:text-blue-500 focus:ring-2 focus:ring-offset-2"
      >
        {link?.target ? link.application : link?.errMsg}
      </Link>
    ))}
  </aside>
);

export default QuickLinks;
