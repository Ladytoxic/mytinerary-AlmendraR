import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <div className="errorPage">
            <h1>404 Not Found</h1>
            <span>Return to
            <Link className="link" to='/'> home page</Link>
            </span>
        </div>
    );
}

export default ErrorPage;
