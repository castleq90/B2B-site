import Input from '../../atoms/Input/Input'
import BlueButton from '../../atoms/BlueButton/BlueButton'
import './InputForm.scss'

export default function InputForm(props) {

  return (
    <>
      <Input type="text"
          value={props.idValue}
          onChange={props.handleIdInput}
          placeholder="Email"/>
      <Input type="text"
          value={props.passwordValue}
          onChange={props.handlePasswordInput}
          placeholder="Password"/>
      <BlueButton className="blueButton" onClick={props.handleLogin} disabled={!props.validateInputData(props.idValue, props.passwordValue)}>Sign in</BlueButton>
    </>
  )
}
