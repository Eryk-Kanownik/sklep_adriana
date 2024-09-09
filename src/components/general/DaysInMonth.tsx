import React from "react";

const DaysInMonth = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = [];
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(new Date(year, month, day));
  }
  return (
    <div>
      <h2>
        Dni w miesiącu: {today.toLocaleString("default", { month: "long" })}{" "}
        {year}
      </h2>
      <ul className="grid grid-cols-7 gap-2">
        {daysArray.map((date, index) => (
          <li className="border-[1px] rounded-md aspect-square p-2" key={index}>
            {date.getDate()}
            <div>Hello</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysInMonth;
