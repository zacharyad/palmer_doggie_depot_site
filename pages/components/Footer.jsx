import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
          <li>
            <Link href="/About" class="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/Contact" class="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
      <span class="block text-sm text-gray-500 sm:text-center">
        © 2022
        <Link href="/" class="hover:underline">
          Palmer Doggie Depot.{" "}
        </Link>
        All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
