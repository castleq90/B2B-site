import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'


export default function LabelInput(props) {

  return (
    <>
    <Label for="phonenumber" >전화번호</Label>
    <Input type="text" name="phone_number" placeholder="Phone number" onChange={props.handleValue} id="phonenumber"/>
    <Label for="name" >이름</Label>
    <Input type="text" name ="name" placeholder="Name" onChange={props.handleValue} id="name"/>
    </>
  )
}
