import './Register.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { user_login, user_register } from "../../store/acitions/userActions";

const Register = () => {
  const [formSignUp, setFormSingIn] = useState({
    email: '',
    password: '',
  })

  const countries = [
    "Spain", "United States", "France", "Brazil", "Thailand", "South Africa", "Australia", "Turkey", "Denmark", "Jordan", "Italy", "Czech Republic", "Mexico", "Japan"
  ]

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormSingIn({
      ...formSignUp,
      [e.target.name]: e.target.value
    })
  }

  const handelSignUp = async (e) => {
    e.preventDefault();
    try {
      dispatch(user_register({
        data: formSignUp
      }))
    } catch (error) {
      console.log(error.data)
    }
  }
  return (
    <div className='register fade-in'>
      <h2 className='form-title'>Start your adventure! Sign up now</h2>
      <form onSubmit={handelSignUp} className='form_signUp'>
        <div>
          <input onChange={handleInput} className='input-text' type="email" name="email" id="email" placeholder='Email' />
          <input onChange={handleInput} className='input-text' type="password" name='password' id='password' placeholder='Password' />
        </div>
        <div>
          <input onChange={handleInput} className='input-text' type="text" name="name" id="name" placeholder='Full name' />
          <input onChange={handleInput} className='input-text' type="text" name="image" id="image" placeholder='Profile image URL' />
          <label htmlFor="country">Country: </label>
          <select className='select-countries' name="country" id="country">
            <option disabled >Select country</option>
            {countries?.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <input className='btn' type="submit" value='Register' />
      </form>
    </div>
  )
}

export default Register;
