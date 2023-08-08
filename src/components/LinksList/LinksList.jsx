import './LinksList.css';
import { Link } from 'react-router-dom';

function LinksList({ className, links }) {
    if (!links) {
        return (
            <ul className='items-list'>
                <li className={className || 'item'}>Empty list</li>
            </ul>
        );
    }
    return (
        <>
            <ul className='items-list'>
                {(
                    links.map((link) => (
                        link.title ? (
                            <li className={className || 'item'} key={link.to}>
                                <Link className='link' to={link.to}>{link.title}</Link>
                            </li>
                        ) : null
                    ))
                )}
            </ul>
        </>
    );
}

export default LinksList;
