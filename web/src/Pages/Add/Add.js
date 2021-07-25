import React,{useState} from 'react'
import Navbar from '../../organisms/Navbar/Navbar';
import Contact from '../../organisms/Contact/Contact'
import Modal from '../../organisms/Modal/Modal'
import Detail from '../../molecules/Detail/Detail'
import AddContact from '../../organisms/AddContact/AddContact'
import './Add.scss'

export default function Add() {

  const [ detailOn, setDetailOn ] = useState(false)
  const [ addOn, setAddOn ] = useState(false)

  const handleDetail = () =>{
    setDetailOn(!detailOn)
  }  

  const handleContact = () => {
    setAddOn(!addOn)
  }

  return (
    <>
    <Navbar/>
      <div className="allSection">
        <div className="scheduleSection">
          <div className="scheduleHeader">
            <div className="buttonHeader">
              <button>
                <stron>저장</stron>
              </button>
              <button>일정 삭제</button>
            </div>
          </div>
          <div className="scheduleWrap">
            <div className="scheduleCont">
              <div className="section">
                <div className="articleTitle">
                  <span >제목</span>
                  <div className="cont">
                    <input type="text" maxlength="200"/>
                  </div>
                </div>
                <div className="articlePlace">
                  <span>장소</span>
                  <div className="cont">
                    <input type="text" maxlength="100"/>
                  </div>
                </div>
              </div>
              <div className="clientSection">
                <div className="clientArea">
                  <span>고객</span>
                  <div classname="cont">
                    <input type="text" placeholder="이름"/>
                    <input type="text" placeholder="회사"/>
                    <input type="text" placeholder="부서명"/>
                  </div>
                </div>
              </div>
              <div className="commentSection">
                <span>메모</span>
                <div className="commentcont">
                  <textarea placeholder="필요한 메모를 입력하세요"/>
                </div>
              </div>
              <div className="buttonFooter">
                <button type="button">취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact handleContact = {handleContact} />
      {detailOn &&(
      <Modal>
        <Detail toClose={handleDetail}/>
      </Modal>
      )}
      {addOn&&(
        <Modal>
          <AddContact toClose={handleContact}/>
        </Modal>
      )}
    </>
  )
}
