import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Copyright © Palmer Doggie Depot. All rights reserved.</p>

                <p>Photo Credit: Colleen Rudolf</p>
            </div>
            <div />
            <Link href="/"><img src="./LOGO.svg" alt="Palmer Doggie Depot Logo - Name with silhouette of a dog playing" /></Link>

        </footer>
    )
}

export default Footer