"use client"

import { useEffect, useState } from "react"
import { LeftConstellation } from "@/components/smansa/left-constellation"
import { RightConstellation } from "@/components/smansa/right-constellation"

export function Second(properties: any) {
  const [about, setAbout] = useState<any>(null)
  const [trusted, setTrusted] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/about")
      .then(res => res.json())
      .then(data => setAbout(data))

    fetch("/api/trusted")
      .then(res => res.json())
      .then(data => setTrusted(data))
  }, [])

  if (!about) return null

  return (
    <div className={`w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
      <div className="relative flex flex-col justify-center items-center w-full h-screen">

        <div className="flex flex-row justify-center items-center">
          <div className="absolute w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem]"></div>

          <RightConstellation visible={1} />

          <div className="flex flex-col items-center w-1/4 gap-y-16 text-center">
            <p className="text-3xl">
              {about.title}
            </p>

            <div className="flex flex-col items-center gap-y-10">
              <p>
                {about.description}
              </p>

              <a href="#">
                <div className="px-10 py-2 rounded-full bg-[#020712] hover:bg-[#3f00ff] transition duration-300">
                  <p>Gabung Sekarang</p>
                </div>
              </a>
            </div>
          </div>

          <LeftConstellation visible={1} />
        </div>

        <div className="absolute bottom-0 flex flex-col gap-y-8 items-center w-full overflow-hidden pb-10">

          <p className="text-sm text-gray-400 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Dipercaya oleh
          </p>

          <div className="relative w-full overflow-hidden">

            {/* Gradient Fade kiri */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>

            {/* Gradient Fade kanan */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

            <div className="flex gap-20 whitespace-nowrap animate-scroll-trusted">

              {[...trusted, ...trusted].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[200px] h-20 bg-gray-900/70 border border-gray-800 rounded-xl px-6"
                >
                  <img
                    src={item.logo_url}
                    alt={item.name}
                    className="h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}