import axios from 'axios';
import { setToken } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/userReducer';
import { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import './Form.scss';

export default function Login(){

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
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };
 
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

    const handleSubmit = (e) =>{
        console.log(email);
        e.preventDefault();
    if ( email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true); }
        // Request API.
        axios
        .post('http://localhost:1337/api/auth/local', {
        identifier: email,
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
        });
    }

    // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
        { (submitted && !error) && <Navigate to="/" replace={true} />}
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


    return(
      <div className="form" style={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' }}>
      {/* Calling to the methods */}
      <h2>Login</h2>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        <form >
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
      <Link style={{padding : '10px', fontWeight: 'bold'}} to="/register">Sign Up</Link>
      </div>
    );
}