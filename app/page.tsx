"use client"

import { useEffect, useState } from "react"

import { Constellation, ConstellationDefinition } from "@/components/custom/constellation"
import { Moon, MoonDefinition } from "@/components/custom/moon"

import { Topbar } from "@/components/smansa/topbar"
import { LeftConstellation } from "@/components/smansa/left-constellation"
import { CenterConstellation } from "@/components/smansa/center-constellation"
import { RightConstellation } from "@/components/smansa/right-constellation"

export default function Landing() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 2000)
  }, [])
  return <>
  <ConstellationDefinition />
  <MoonDefinition />
  <div className="w-full h-[400vh] bg-[#020712] overflow-y-hidden overflow-x-hidden relative">
    <div className="relative flex flex-col w-full h-screen">
      <Moon className="absolute -bottom-[5rem]" visible={visible} />
      <Topbar visible={visible} />
      <div className="flex flex-row items-center justify-center w-full h-full">
        <LeftConstellation visible={visible} />
        <CenterConstellation visible={visible} />
        <RightConstellation visible={visible} />
      </div>
      <div className={`absolute -bottom-[5rem] flex flex-row gap-x-[10rem] justify-center w-full h-[10rem] transition-opacity ease-in-out duration-1000 ${visible ? "opacity-70" : "opacity-0"}`}>
        <div className="flex flex-col h-full justify-center">
          <p className="text-white"> Dengan siswa </p>
          <p className="text-4xl text-white"> 1200+ </p>
          <p className="text-white">siswa</p>
        </div>
        <div className="flex flex-col h-full justify-center">
          <p className="text-white"> Dengan kelas </p>
          <p className="text-4xl text-white"> 36 </p>
          <p className="text-white">kelas</p>
        </div>
        <div className="flex flex-col h-full justify-center">
          <p className="text-white"> Dengan ekstrakurikuler </p>
          <p className="text-4xl text-white"> 24 </p>
          <p className="text-white">ekstrakurikuler</p>
        </div>
      </div>
    </div>
    <div className={`flex flex-row w-full h-screen ${visible ? "flex" : "hidden"}`}>
      <div className="w-[400px] h-full">
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[320, 900], [400, 1000], [300, 990]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[260, 400], [270, 490], [200, 590]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[230, 1220], [300, 1250], [260, 1340]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
      </div>
		  <div className="flex flex-row gap-x-32 items-center justify-center grow">
        <div className={`absolute w-[50rem] h-[50rem] bg-[#3f00ff] rounded-full blur-[100rem] opacity-10 z-[0]`}></div>
        <div className="w-[30rem] h-[30rem] z-[1] bg-black">
        </div>
        <div className="flex flex-col justify-center gap-y-20 w-[30rem] h-[30rem] z-[2]">
          <p className="text-lg text-white"> Tentang SMANSA </p>
          <p className="text-white"> SMA N 1 Purbalingga merupakan sekolah negeri yang didirikan sejak 16 Agustus 1961 dan beralamat di Jalan MT Haryono 58 Purbalingga </p>
          <div className="flex">
            <a href="">
              <div className="px-10 py-3 rounded-full bg-blue-600"> Gabung Sekarang </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-full">
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[300, 1280], [170, 1200], [100, 1190]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[60, 820], [30, 880], [50, 970]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
        <div className="absolute w-[400px] h-[2000px]">
          <Constellation width={400} height={2000} stars={[[250, 520], [210, 550], [240, 630]]} lines={[[0,1], [1,2]]} animations={[[-1,0], [-1,1]]}/>
        </div>
      </div>
    </div>
    <div className={`flex flex-row w-full h-screen ${visible ? "flex" : "hidden"}`}>
		  <div className="flex flex-row gap-x-32 items-center justify-center grow">
        <div className={`absolute w-[50rem] h-[50rem] bg-[#3f00ff] rounded-full blur-[100rem] opacity-10 z-[0]`}></div>
        <div className="flex flex-col justify-center gap-y-20 w-[30rem] h-[30rem] z-[2]">
          <p className="text-lg text-white"> Tentang SMANSA </p>
          <p className="text-white"> SMA N 1 Purbalingga merupakan sekolah negeri yang didirikan sejak 16 Agustus 1961 dan beralamat di Jalan MT Haryono 58 Purbalingga </p>
          <div className="flex">
            <a href="">
              <div className="px-10 py-3 rounded-full bg-blue-600"> Gabung Sekarang </div>
            </a>
          </div>
        </div>
        <div className="w-[30rem] h-[30rem] z-[1] bg-black">
        </div>
      </div>
    </div>
    <div className={`flex flex-col w-full h-screen ${visible ? "flex" : "hidden"}`}>

    </div>
    <div className={`w-full h-screen ${visible ? "flex" : "hidden"}`}>

    </div>
    <div className={`flex flex-row w-full h-screen ${visible ? "flex" : "hidden"}`}>

    </div>
  </div>
  </>
}