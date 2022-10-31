import {useEffect, useState} from "react";
import Link from "next/link"
import Image from 'next/image'

const Navbar = () => {

    useEffect(()=>{


        return () => toggleHamburgerMenu(false)
        
    }, [])
    const [isHamburgerMenuOpen, toggleHamburgerMenu] = useState(false)

    const onClickHamburgerMenu = () => {
        toggleHamburgerMenu(!isHamburgerMenuOpen)
    }

    return (

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div className="container flex flex-wrap justify-evenly md:justify-around items-center mx-auto">
    <Link href="/">
        <Image height={50} width={200} src="/LOGO.svg" alt="Palmer Doggie Depot Logo - Name with silhouette of a dog playing" />
    </Link>
    <button id="triggerEl" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-cyan-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="true">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <l1><Link href="/" className="block text-white bg-cyan-700 rounded lg:bg-transparent lg:text-cyan-700 lg:p-0 dark:text-white" aria-current="page">Home</Link></l1>
        <l1><Link href="/About" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">About</Link></l1>
        <l1><Link href="/Acknowledgments" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">Acknowledgments</Link></l1>
        <l1><Link href="/Blog" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">Blog</Link></l1>
        <l1><Link href="/Faqs" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">FAQs</Link></l1>
        <l1><Link href="/Join-The-Pack" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">Join The Pack</Link></l1>
        <l1><Link href="/Local-Resources" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">Local Resources</Link></l1>
        <l1><Link href="/Park-Information-and-Safety" className="block text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0">Park Information & Safety</Link></l1>
      </ul>
    </div>
  </div>
</nav> 

        
    )
}

export default Navbar



