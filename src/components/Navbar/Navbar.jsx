import './Navbar.css'
import LinksList from '../LinksList/LinksList'

function Navbar() {
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ]
    return (
        <nav>
            <a className='navbar-title' href="/">MyTinerary</a>
            <div className='menu'>
                <LinksList links={links} className='item-links-nav' />
                <button className='btn-login'>Login</button>
            </div>
        </nav>
    )
}
export default Navbar