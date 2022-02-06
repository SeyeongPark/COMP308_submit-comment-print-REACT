import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Comment(props) {

  
  const [favLanguage, setFavLanguage] = useState();
  const [wantLanguage, setWantLanguage] = useState();
  
  const [reason, setReason] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const loggedInUser = auth.getToken();
   
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
      state: {favLanguage: favLanguage, wantLanguage: wantLanguage, reason : reason}
  });

  };
  
    return(
      
      <div className="comment-wrapper">
      <h1>Share your answer</h1>

      <div style={{ borderTop: "2px solid #red ", marginLeft: 20, marginRight: 20 }}></div>

      <form onSubmit={handleSubmit}>
              <p> Email </p>
                <input type="text" defaultValue ={email} disabled = {true}/>

              <p> Favourite Programming Language </p>
                <input name="favLanguage" onChange={e => setFavLanguage(e.target.value)}/>

              <p>Programming Language you want to learn</p>
                <input name="wantLanguage" onChange={e => setWantLanguage(e.target.value)}/>

                <p>Why you want to learn the programming language?</p>
                <textarea onChange={e => setReason(e.target.value)} rows={5}/>
        <div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    )
  }
  