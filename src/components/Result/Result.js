import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Result.css'

export default function Result(props) {

  // call 'comment' value from Comment component
  const comment = props.location.state?.comment;
  const field1 = props.location.state?.field1;

  const [email, setEmail] = useState();
  const [commentd ,setComment] = useState();
  const [field1d ,setField1] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();
    if (loggedInUser !=""){
      setEmail(loggedInUser);
      setComment(comment);
      // setField1(field1);

      // console.log("email:",email,"\n field1:",field1)
    }
  })

  return(
    <div className="result-wrapper">

    <h2>Result</h2>
    <h1> Thank you {email} </h1>
    <h3>field1 : {field1}</h3>
    <h3>we appreciate your comments : {comment}</h3>

    </div>
  );
} 