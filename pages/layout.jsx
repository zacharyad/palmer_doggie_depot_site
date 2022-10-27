import Navbar from './Navbar'
import Footer from  './Footer'
import styles from "../styles/Home.module.css";
const Layout = ({children}) => {
    return (
    <>
        <Navbar />
        <div className={styles.container}>
            <main>{children}</main>
        </div>

        <Footer />
    </>
    )
}

export default Layout