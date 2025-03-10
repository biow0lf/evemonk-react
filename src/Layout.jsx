import "./Layout.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className={"container"}>{children}</div>

      <Footer />
    </>
  );
}

export default Layout;
