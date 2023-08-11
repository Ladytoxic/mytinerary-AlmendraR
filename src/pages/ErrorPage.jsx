import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer"
function ErrorPage() {
    return (
        <>
            <div className="errorPage">
                <img src="./Icon.svg" alt="" width='100px' />
                <h1>Page not found</h1>
                <span>Return to
                    <Link className="link" to='/'> home page</Link>
                </span>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;
