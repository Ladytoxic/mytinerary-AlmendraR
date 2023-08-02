import './Navbar.css'
import userDefault from '../../assets/userDefault.svg'
import Link from '../Link/Link';

function Navbar() {
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },

    ]
    return (
        <nav>
            <a href="/">MyTinerary</a>
            <ul className='Menu'>
                {
                    links.map((link) => (
                        <li key={link.to}>
                            <Link title={link.title} to={link.to} />
                        </li>
                    ))
                }
                <li><img src={userDefault} alt="userDefault" /></li>
            </ul>
        </nav>
    )
}
export default Navbar