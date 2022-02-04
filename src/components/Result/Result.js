import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Result.css'

export default function Result(props) {

  // call 'comment' value from Comment component
  const comment = props.location.state?.comment;
  const field1 = props.location.state?.field1;
  const field2 = props.location.state?.field2;

  const [email, setEmail] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (loggedInUser !=""){
      setEmail(loggedInUser);
    }
  })

  return(
    <div className="result-wrapper">

    <h2>Confirm Comment</h2>
    <h1> Thank you {email} </h1>
    <h3>field1 : {field1}</h3>
    <h3>field2 : {field2}</h3>
    <h3>we appreciate your comments : {comment}</h3>

    </div>
  );
} 