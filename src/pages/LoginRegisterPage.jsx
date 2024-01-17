import { ArrowLeft } from 'akar-icons';
import icon from '../assets/undraw_world_re_768g.svg';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import { GoogleSignIn } from '../components/GoogleSignIn/GoogleSignIn';
import { useState } from 'react';
import classNames from 'classnames';

const LoginRegisterPage = () => {
  const [showSignIn, setShowSignInIn] = useState(true);
  const buttonClass = classNames({
    'switch-right': showSignIn,
    'switch-left': !showSignIn,
  });
  return (
    <div className="loginPage">
      <header>
        <img className='img_logo' src={icon} alt="Mytinerary" />
        <h1>MyTinerary</h1>
      </header>
      <main>
        <section className='sign'>
          <div className='switch-sign fade-in' onClick={() => setShowSignInIn(!showSignIn)}>
            <span>Sign Up</span>
            <span>Sign In</span>
            <span className={'btn-switch ' + buttonClass} onClick={() => setShowSignInIn(!showSignIn)}>
              {showSignIn ? 'Sign In' : 'Sign Up'}
            </span>
          </div>
          {showSignIn ? <Login /> : <Register />}
          <span className='or'>OR</span>
          <GoogleSignIn />
        </section>
      </main>
    </div>
  )
}

export default LoginRegisterPage;
