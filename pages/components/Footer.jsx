import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-center">
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
          <li>
            <Link href="/About" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/Privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/Licensing" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <span className="block text-sm text-gray-500 sm:text-center">
        © 2022
        <Link href="/" className="hover:underline">
          {" "}
          Palmer Doggie Depot.{" "}
        </Link>
        All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
