
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import InputForm from '../../molecules/InputForm/InputForm';
import './Login.scss';

export default function Login() {

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

  return (
    <div className ="allContainer">
      <div className="loginContainer"> 
          <Logo/>
        <main>
          <InputForm />
        </main>
        <div className="signupContainer">
          <span>New to B2F??</span>&nbsp;
          <Link to ='/join' className="signup">Join now</Link>
        </div>
      </div>
    </div>
  )
}