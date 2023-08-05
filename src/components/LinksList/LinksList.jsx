import './LinksList.css'
import Link from '../Link/Link'

function LinksList({ className, links }) {
    if (!links) {
        return (
            <ul className='items-list'>
                <li className={className || 'item'}>Empty list</li>
            </ul>
        )
    }
    return (
        <>
            <ul className='items-list'>
                {(
                    links.map((link) => (
                        link.title ? (
                            <li className={className || 'item'} key={link.to}>
                                <Link title={link.title} to={link.to} />
                            </li>
                        ) : null
                    ))
                )}
            </ul>
        </>
    )
}

export default LinksList
