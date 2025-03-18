import React from 'react'
import CountUp from "react-countup";

function Counter({value,Data}) {
  return (
   <div className="text-center flex justify-center items-center flex-col mt-6">
        <CountUp start={0} end={value} delay={0} duration={3} suffix="+">
          {({ countUpRef }) => <span className="text-4xl text-[#29ab87] font-bold" ref={countUpRef}></span>}
        </CountUp>
        <h2 className="text-2xl font-semibold text-[#29ab87]">{Data}</h2>
      </div>
  )
}

export default Counter
