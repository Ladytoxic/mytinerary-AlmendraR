import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { user_login} from "../../store/acitions/userActions";
import './Login.css';


const Login = () => {
    const [formSignIn, setFormSingIn] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setFormSingIn({
            ...formSignIn,
            [e.target.name]: e.target.value
        })
    }

    // console.log( useSelector((store) => store.userReducers))

    const handelSignIn = async (e) => {
        e.preventDefault();
        try {
            dispatch(user_login({
                data: formSignIn
            }))
        } catch (error) {
            console.log(error.data)
        }
    }

    return (
        <div className='login fade-in'>
            <h2 className='form-title'>Welcome back! Please sign in</h2>
            <form onSubmit={handelSignIn} className='form_signin'>
                <input onChange={handleInput} className='input-text' type="email" name="email" id="email" placeholder='Email' />
                <input onChange={handleInput} className='input-text' type="password" name='password' id='password' placeholder='Password' />
                <input className='btn' type="submit" value='Login' />
            </form>
        </div>
    )
}

export default Login;
