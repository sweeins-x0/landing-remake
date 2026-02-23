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
  <div className="w-full h-full bg-[#020712] overflow-x-hidden relative">
    <div className="relative flex flex-col w-full h-screen">
      <Moon className="absolute -bottom-[5rem]" visible={visible} />
      <Topbar visible={visible} />
      <div className="flex flex-row items-center justify-center w-full h-full">
        <LeftConstellation visible={visible} />
        <CenterConstellation visible={visible} />
        <RightConstellation visible={visible} />
      </div>
      <div className={`absolute -bottom-[10rem] flex flex-col gap-y-10 w-full items-center transition-opacity ease-in-out duration-1000 ${visible ? "opacity-70" : "opacity-0"}`}>
        <div className={`flex flex-row gap-x-[10rem] justify-center w-full h-[10rem]`}>
          <div className="flex flex-col h-full justify-center">
            <p className="text-glow-neon"> Dengan siswa </p>
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
        <p className="text-white">SMA N 1 Purbalingga Profile</p>
      </div>
    </div>
    <div className={`relative flex items-center justify-center w-full h-screen ${visible ? "flex" : "hidden"}`}>
      <div className="flex flex-row justify-center">
    		<div className={`absolute w-[10rem] h-[10rem] bg-white rounded-full blur-[10rem] transition-opacity ease-in-out duration-1000 ${visible ? "opacity-[0.7]" : "opacity-0"}`}></div>
        <RightConstellation visible={visible} />
        <div className="relative bottom-10 flex flex-col items-center w-1/4 justify-center gap-y-20">
          <p className="text-5xl text-gray-300 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> Ayo menjelajah! </p>
          <div className="flex flex-col items-center justify-center gap-y-10">
            <p className="text-center text-gray-300 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> SMA N 1 Purbalingga diharapkan dapat menjadi wadah siswa untuk mengembangkan kemampuan secara holistik. Sudah tahu? langsung bergabung! </p>
            <a href="">
              <div className="px-10 py-2 rounded-full bg-[#020712]">
                <p className="text-gray-300 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> Gabung Sekarang </p>
              </div>
            </a>
          </div>
        </div>
        <LeftConstellation visible={visible} />
      </div>
      <div className="absolute bottom-0 flex flex-col gap-y-10 items-center">
        <p className="text-sm text-gray-400 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> Dipercaya oleh </p>
        <div className="flex flex-row h-32 bg-black"></div>
      </div>
    </div>
    <div className={`w-full min-h-screen bg-[#020712] z-1 ${visible ? "flex" : ""}`}>
      <div className="flex flex-row w-full p-20">
        <div className="absolute w-1/5">
          <p className="text-black"> Visi Sekolah </p>
        </div>
        <div className="w-4/5">

        </div>
      </div>
    </div>
    {/* <div className={`w-full h-screen ${visible ? "flex" : "hidden"}`}> */}
    {/* </div> */}
    {/* <div className={`flex flex-row w-full h-screen ${visible ? "flex" : "hidden"}`}> */}
    {/* </div> */}
  </div>
  </>
}