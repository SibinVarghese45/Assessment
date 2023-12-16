import React from 'react'
import data from '../data'

const TimeTable = () => {

    const weekdays = [
        'Wednesday',
        'Thursday',
        'Friday'
    ]

    var arrTime = ['08:00 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', 
    '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
     '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
     '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM',
      '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM']

    const startTime = "08:00 AM";
    const endTime = "11:00 PM";

    const start = new Date("2000-01-01 " + startTime);
    const end = new Date("2000-01-01 " + endTime);

    // Set the initial time
    let currentTime = new Date(start);

    // Define the time interval (30 minutes)
    const interval = 30 * 60 * 1000; // 30 minutes in milliseconds
    var a;

    // Print times every 30 minutes until end time is reached
    while (currentTime <= end) {
        // console.log(currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
        // console.log(currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
        arrTime.push(currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
        // console.log(arrTime)
        currentTime.setTime(currentTime.getTime() + interval);
    }

    console.log(data)

  return (
    <div className='timetable'>
        <div className='day-time'>
            <table className='table'>
                <tr key="">
                    <td className='weekday'>Monday</td>
                    <td>Pass</td>
                </tr>
                <tr key="">
                    <td className='weekday'>Tuesday</td>
                    <td>Pass</td>
                </tr>
                {/* <tr key="">
                    
                        {
                            weekdays.map((day) => (
                                <td><p>{{day}}</p></td>
                                arrTime.map( time => (
                                    <td>{{time}}</td>
                                ))
                            ))
                        }
                    
                </tr> */}
      {weekdays.map((day) => (
        <tr className=''>
          <td className='weekday'>{`${day}`}</td>
          <td className=''>
            {
                arrTime.map((innerItem) => (
                    
                    data.map((date) => (
                        console.log(date, innerItem),
                        date.Time === innerItem ? (
                            <td className='checkbox-time' key={innerItem}><span className='info'>{date.Id} {date.Name}</span><input type='checkbox'></input>{`${innerItem}`}</td>
                        ) : (
                            <td  className='checkbox-time' key={innerItem}><input type='checkbox'></input>{`${innerItem}`}</td>
                        )
                    ))
                ))
            }
          </td>
        </tr>
      ))}
        </table>
    </div>
</div>
  )
}

export default TimeTable
