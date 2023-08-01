import './Navbar.css'

function Navbar() {
    const auth = false;
    return (
        <>
            <nav>
                <a href="/">MyTinerary</a>
                <ul className='Menu'>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                    <li><button className='btn-login'>L</button></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar