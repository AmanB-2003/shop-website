import { useState } from 'react';
import axios from 'axios';
import { setToken } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/userReducer';
import { Link } from "react-router-dom";
 
export default function Signup() {
    //Redux dispatch to access reducers(functions)
    const dispatch = useDispatch();
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      
      axios
  .post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
    username: name,
    email: email,
    password: password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    setToken(response.data.jwt);
    dispatch(setUser(response.data.user));
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    setError(true);
  });
      //setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form" style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' }}>
      <div>
        <h3 style={{textAlign: 'left'}}>User Registration</h3>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form >
        {/* Labels and inputs for form data */}
        <label className="label">Name</label><br></br>
        <input onChange={handleName} className="input"
          value={name} type="text" /><br></br><br></br>
 
        <label className="label">Email</label><br></br>
        <input onChange={handleEmail} className="input"
          value={email} type="email" /><br></br><br></br>
 
        <label className="label">Password</label><br></br>
        <input onChange={handlePassword} className="input"
          value={password} type="password" /><br></br><br></br>
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      <Link style={{padding : '10px', fontWeight: 'bold'}} to="/login">Login</Link>
    </div>
  );
}