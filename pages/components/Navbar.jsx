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
        <nav>
            <div className="outer-nav-wrapper">
                <Link href="/"><Image height={50} width={200} src="/LOGO.svg" alt="Palmer Doggie Depot Logo - Name with silhouette of a dog playing" /></Link>
                <ul className="nav-link-wrapper">
                    <l1><Link href="/">Home</Link></l1>
                    <l1><Link href="/About">About</Link></l1>
                    <l1><Link href="/Acknowledgments">Acknowledgments</Link></l1>
                    <l1><Link href="/Blog">Blog</Link></l1>
                    <l1><Link href="/Faqs">FAQs</Link></l1>
                    <l1><Link href="/Join-The-Pack">Join The Pack</Link></l1>
                    <l1><Link href="/Local-Resources">Local Resources</Link></l1>
                    <l1><Link href="/Park-Information-and-Safety">Park Information & Safety</Link></l1>
                </ul>
                <div onClick={onClickHamburgerMenu} className="hamburger">
                    <div className="hamburger-line1"></div>
                    <div className="hamburger-line2"></div>
                    <div className="hamburger-line3"></div>
                </div>
            </div>
            {/* <div>
            <ul className={!isHamburgerMenuOpen ? "nav-link-wrapper-hidden" : "nav-link-wrapper-hamburger"}>
                    <l1><Link href="/">Home</Link></l1>
                    <l1><Link href="/About">About</Link></l1>
                    <l1><Link href="/Acknowledgments">Acknowledgments</Link></l1>
                    <l1><Link href="/Blog">Blog</Link></l1>
                    <l1><Link href="/Faqs">FAQs</Link></l1>
                    <l1><Link href="/Join-The-Pack">Join The Pack</Link></l1>
                    <l1><Link href="/Local-Resources">Local Resources</Link></l1>
                    <l1><Link href="/Park-Information-and-Safety">Park Information & Safety</Link></l1>
                </ul>
                <div className={isHamburgerMenuOpen ? "toggleOffPageUnderHamburger" : "nav-link-wrapper-hidden"} onClick={() =>{ 
                    console.log("click")
                    toggleHamburgerMenu(false)
                    }}/>
                </div> */}
        </nav>
    )
}

export default Navbar