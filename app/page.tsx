"use client"

import { Constellation } from "@/components/custom/constellation"

export default function Landing() {
  return <>
  <div className="w-[500px] h-[500px]">
    <img
      src="/ganesh.png"
      alt="Ganesh"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "500px",
        height: "500px",
        objectFit: "contain",
        pointerEvents: "none",
        opacity: 0.1,
      }}
    />
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
  </>
}