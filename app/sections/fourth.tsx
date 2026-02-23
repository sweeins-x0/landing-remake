"use client"

import { useEffect, useState } from "react"
import { GraduationCap, IdCard, BookOpen, Monitor } from "lucide-react"

const iconMap: any = {
  "graduation-cap": GraduationCap,
  "id-card": IdCard,
  "book-open": BookOpen,
  "monitor": Monitor
}

export function Fourth(properties: any) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch("/api/features")
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  if (!data) return null

  const { section, features } = data
  console.log(features)

  return (
    <div className={`w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
      <div className="relative flex flex-col justify-center gap-y-20 w-full h-full px-40 py-32">

        {/* Background blur */}
        <div className="absolute w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-50"></div>

        {/* Header */}
        <div className="flex flex-row w-full">
          <div className="w-1/2 flex justify-start">
            <p className="text-2xl">
              {section?.title}
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-1/2">
              <p className="text-sm">
                {section?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex flex-row w-full h-full p-20 bg-gray-900/70 rounded-4xl border border-gray-800">

          {/* Highlight */}
          <div className="flex items-center w-1/2">
            <div className="flex flex-col gap-y-10 w-[70%]">
              <p className="text-2xl !text-shadow-none !text-gray-200">
                {section?.highlight_title}
              </p>
              <p className="!text-shadow-none !text-gray-200">
                {section?.highlight_description}
              </p>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-y-5 w-1/2">
            {features.map((item: any) => {
              const IconComponent = iconMap[item.icon] || Monitor

              return (
                <div
                  key={item.id}
                  className="flex flex-row items-center gap-x-10 h-1/3 p-8 bg-gray-900/70 border border-gray-800 rounded-2xl"
                >
                  <IconComponent
                    className="text-gray-400 h-full aspect-square"
                    size={50}
                  />

                  <div className="flex flex-col gap-y-1">
                    <p className="text-lg !text-shadow-none !text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-sm !text-shadow-none !text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}