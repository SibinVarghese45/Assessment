import React, { useState } from 'react'
import moment from 'moment-timezone';

const NavBar = () => {

    const [CurrentDate, setCurrentDate] = useState(moment());

    const dateInfo = CurrentDate._d.toString();
    const date = dateInfo.split(" ");
    const renderingDateData = date[1] + " " + date[2] + " " + date[3];
    console.log(renderingDateData)

  return (
    <div className='nav-headSection'>
      <button>Previous Week</button>
      <p className='current-date'>{renderingDateData}</p>
      <button>Next Week</button>
    </div>
  )
}

export default NavBar;
