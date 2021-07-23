import React, {useState, useEffect,useRef} from 'react'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'
import { REGEXP, validate } from '../../regex';
import './RefInput.scss';


export default function RefInput(props) {

  const emailRef = useRef(''); 
  const passwordRef = useRef('');


  useEffect (()=>{

    if(validate(props.inputValue.email, REGEXP.emailRegExp)){
      emailRef.current.innerText = null
    }
    else if(props.inputValue.email === ''){
      return
    }
    else{
      emailRef.current.innerText = '이메일 형식이 맞지않습니다.'
    }
    if(validate(props.inputValue.password, REGEXP.passwordRegExp)){
      passwordRef.current.innerText = null
    }
    else if(props.inputValue.password===''){
      return
    }
    else{
      passwordRef.current.innerText = '영문 & 숫자를 8자이상 입력하시오'
    }
  },[props.inputValue])


  return (
    <>
    <Label for="email" >이메일</Label>
    <Input type="email" name = 'email' placeholder = "Email" onChange={props.handleValue} id="email"/>
    <p ref={emailRef} className="textAlert"></p>
    <Label for="password" >비밀번호</Label>
    <Input type="password" name = 'password' placeholder = "Password" onChange={props.handleValue} id="password"/>
    <p ref={passwordRef} className="textAlert"></p>
  </>
  )
}
