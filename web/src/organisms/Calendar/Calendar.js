import React from "react";
import { useState, useEffect } from "react";
import "./Calendar.scss";

export default function Calendar(props) {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/schedules")
      .then((res) => res.json())
      .then((data) => setContactList(data));
  }, []);

  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["월", "화", "수", "목", "금", "토", "일"];
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
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
    return new Date(date.getFullYear(), date.getMonth()).getDay();
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
      <div className="scrollContainer">
        <div className="content">
          <div className="contentTop">
            <i className="fas fa-bars fa-lg" />
            <div
              className="arrowButton"
              onClick={() => setDate(new Date(year, month - 1, day))}
            >
              <img src="/Images/left.svg" alt="leftarrow" />
            </div>
            <div className="dateText">
              {MONTHS[month]} {year}
            </div>
            <div
              className="arrowButton"
              onClick={() => setDate(new Date(year, month + 1, day))}
            >
              <img src="/Images/right.svg" alt="rightarrow" />
            </div>
          </div>
          <div className="calendarBody">
            {DAYS_OF_THE_WEEK.map((d) => (
              <div className="week" key={d}>
                <strong>{d}</strong>
              </div>
            ))}
            {Array(42)
              .fill(null)
              .map((_, i) => {
                const d = i - (fixStartDay - 1);
                if (i > days[month] + (fixStartDay - 1)) {
                  return (
                    <div
                      className="day"
                      style={{
                        display:
                          i >=
                          days[month] +
                            (fixStartDay - 1) +
                            (7 - ((days[month] + (fixStartDay - 1)) % 7))
                            ? "none"
                            : null,
                      }}
                    ></div>
                  );
                }
                return (
                  <div className="day" key={i}>
                    <p class="dayText">{d > 0 ? d : ""}</p>

                    {contactList.map((item, index) => {
                      const split = parseInt(item.date.substr(8, 2));
                      const time = item.date.substr(11, 5);
                      const monthNum = parseInt(item.date.substr(6, 1));
                      return (
                        <div key={index}>
                          <span className="timeText">
                            {d === split && month + 1 === monthNum ? time : ""}
                          </span>
                          <p className="titleText" onClick={props.handleDetail}>
                            {d === split && month + 1 === monthNum
                              ? item.title
                              : ""}
                          </p>
                        </div>
                      );
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
