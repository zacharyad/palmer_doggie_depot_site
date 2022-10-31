import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import styles from "../styles/Home.module.css";

const Layout = ({children}) => {

    return (
    <div className='app-wrapper'>
        <Navbar />

        <div className={styles.container}>
            <main>{children}</main>
        </div>


        <Footer />
    </div>
    )
}

export default Layout



