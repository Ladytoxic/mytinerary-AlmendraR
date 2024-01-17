import './Navbar.css';
import LinksList from '../LinksList/LinksList';
import { Person } from 'akar-icons';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../assets/undraw_world_re_768g.svg';
import User from "../User/User";
import { useSelector } from 'react-redux';

function Navbar() {
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ]
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }


    const user = useSelector(store => store.userReducer.user);
    console.log(user)

    return (
        <nav className='fade-in-top'>
            <Link className='navbar-title' href="/">
                <img className='icon' src={icon} alt="icon" />
                <span className='title-text'>MyTinerary</span>
            </Link>
            <div className='menu'>
                <LinksList links={links} className='item-links-nav' />
                {user ? (
                    <User name={user.name} image={user.image} />
                ) : (
                    <button className='btn-login' onClick={login}>
                        <Person strokeWidth={3} size={16} /> Login
                    </button>
                )}

            </div>
        </nav>
    );
}
export default Navbar;