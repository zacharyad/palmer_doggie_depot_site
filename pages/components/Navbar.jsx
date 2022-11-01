import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    return () => setIsNavOpen(false);
  }, []);

  const onClickHamburgerMenu = () => {
    setIsNavOpen(() => !isNavOpen);
  };

  const selectionMade = () => {
    setIsNavOpen(() => false);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-evenly md:justify-around items-center mx-auto">
        <Link href="/">
          <Image
            height={0}
            width={200}
            src="/LOGO.svg"
            alt="Palmer Doggie Depot Logo - Name with silhouette of a dog playing"
          />
        </Link>
        <button
          onClick={() => onClickHamburgerMenu()}
          id="triggerEl"
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-cyan-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${!isNavOpen ? "" : "hidden"} w-6 h-6`}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>

          {/* close (X )hamburger */}

          <svg
            className={`${
              isNavOpen ? "" : "hidden"
            } flex justify-center w-6 h-6`}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M 8 6 L 13 1 L 15 3 L 10 8 L 15 13 L 13 15 L 8 10 A 5 5 0 0 0 8 10 t -5 5 L 1 13 L 6 8 L 1 3 L 3 1 L 8 6"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          onClick={selectionMade}
          className={`${
            isNavOpen ? "z-10 absolute top-48" : "hidden"
          } motion-reduce:transition-none w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <l1>
              <Navlink text={"Home"} href="/" urlPath={router.pathname} />
            </l1>
            <l1>
              <Navlink href="/About" urlPath={router.pathname} text="About" />
            </l1>
            <l1>
              <Navlink
                href="/Acknowledgments"
                urlPath={router.pathname}
                text="Acknowledgments"
              />
            </l1>
            <l1>
              <Navlink href="/Blog" urlPath={router.pathname} text="Blog" />
            </l1>
            <l1>
              <Navlink href="/Faqs" urlPath={router.pathname} text="FAQs" />
            </l1>
            <l1>
              <Navlink
                href="/Join-The-Pack"
                urlPath={router.pathname}
                text="Join The Pack"
              />
            </l1>
            <l1>
              <Navlink
                href="/Local-Resources"
                urlPath={router.pathname}
                text="Local Resources"
              />
            </l1>
            <l1>
              <Navlink
                href="/Park-Information-and-Safety"
                urlPath={router.pathname}
                text="Park Info & Safety"
              />
            </l1>
          </ul>
        </div>
      </div>
      <div className={`${isNavOpen ? "w-screen h-screen" : "hidden"}`} />
    </nav>
  );
};

export default Navbar;
