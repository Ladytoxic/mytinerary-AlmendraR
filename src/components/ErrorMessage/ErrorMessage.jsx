import './ErrorMessage.css';
import img from '../../assets/undraw_world_re_768g.svg'

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <img src={img} alt="" />
            <h4>{message}</h4>
        </div>
    )
}

export default ErrorMessage;
