import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';

export default function Comment(props) {

  
  const [field1, setField1] = useState();
  // const [field2, setField2] = useState();
  
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();

 // let loggedEmail = auth.getToken();

  useEffect(() => {
    const loggedInUser = auth.getToken();
   
  //  setEmail(loggedInUser);
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
    }
},[]);
 
  const handleSubmit = e => {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    
    props.history.push({
      pathname: '/result',
      state: {field1: field1 ,comment : comment}
  });

  };
  
    return(
      
      <div className="comment-wrapper">
      <h1>Enter Your Comments</h1>
      <form onSubmit={handleSubmit}>

        <label>
          <p>
            Field 1
            <input name="field1" onChange={e => setField1(e.target.value)}/>
          </p>
        </label>

        {/* <label>
          <p>
            Field 2
            <input name="field2" onChange={e => setField2(e.target.value)}/>
          </p>
        </label> */}

        <label>
          <p>
            Email
            <input type="text" defaultValue ={email} disabled = {true}/>
          </p>
        </label>

        <label>
          <p>Comment</p>
          <textarea onChange={e => setComment(e.target.value)} rows={5}/>
        </label>
       
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
  }
  