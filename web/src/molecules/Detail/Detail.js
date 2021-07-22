import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button'
import './Detail.scss'

export default function Detail(props) {
  return (
    <div className="detailContainer">
      <div className="detailWrapper">
        <div className="detailBox">
          <header>
            <h4>
              <Link to ="#" className="addText">추가</Link>
              <button onClick={props.toClose}>
                <i className="fas fa-times"/>
              </button>
            </h4>
          </header>
          <div className="contentContainer">
            <div classname="contentWrapper">
              <dt>일시</dt>
              <dd className="dateContainer">
                <span className="dateSpace">
                2021.07.08 
                오전 11:00 - 오후 12:00 
                </span>
              </dd>
              <dt>고객정보</dt>
              <dd className="infoContent">
                <span>이름 :</span><span>오선주</span>
                <span>회사명 :</span><span>위코드</span>
                <span>부서명 : </span><span>국내영업부</span>
              </dd>
              <dt>메모</dt>
              <dd className="memoContainer">
                <div className="memoContent">
                  "설명이다"
                  <br/>
                  "설명이다2라라라라라"
                </div>
              </dd>
            </div>
          </div>
          <div className="footerContainer">
            <Button>
              <strong>삭제</strong>
            </Button>
            <Button>
              수정
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
