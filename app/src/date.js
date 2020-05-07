import React from 'react';

const Data = () =>{
    let date = new Date();
    let day = date.getDate();
    let month = ["Января","Февраля", "Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    let year = date.getFullYear();
    return (
      <div className="show-time">
        <p>
          {day} {month[date.getMonth()]} {year}
        </p>
      </div>
    );
}

export default Data;