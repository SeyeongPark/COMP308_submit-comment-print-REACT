import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import auth  from '../../auth/auth';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const handleSubmit = e => {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    props.history.push('/comment');
  };

    return(
        <div className="login-wrapper">
          <h1>Login to evaluate the coures </h1>
          <h5>COMP308 Assignment 1 - Seyeong Park (301088175) </h5>
          <form class="form-login" onSubmit={handleSubmit}>
            <div class="login-wrapper">
              <input type="email" class="form-control" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
      </div>
    )
  }
  
