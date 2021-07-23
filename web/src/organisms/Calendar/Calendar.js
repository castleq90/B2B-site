import React from 'react';
import { useState, useEffect } from 'react';
// import Contact from '../Contact/Contact';
import './Calendar.scss';

export default function Calendar(props) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['월', '화', '수', '목', '금', '토', '일'];
  const MONTHS = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth() {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }
  function isLeapYear() {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  let fixStartDay = 0;

  if (startDay - 1 < 0) {
    fixStartDay = 6;
  } else {
    fixStartDay = startDay - 1;
  }


  const TEXT = [
    {
      date:"2021-07-02T07:05:00",
      title:"오후 미팅"
    },
    {
      date:"2021-07-03T07:08:00",
      title:"고객면담"
    },
    {
      date:"2021-07-04T07:13:00",
      title:"데일리 미팅"
    },
    {
      date:"2021-07-04T07:40:00",
      title:"데일리 미팅2"
    },
  ]

  return (
      <div className="calendarContainer">
        {/* <Contact/> */}
        <div className="scrollContainer">
          <div className="content">
            <div className="contentTop">
              <i className="fas fa-bars fa-lg"/>
              <div className="arrowButton" onClick={() => setDate(new Date(year, month - 1, day))}>
              <img src="/Images/left.svg" alt="leftarrow"/>
              </div>
              <div className="dateText">
              {MONTHS[month]} {year}
              </div>
              <div className="arrowButton" onClick={() => setDate(new Date(year, month + 1, day))}>
              <img src="/Images/right.svg" alt="rightarrow"/>
              </div>
            </div>
            <div className="calendarBody">
            {DAYS_OF_THE_WEEK.map(d => (
              <div className="week" key={d}>
              <strong>{d}</strong>
              </div>
            ))}
            {Array(days[month] + (fixStartDay))
            .fill(null)
            .map((_, index) => {
            const d = index - (fixStartDay -1);
            return (
              <div className="day"
                key={index}
              >
                <p class="dayText">{d > 0 ? d : ''}</p>
              {TEXT.map((item,index)=>{
                const split = parseInt(item.date.substr(9,1))
                const time = item.date.substr(11,5)
                const monthNum = parseInt(item.date.substr(6,1))
                return(
                  <div>
                  <span key={index} className="timeText" >{d===split&&(month+1)===monthNum ? time : ''}</span>
                  <p className="titleText" onClick={props.handleDetail}>{d===split&&(month+1)===monthNum ? item.title : ''}</p>
                  </div>
                )
              })}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
  );
}
