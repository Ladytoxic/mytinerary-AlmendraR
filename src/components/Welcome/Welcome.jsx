import './Welcome.css'
import WelcomeImg from '../../assets/undraw_adventure_map_hnin.svg'

function Welcome() {
    const title = 'My Tinerary'
    const subTitle = 'Find your perfect trip, designed by insiders who know and love their cities!'
    return (
        <div className="welcomeApp">
            <div className='welcome-card'>
                <h1 className='welcome-title'>{title}</h1>
                <p>{subTitle}</p>
                <button className='btn-welcome'>Start traveling</button>
            </div>
            <figure>
                <img src={WelcomeImg} alt="Imagen de City" />
            </figure>
        </div>
    )
}
export default Welcome