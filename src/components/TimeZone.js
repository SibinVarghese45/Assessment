import React, { useState } from 'react'
import TimeTable from './TimeTable';

const TimeZone = () => {

    const timezone = [
        {
            value: 'UTC', text: 'UTC'
        },
        {
            value: 'America/New_York', text: 'America/New_York'
        }
    ]

    const [selectedZone, setselectedZone] = useState(timezone[0].value);

    function changeHandler(e){
        setselectedZone(e.target.value)
        console.log(e.target.value)
    }


  return (
    <div className='timezone'>
      <label>Timezone:</label>
        <select value={selectedZone} name="timezone-options" id="timezone-options" onChange={changeHandler}> 
            {/* <option value="rigatoni">UTC</option> 
            <option value="rigatoni">UTC</option>  */}
            {
                timezone.map((time) => {
                    return <option key={time.value} value={time.value}>{time.text}</option>
                })
            }
        </select>

        <TimeTable selectedZone={selectedZone}></TimeTable>

    </div>
  )
}

export default TimeZone
