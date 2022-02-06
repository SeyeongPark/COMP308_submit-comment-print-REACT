import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Seyeong Park (301088175)
// COMP308 Lab 1

export default function Comment(props) {

  const [courseCode, setCourseCode] = useState();
  const [courseName, setCourseName] = useState();

  const [strongSkill, setStrongSkill] = useState();
  const [memorableAssign, setMemorableAssign] = useState();
  
  const [comment, setComment] = useState();
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
      state: {courseCode : courseCode, courseName: courseName, strongSkill: strongSkill, memorableAssign: memorableAssign, comment : comment}
  });

  };
  
    return(
      
      <div className="comment-wrapper">
      <h1>Share your opinion :)</h1>
      <form onSubmit={handleSubmit}>
      <table>
          <tbody>
            <tr>
              <td>
                Email :
              </td>
              <td>
                <input type="text" defaultValue ={email} disabled = {true}/>
              </td>
            </tr>
            <tr>
              <td>
              Course Code :
              </td>
              <td>
                <input name="courseCode" onChange={e => setCourseCode(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Course Name : 
              </td>
              <td>
              <input name="courseName" onChange={e => setCourseName(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Strongest technical skill obtained in this course : 
              </td>
              <td>
              <input name="strongSkill" onChange={e => setStrongSkill(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
              The most memorable assignment : 
              </td>
              <td>
              <input name="memorableAssign" onChange={e => setMemorableAssign(e.target.value)}/>
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
            <tr>
              <td></td>
              <td>
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
    )
  }
  