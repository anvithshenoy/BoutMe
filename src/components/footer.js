const role = process.env.USER_ROLE ?? "{User Role}";

const Footer = () => {
  return (
    <footer className="flex items-start justify-end py-3.5 text-left text-sm text-slate-400 md:w-11/12 md:px-1">
      <div className="hidden w-1/2 md:inline-block" />
      <div>
        <p>
          <span className="align-top text-blue-500">*</span>A very passionate{" "}
          <span className="capitalize">{role}</span> open to offers &
          internship.
        </p>
        {/* <p>
          <span className="align-top text-blue-500">**</span>Hover on the text.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
