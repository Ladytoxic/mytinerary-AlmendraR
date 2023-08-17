import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <h4>{message}</h4>
        </div>
    )
}

export default ErrorMessage;
