import React from 'react';
import { useState, useEffect } from 'react';
import Contact from '../Contact/Contact';
import './Calendar.scss';

export default function Calendar() {
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


  return (
      <div className="calendarContainer">
        <Contact/>
        <div className="scrollContainer">
          <div className="content">
            <div className="contentTop">
              <i className="fas fa-bars fa-lg"/>
              <div className="arrowButton" onClick={() => setDate(new Date(year, month - 1, day))}>
              <i className="fas fa-arrow-alt-circle-left fa-lg"/>
              </div>
              <div className="dateText">
              {MONTHS[month]} {year}
              </div>
              <div className="arrowButton" onClick={() => setDate(new Date(year, month + 1, day))}>
              <i className="fas fa-arrow-alt-circle-right fa-lg"/>
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
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
  );
}
