import './Welcome.css';
import WelcomeImg from '../../assets/undraw_adventure_map_hnin.svg';
import { PlaneFill } from 'akar-icons';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const title = 'My Tinerary'
    const subTitle = 'Find your perfect trip, designed by insiders who know and love their cities!'

    const navigate = useNavigate();
    const cities = () => {
        navigate('/cities');
    }

    return (
        <header className='welcomeApp fade-in'>
            <div className='welcome-card'>
                <h1 className='welcome-title'>{title}</h1>
                <p>{subTitle}</p>
                <button onClick={cities} className='btn-welcome'>
                    <PlaneFill strokeWidth={1} size={20} /> Start traveling</button>
            </div>
            <figure className='fade-in'>
                <img src={WelcomeImg} alt="Main image of my tinerary" />
            </figure>
        </header>
    );
}
export default Welcome;