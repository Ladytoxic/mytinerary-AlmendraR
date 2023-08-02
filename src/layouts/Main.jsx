import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function Main({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Main