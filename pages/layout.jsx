import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
    <>
        <Navbar />

        <main>{children}</main>

        <footer>
            <p>footer</p>
        </footer>
    </>
    )
}

export default Layout