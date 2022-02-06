import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Result.css'

// Seyeong Park (301088175)
// COMP308 Lab 1

export default function Result(props) {

  // call value from Comment component
  const comment = props.location.state?.comment;
  const courseCode = props.location.state?.courseCode;

  const [email, setEmail] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (loggedInUser !=""){
      setEmail(loggedInUser);
    }
  })

  return(
    <div className="result-wrapper">
    <h1> Hi {email}, thank you for sharing your opinion about <span class="stress">{courseCode}</span></h1>
    <h3>
      We appreciate your comments: " <span class="stress">{comment}</span> "
    </h3>
    </div>
  );
} 