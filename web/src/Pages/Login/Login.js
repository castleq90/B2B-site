
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import InputForm from '../../molecules/InputForm/InputForm';
import { REGEXP, validate } from '../../regex';
import './Login.scss';

export default function Login() {


  const history = useHistory();

  const [idValue, setIdValue] = useState('');
  const [ passwordValue, setPasswordValue] = useState('');


  const validateInputData = (id, pw) => {
    return (
      validate(id, REGEXP.emailRegExp) && validate(pw, REGEXP.passwordRegExp)
    );
  };


  const handleIdInput = e => {
    setIdValue(e.target.value);
}

const handlePasswordInput = e=>{
    setPasswordValue(e.target.value);
}
  const handleLogin = async () => {
    let response = await fetch(API,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email: idValue,
        password: passwordValue,
      }),
    });
    if (response.ok) {
      let token = response.headers.get("Authorization");
      localStorage.setItem("token",token)
      history.push('/')
    }
    else {
      alert("로그인 정보를 확인하세요")
    }
  };

  return (
    <div className ="allContainer">
      <div className="loginContainer"> 
          <Logo/>
        <main>
          <InputForm idValue={idValue} handleIdInput={handleIdInput} passwordValue={passwordValue} handlePasswordInput={handlePasswordInput} validateInputData={validateInputData} handleLogin={handleLogin}/>
        </main>
        <div className="signupContainer">
          <span>New to B2F??</span>&nbsp;
          <Link to ='/join' className="signup">Join now</Link>
        </div>
      </div>
    </div>
  )
}