"use client"

import { useEffect, useState } from "react"

export function Fifth({ visible }: any) {

  const [comments, setComments] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/comments")
      .then(res => res.json())
      .then(data => {
        setComments(Array.isArray(data) ? data : [])
      })
  }, [])

  if (!comments.length) return null

  const triple = [...comments, ...comments, ...comments]

  return (
    <div className={`w-full h-screen ${visible ? "flex" : "hidden"}`}>
      <div className="relative flex flex-col items-center gap-y-20 w-full h-full py-32 overflow-hidden">

        <p className="text-2xl">
          Bagaimana pendapat orang lain?
        </p>

        <div className="flex flex-col gap-y-10 w-full">

          {/* ROW 1 → */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee-right">
              {triple.map((item, i) => (
                <CommentCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* ROW 2 ← */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee-left">
              {triple.map((item, i) => (
                <CommentCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* ROW 3 → */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee-right">
              {triple.map((item, i) => (
                <CommentCard key={i} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function CommentCard({ item }: any) {
  return (
    <div className="min-w-[300px] p-6 bg-gray-900/70 border border-gray-800 rounded-2xl">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.avatar_url}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="font-medium">{item.name}</p>
      </div>
      <p className="text-sm text-gray-300">
        {item.comment}
      </p>
    </div>
  )
}