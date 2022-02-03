import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Comment(props) {

  
  const [field1, setField1] = useState();
  const [field2, setField2] = useState();
  
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
      state: {field1: field1, field2: field2, comment : comment}
  });

  };
  
    return(
      
      <div className="comment-wrapper">
      <h1>Enter Comments</h1>
      <form onSubmit={handleSubmit}>

      <table>
          <tbody>
            <tr>
              <td>
                Field 1
              </td>
              <td>
                <input name="field1" onChange={e => setField1(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Field 2
              </td>
              <td>
                <input name="field2" onChange={e => setField2(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Email
              </td>
              <td>
                <input type="text" defaultValue ={email} disabled = {true}/>
              </td>
            </tr>
            <tr>
              <td>
                <p>Comment</p>
              </td>
              <td>
              <textarea onChange={e => setComment(e.target.value)} rows={5}/>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    )
  }
  