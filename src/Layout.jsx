import './Layout.css'
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <div className={"container"}>
        {children}
      </div>

      <Footer/>
    </>
  )
}

export default Layout
