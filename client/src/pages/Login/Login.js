import React, { useState } from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Login.scss'
import logo from './logo.jpg';
import loginimg from './login.jpg';
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  let history = useNavigate();

  function handlesubmit(event) {
    event.preventDefault();
  }

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
      usertype: usertype,
    }).then((res) => {
      if (res.data.msg) {
        alert("Wrong Username or Password");
      } else {
        window.auth = true;
        history("/home");
      }
    });
  };

  /* return (
    <div>
      <div className="Login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <h1>{i}</h1>
      </div>
    </div>
  ); */
  return (
    <div className='main-login'>
           <div className='login-container'>
               <div className='left-side'>
                   <div className='img-class'>
                       <img src={logo} id='img-id' alt="Sign Up" />
                   </div>
                <form onSubmit={handlesubmit}>
                    <label for="username">Username :</label>
                    <input placeholder='Enter your Username' type="text" id='username' value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label for="pwd">Password :</label>
                    <input placeholder='Enter your Password' type="password" id='pwd' value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                    <label for="usertype">User Type :</label>
                    <select id='usertype'>
                        <option value="default" disabled selected>User Type</option>
                        <option value={usertype} onChange={(e)=>{setUsertype('FAC')}}>Faculty</option>
                        <option value={usertype} onChange={(e)=>{setUsertype('STU')}}>Student</option>
                        <option value={usertype} onChange={(e)=>{setUsertype('ADM')}}>Admin</option>
                    </select>
                    <button type='submit' id='sub_but' onClick={login}>Login</button>
                </form>
               </div>
               <div className="right-side">
                   <div className="welcomenote">
                       <h3>Welcome Back !</h3>
                   </div>
                   <div className="welcomeImg">
                       <img src={loginimg} alt="" id='wel-img-id' />
                   </div>
               </div>
           </div>
    </div>
);
};

export default Login;
