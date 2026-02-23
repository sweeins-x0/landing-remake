"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Sixth({ visible }: any) {

  const [data, setData] = useState<any[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/faq")
      .then(res => res.json())
      .then(res => setData(Array.isArray(res) ? res : []))
  }, [])

  return (
    <div className={`relative w-full h-screen ${visible ? "flex" : "hidden"}`}>
      <div className="flex flex-col gap-y-20 w-full h-full p-40 bg-gray-900/70">

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-[15rem] h-[15rem] bg-[#3f00ff] rounded-full blur-[12rem] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[15rem] h-[15rem] bg-[#3f00ff] rounded-full blur-[12rem] opacity-40"></div>

        <p className="text-3xl text-center">
          Frequently Asked Questions
        </p>

        <div className="flex flex-col gap-y-6 w-2/3 mx-auto">

          {data.map((item, index) => {

            const isOpen = openIndex === index

            return (
              <div
                key={item.id}
                className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">
                    {item.question}
                  </p>
                  <span className="text-white">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-300 mt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}