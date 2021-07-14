import { Link, useHistory  } from 'react-router-dom';
import React, { useState } from 'react';
import { REGEXP, validate } from '../../regex';
import './Login.scss';

export default function Login() {

  const history = useHistory();

  const [idValue, setIdValue] = useState('');
  const [ passwordValue, setPasswordValue] = useState('');

  const handleIdInput = e => {
      setIdValue(e.target.value);
  }

  const handlePasswordInput = e=>{
      setPasswordValue(e.target.value);
  }

  const validateInputData = (id, pw) => {
    return (
      validate(id, REGEXP.emailRegExp) && validate(pw, REGEXP.passwordRegExp)
    );
  };


  // goToMain = () => {
  //   fetch(API, {
  //     body: JSON.stringify({
  //       email: idValue,
  //       password: passwordValue,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then (result => {
  //     if(result.message === 'SUCCESS'){
  //       this.props.history.push('/');
  //     }else {
  //       alert('sign up failed.Retry');
  //     }
  //     })
  //     .catch(err=> alert(err));
  // }

  const goToMain = () => {
    history.push('/');
  }
  return (
    <div className ="allContainer">
      <div className="loginContainer">
        <header>
          <p>B2F</p>
        </header>
        <main>
          <input
          type="text"
          value={idValue}
          onChange={handleIdInput}
          placeholder="Email"/>
          <input 
          type="text"
          value={passwordValue}
          onChange={handlePasswordInput}
          placeholder="Password"/>
          <button 
          onClick = {goToMain}
          disabled={!validateInputData(idValue, passwordValue)}
          >Sign in</button>
        </main>
        <div className="signupContainer">
          <span>New to B2F??</span>&nbsp;
          <Link to ='/join' className="signup">Join now</Link>
        </div>
      </div>
      
    </div>
  )
}