import { NavLink } from "react-router-dom";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-[700px] mx-auto   pt-10 ">
      <Header />
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
      <footer className=" ">
        <div className="text-center">
          <p>
            Made with <span className="animate-pulse">❤</span> by Neeraj Kumar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
