import './Navbar.css'
import LinksList from '../LinksList/LinksList'
import { Person } from 'akar-icons';

function Navbar() {
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ]

    const login = () => {
        window.location.href = '/login';
    }

    return (
        <nav className='fade-in-top'>
            <a className='navbar-title' href="/"><img className='icon' src="./Icon.svg" alt="icon" />MyTinerary</a>
            <div className='menu'>
                <LinksList links={links} className='item-links-nav' />
                <button className='btn-login' onClick={login}>
                    <Person strokeWidth={3} size={16} /> Login</button>
            </div>
        </nav>
    )
}
export default Navbar