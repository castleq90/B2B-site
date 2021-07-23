import React,{useState} from 'react'
import { useHistory  } from 'react-router-dom';
import Input from '../../atoms/Input/Input'
import BlueButton from '../../atoms/BlueButton/BlueButton'
import { REGEXP, validate } from '../../regex';
import './InputForm.scss'

export default function InputForm() {

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

  const goToMain = () => {
    history.push('/');
  }

  return (
    <>
      <Input type="text"
          value={idValue}
          onChange={handleIdInput}
          placeholder="Email"/>
      <Input type="text"
          value={passwordValue}
          onChange={handlePasswordInput}
          placeholder="Password"/>
      <BlueButton className="blueButton" onClick={goToMain} disabled={!validateInputData(idValue, passwordValue)}>Sign in</BlueButton>
    </>
  )
}
