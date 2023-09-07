import { ArrowLeft } from 'akar-icons';
import icon from '../assets/undraw_world_re_768g.svg';
import Login from '../components/Login/Login';
const LoginRegisterPage = () => {
  return (
    <>
      <div className="loginPage">
        <header className='loginHeader'>
          <div className='navbar-signIn'>
            <button className='btn-goBack link'>
              <ArrowLeft strokeWidth={2.5} size={36} />
            </button>
          </div>
          <img className='icon-login' src={icon} alt="icon-myTinerary" />
        </header>
        <Login />
        <h1>Sign in</h1>
        <h2>🚧Page under construction🚧</h2>
      </div>
    </>
  )
}

export default LoginRegisterPage;
