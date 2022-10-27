import Head from "next/head";
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <h1><Link href="/">logo</Link></h1>
            <ul>
                <l1><Link href="/">Home</Link></l1>
                <l1><Link href="/About">About</Link></l1>
                <l1><Link href="/Acknowledgments">Acknowledgments</Link></l1>
                <l1><Link href="/Blog">Blog</Link></l1>
                <l1><Link href="/Faqs">FAQs</Link></l1>
                <l1><Link href="/Join-The-Pack">Join The Pack</Link></l1>
                <l1><Link href="/Local-Resources">Local Resources</Link></l1>
                <l1><Link href="/Park-Information-and-Safety">Park Information & Safety</Link></l1>
            </ul>
        </nav>
    )
}

export default Navbar