import React, {useState, useEffect, useRef} from 'react'
import { Link, useHistory} from 'react-router-dom';
import { REGEXP, validate } from '../../regex';
import './Join.scss';

export default function Join() {

  const history = useHistory();

  const emailRef = useRef(''); 
  const passwordRef = useRef('');

  const [ inputValue, setInputValue ] = useState({
    email: '',
    password:'',
    name:'',
    company:'',
    department:'',
  }
  )

  const [numberValue, setNumberValue] = useState('')

  const handleValue = e =>{
    const { name , value} = e.target

    setInputValue({...inputValue, [name]:value})
  }

  const handlePress = e => {
    const regex = /^[0-9\b -]{0,13}$/;
    if(regex.test(e.target.value)){
      setNumberValue(e.target.value);
    }
  }

  useEffect (()=>{

    if(validate(inputValue.email, REGEXP.emailRegExp)){
      emailRef.current.innerText = null
    }
    else if(inputValue.email === ''){
      return
    }
    else{
      emailRef.current.innerText = '이메일 형식이 맞지않습니다.'
    }
    if(validate(inputValue.password, REGEXP.passwordRegExp)){
      passwordRef.current.innerText = null
    }
    else if(inputValue.password===''){
      return
    }
    else{
      passwordRef.current.innerText = '영문 & 숫자를 8자이상 입력하시오'
    }
    console.log(inputValue)
  },[inputValue])

  useEffect(()=>{
    setNumberValue(numberValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  },[numberValue]);

  const goToLogin = () => {
    history.push('/login');
  }

  return (
    <div className="joinContainer">
      <div className="inputContainer">
        <header>
          <p className="logoText">B2F</p>
          <p className="joinText">회원가입</p>
        </header>
        <main>
          <p>이메일</p>
          <input type="email" name = 'email' placeholder = "Email" onChange={handleValue}/>
          <p ref={emailRef} className="textAlert"></p>
          <p>비밀번호</p>
          <input type="password" name = 'password' placeholder = "Password" onChange={handleValue}/>
          <p ref={passwordRef} className="textAlert"></p>
          <p>전화번호</p>
          <input type="text" name="number" placeholder="Phone number" onChange={handlePress}/>
          <p>이름</p>
          <input type="text" name ="name" placeholder="Name" onChange={handleValue}/>
          <p>회사명</p>
          <input type="text" name="company" placeholder="Company name" onChange={handleValue}/>
          <p>부서명</p>
          <input type="text" name="department" placeholder="Department name" onChange={handleValue}/>
        </main>
        <div className="buttonContainer">
          <button  onClick = {goToLogin}>
          회원가입
          </button>
        </div>
        <span>이미 계정이 있으신가요?</span>&nbsp;
        <Link to ="/login" className="loginLink">로그인</Link>
      </div>
    </div>
  )
}
