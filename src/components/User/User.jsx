import './User.css';

const User = ({ name, image }) => {
    return (
        <div className='user'>
            <img className='profile-image' src={image} alt={'profile image ' + name} />
            <h3 className='profile-name'>{name}</h3>
        </div>
    )
}

export default User;
