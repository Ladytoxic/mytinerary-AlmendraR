import './footer.css'
import LinksList from '../LinksList/LinksList';

function Footer() {
    const currentYear = new Date().getFullYear();
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ]
    const social = [
        { title: 'Facebook', to: '1' },
        { title: 'Instagram', to: '2' },
        { title: 'Youtube', to: '3' }
    ]
    return (
        <>
            <footer className='fade-in'>
                <LinksList links={links} />
                <LinksList links={social} />
                <p className='copyrights'>&copy; {currentYear} - All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer