import './footer.css';
import LinksList from '../LinksList/LinksList';
import { YoutubeFill, FacebookFill, InstagramFill } from 'akar-icons';

function Footer() {
    const currentYear = new Date().getFullYear();
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ]
    const social = [
        { title: 'MyTinerary', to: 'https://www.facebook.com/' },
        { title: 'MyTinerary_ok', to: 'https://www.instagram.com/' },
        { title: 'MyTinerary', to: 'https://www.youtube.com/' }
    ]

    return (
        <>
            <footer className='fade-in'>
                <LinksList links={links} />
                <ul>
                    <li className='social facebook'>
                        <a target='_blank' href={social[0].to + social[0].title}>
                            <FacebookFill strokeWidth={2} size={25} /> {social[0].title}
                        </a>
                    </li>
                    <li className='social instagram'>
                        <a target='_blank' href={social[1].to + social[1].title}>
                            <InstagramFill strokeWidth={2} size={25} /> {social[1].title}
                        </a>
                    </li>
                    <li className='social youtube'>
                        <a target='_blank' href={social[2].to + social[2].title}>
                            <YoutubeFill strokeWidth={2} size={25} /> {social[2].title}
                        </a>
                    </li>
                </ul>
                <div className='copyrights fade-in'>
                    <img src="./Icon.svg" alt="" width={100} />
                    <h4>MyTinerary&copy; {currentYear}</h4>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;