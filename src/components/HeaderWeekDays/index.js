import React from "react";
import "./index.css";

const plWeekdaysMap = new Map();
plWeekdaysMap.set("Monday", "Poniedziałek");
plWeekdaysMap.set("Tuesday", "Wtorek");
plWeekdaysMap.set("Wednesday", "Środa");
plWeekdaysMap.set("Thursday", "Czwartek");
plWeekdaysMap.set("Friday", "Piątek");
plWeekdaysMap.set("Saturday", "Sobota");
plWeekdaysMap.set("Sunday", "Niedziela");

const headerWeekDays = props => (
  <header className="weekdays">
    {props.days.map((weekday, i) => (
      <strong key={i}>{plWeekdaysMap.get(weekday)}</strong>
    ))}
  </header>
);

export default headerWeekDays;
