import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Result.css'

export default function Result(props) {

  // call 'comment' value from Comment component
  const favLanguage = props.location.state?.favLanguage;
  const wantLanguage = props.location.state?.wantLanguage;
  const reason = props.location.state?.reason;

  const [email, setEmail] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (loggedInUser !=""){
      setEmail(loggedInUser);
    }
  })

  return(
    <div className="result-wrapper">
    <h3> Hi {email}, thank you for sharing your answer :)</h3>

    <p>Your favourite programming language is <span class="stress">{favLanguage}</span> 
    , and you want to learn <span class="stress">{wantLanguage}</span> </p>
    <p> because <span class="stress">{reason}</span></p>

    <h4>I hope you have a meaningful learning journey during this semester!</h4>
    </div>
  );
} 