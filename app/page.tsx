"use client"

import { useEffect, useState } from "react"
import { Constellation } from "@/components/custom/constellation"
import Ganesh from "@/public/ganesh.svg"

export default function Landing() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])
  return <>
  <div className="w-full bg-[#04060E]">
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-screen absolute flex items-center justify-center">
        <div className="w-[500px] h-[500px] relative right-[500px]">
          <Constellation points={[[100, 100], [170, 160], [180, 190]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
        <div className={`absolute left-[-15rem] w-[30rem] h-[30rem] rounded-full bg-white blur-[100rem] transition-opacity delay-2800 duration-700 ${visible ? "opacity-[0.05]" : "opacity-0"}`}></div>
        <div className={`absolute right-[-15rem] w-[30rem] h-[30rem] rounded-full bg-white blur-[100rem] transition-opacity delay-2800 duration-700 ${visible ? "opacity-[0.05]" : "opacity-0"}`}></div>
        <div className={`absolute w-[50rem] h-[50rem] rounded-full bg-white blur-[100rem] transition-opacity delay-2800 duration-700 ${visible ? "opacity-[0.05]" : "opacity-0"}`}></div>
      </div>
      <div className="w-[500px] h-[500px]">
        <Ganesh fill="white" width={500} height={500} className={`absolute transition-opacity delay-2800 duration-700 ${visible ? "opacity-50" : "opacity-0"}`} />
        <Constellation
          points={[
            [250, 80],
            [200, 140],
            [300, 140],
            [250, 250],
            [150, 320],
            [350, 320],
            [120, 250],
            [380, 250],
            [250, 380],
            [150, 400],
            [350, 400],
          ]}
          lines={[
            [0,1],
            [0,2],
            [1,3],
            [2,3],
            [3,4],
            [3,5],
            [4,6],
            [5,7],
            [4,8],
            [5,8],
            [8,9],
            [8,10],
          ]}
          animations={[
            [-1,0],
            [-1,1],
            [0,2],
            [1,3],
            [2,4],
            [3,5],
            [4,6],
            [5,7],
            [4,8],
            [5,9],
            [8,10],
            [9,11],
          ]}
          width={500}
          height={500}
          speed={0.2}
        />
      </div>
    </div>
  </div>
  </>
}