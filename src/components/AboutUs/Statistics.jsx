import React from 'react'
import Counter from "@/components/Counter";

const Statistics = () => {
  return (
    <div className=' bg-[#ECF0EA] mx-auto'>

<div className="flex justify-around  container mx-auto my-20 py-20">
          <Counter value={"1900"} Data={"Students"} />
          <Counter value={"100"} Data={"Meetups in 3 Months"} />
          <Counter value={"200"} Data={"Satisfied Clients"} />
          <Counter
            value={"20"}
            Data={"Fullfilment Centers In US, UK and Aus"}
            />
            </div>
        </div>  )
}

export default Statistics