import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "../styles/Home.module.css";
import SupportCard from "./components/SupportCard";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />

      <div className={styles.container}>
        <main>{children}</main>
      </div>

      <SupportCard />
      <Footer />
    </div>
  );
};

export default Layout;
