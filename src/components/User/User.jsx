import userDefault from '../../assets/userDefault.svg'
function User() {
    return (
        <div>
            <img className='userLogin' src={userDefault} alt="Imagen de Usuario" />
            <button>
                Login
            </button>
        </div>
    )
}

export default User
