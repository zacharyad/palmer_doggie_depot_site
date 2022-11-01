import Link from "next/link";

const Navlink = (props) => {
  let { href, text, urlPath } = props;
  return (
    <Link
      href={href ?? ""}
      className={`${
        urlPath === href ? " text-white bg-cyan-700" : " text-cyan-700"
      } block rounded lg:bg-transparent lg:text-cyan-700 lg:p-0 py-4 px-2`}
    >
      {text}
    </Link>
  );
};

export default Navlink;
