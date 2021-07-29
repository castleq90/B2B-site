import React,{useState,useEffect} from 'react'
import { Link, useHistory} from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import LabelInput from '../../molecules/LabelInput/LabelInput';
import RefInput from '../../molecules/RefInput/RefInput';
import BlueButton from '../../atoms/BlueButton/BlueButton';

import './Join.scss';

export default function Join() {

  const history = useHistory();


  const [ inputValue, setInputValue ] = useState({
    name:'',
    email:'',
    // phone_number:'',
    password:'',
  }
  )

  const [numberValue, setNumberValue] = useState('')

  const handleValue = e =>{
    const { name , value } = e.target;

    setInputValue({...inputValue, [name]:value});
  }

  const handlePhoneNumber = e => {
    const regex = /^[0-9\b -]{0,13}$/;
    if(regex.test(e.target.value)){
      setNumberValue(e.target.value);
    }
  }

  useEffect(()=>{
    setNumberValue(numberValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  },[numberValue]);


  const handleJoin = async () => {
    let response = await fetch('http://localhost:8000/users/signup/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
        //"Authorization":token 은 token가지고 확인하는 api에서 
      },
      body:JSON.stringify({...inputValue,phone_number:numberValue}),
    });
    
    if (response.ok) {
      let token = response.headers.get("Authorization");
      localStorage.setItem("token",token)
      alert("회원가입 성공!")
      history.push('/')
    }
    else {
      alert("회원가입에 실패하셨습니다")
    }
  };

  return (
    <div className="joinContainer">
      <div className="inputContainer">
        <header>
          <Logo/>
          <p className="joinText">회원가입</p>
        </header>
        <main>
          <RefInput handleValue={handleValue} inputValue={inputValue}/>
          <LabelInput handleValue={handleValue} handlePhoneNumber={handlePhoneNumber} numberValue={numberValue}/>
        </main>
        <div className="buttonContainer">
          <BlueButton onClick={handleJoin} >회원가입</BlueButton>
        </div>
        <div className="onlineAccount">
          <span>이미 계정이 있으신가요?</span>&nbsp;
          <Link to ="/login" className="loginLink">로그인</Link>
        </div>
      </div>
    </div>
  )
}
