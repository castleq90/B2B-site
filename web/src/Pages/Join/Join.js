import React,{useState, useEffect} from 'react'
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
    phone_numer:'',
    password:'',
  }
  )

  // const [numberValue, setNumberValue] = useState('')

  const handleValue = e =>{
    const { name , value } = e.target

    setInputValue({...inputValue, [name]:value})
  }

  // const handlePress = e => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if(regex.test(e.target.value)){
  //     setNumberValue(e.target.value);
  //   }
  // }

  // useEffect(()=>{
  //   setNumberValue(numberValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  // },[numberValue]);


  const handleJoin = () =>{
    fetch('http://localhost:8000/users/signup/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(inputValue),
    })
    .then(res => res.json())
    .then(data => {
      if(data.message === 'SUCCESS'){
        alert('회원가입완료');
        history.push('/login');
      }else{
        alert(data.message);
      }
    });
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
          <LabelInput handleValue={handleValue}/>
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
