import './User.css';

const User = ({ name, image }) => {
    return (
        <div className='user'>
            <img className='profile-image' src={image} alt={'profile image ' + name} />
        </div>
    )
}

export default User;
