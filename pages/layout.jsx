import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupportCard from "./components/SupportCard";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <SupportCard />
      <Footer />
    </div>
  );
};

export default Layout;
