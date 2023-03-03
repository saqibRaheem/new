import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar(props:any) {
  return (
    <div>
        <div className="w-24 flex ">

          <CircularProgressbar  strokeWidth={5} value={props.per} text={`${props.per}%`}   styles={buildStyles({
          textColor: "#075985",
          pathColor: "#075985",
        //   trailColor: "yellow"
        })}/>
      </div>

    </div>
  )
}

export default ProgressBar