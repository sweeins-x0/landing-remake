// import React from "react"

// type Point = [number, number]
// type Line = [number, number]

// interface ConstellationProps {
//   points: Point[]
//   lines: Line[]
//   width?: number
//   height?: number
//   pointRadius?: number
// }

// export function Constellation({
//   points,
//   lines,
//   width = 300,
//   height = 300,
//   pointRadius = 3,
// }: ConstellationProps) {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox={`0 0 ${width} ${height}`}
//       fill="none"
//     >
//       {/* lines */}
//       {lines.map(([from, to], i) => {
//         const [x1, y1] = points[from]
//         const [x2, y2] = points[to]

//         return (
//           <line
//             key={`line-${i}`}
//             x1={x1}
//             y1={y1}
//             x2={x2}
//             y2={y2}
//             stroke="currentColor"
//             strokeWidth={1}
//             opacity={0.6}
//           />
//         )
//       })}

//       {/* points */}
//       {points.map(([x, y], i) => (
//         <circle
//           key={`point-${i}`}
//           cx={x}
//           cy={y}
//           r={pointRadius}
//           fill="currentColor"
//         />
//       ))}
//     </svg>
//   )
// }

// import React from "react"

// type Point = [number, number]
// type Line = [number, number]
// type Animation = [number, number]

// interface ConstellationProps {
//   points: Point[]
//   lines: Line[]
//   animations: Animation[]
//   width?: number
//   height?: number
//   pointRadius?: number
//   duration?: number
// }

// export function Constellation({
//   points,
//   lines,
//   animations,
//   width = 300,
//   height = 300,
//   pointRadius = 3,
//   duration = 400,
// }: ConstellationProps) {
//   const [lineStates, setLineStates] = React.useState<("idle" | "animating" | "done")[]>(
//     () => Array(lines.length).fill("idle")
//   )
//   const [progress, setProgress] = React.useState<number[]>(
//     () => Array(lines.length).fill(0)
//   )

//   React.useEffect(() => {
//     let cancelled = false
//     const completed = new Set<number>()

//     async function run() {
//       while (completed.size < animations.length) {
//         // cari semua line siap dijalankan
//         const ready = animations
//           .filter(([before, after]) => !completed.has(after))
//           .filter(([before, after]) => before === -1 || completed.has(before))
//           .map(([_, after]) => after)

//         if (ready.length === 0) {
//           await new Promise(r => setTimeout(r, 50))
//           continue
//         }

//         // set semua ready ke animating
//         setLineStates(s => {
//           const next = [...s]
//           ready.forEach(i => (next[i] = "animating"))
//           return next
//         })

//         // animate semua ready secara parallel
//         await Promise.all(ready.map(i => animate(i)))

//         // mark done
//         setLineStates(s => {
//           const next = [...s]
//           ready.forEach(i => (next[i] = "done"))
//           return next
//         })
//         ready.forEach(i => completed.add(i))
//       }
//     }

//     function animate(index: number) {
//       return new Promise<void>(resolve => {
//         const start = performance.now()
//         function frame(now: number) {
//           if (cancelled) return
//           const t = Math.min((now - start) / duration, 1)
//           setProgress(p => {
//             const next = [...p]
//             next[index] = t
//             return next
//           })
//           if (t < 1) requestAnimationFrame(frame)
//           else resolve()
//         }
//         requestAnimationFrame(frame)
//       })
//     }

//     run()
//     return () => {
//       cancelled = true
//     }
//   }, [animations, duration])

//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox={`0 0 ${width} ${height}`}
//       fill="none"
//     >
//       {lines.map(([from, to], i) => {
//         const state = lineStates[i]
//         if (state === "idle") return null
//         const t = state === "done" ? 1 : progress[i]
//         const [x1, y1] = points[from]
//         const [x2, y2] = points[to]
//         return (
//           <line
//             key={i}
//             x1={x1}
//             y1={y1}
//             x2={x1 + (x2 - x1) * t}
//             y2={y1 + (y2 - y1) * t}
//             stroke="currentColor"
//             strokeWidth={1}
//           />
//         )
//       })}

//       {points.map(([x, y], i) => (
//         <circle
//           key={i}
//           cx={x}
//           cy={y}
//           r={pointRadius}
//           fill="currentColor"
//         />
//       ))}
//     </svg>
//   )
// }

import React from "react"

type Point = [number, number]
type Line = [number, number]
type Animation = [number, number]

interface ConstellationProps {
  points: Point[]
  lines: Line[]
  animations: Animation[]
  width?: number
  height?: number
  pointRadius?: number
  speed?: number // pixel per millisecond
}

export function Constellation({
  points,
  lines,
  animations,
  width = 300,
  height = 300,
  pointRadius = 3,
  speed = 0.2, // px/ms
}: ConstellationProps) {
  const [lineStates, setLineStates] = React.useState<("idle" | "animating" | "done")[]>(
    () => Array(lines.length).fill("idle")
  )
  const [progress, setProgress] = React.useState<number[]>(
    () => Array(lines.length).fill(0)
  )

  const getLineLength = ([from, to]: Line) => {
    const [x1, y1] = points[from]
    const [x2, y2] = points[to]
    return Math.hypot(x2 - x1, y2 - y1)
  }

  React.useEffect(() => {
    let cancelled = false
    const completed = new Set<number>()

    async function run() {
      while (completed.size < animations.length) {
        const ready = animations
          .filter(([before, after]) => !completed.has(after))
          .filter(([before, _]) => before === -1 || completed.has(before))
          .map(([_, after]) => after)

        if (ready.length === 0) {
          await new Promise(r => setTimeout(r, 50))
          continue
        }

        // set semua ready ke animating tanpa merusak state line lain
        setLineStates(prev =>
          prev.map((s, i) => (ready.includes(i) ? "animating" : s))
        )

        // animate semua line ready secara paralel
        await Promise.all(ready.map(i => animate(i)))

        // mark all ready as done, tanpa merusak state line lain
        setLineStates(prev =>
          prev.map((s, i) => (ready.includes(i) ? "done" : s))
        )
        ready.forEach(i => completed.add(i))
      }
    }

    function animate(index: number) {
      const length = getLineLength(lines[index])
      const duration = length / speed
      return new Promise<void>(resolve => {
        const start = performance.now()
        function frame(now: number) {
          if (cancelled) return
          const t = Math.min((now - start) / duration, 1)
          setProgress(p => {
            const next = [...p]
            next[index] = t
            return next
          })
          if (t < 1) requestAnimationFrame(frame)
          else resolve()
        }
        requestAnimationFrame(frame)
      })
    }

    run()
    return () => {
      cancelled = true
    }
  }, [animations, speed, lines, points])

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {lines.map(([from, to], i) => {
        const state = lineStates[i]
        if (state === "idle") return null
        const t = state === "done" ? 1 : progress[i]
        const [x1, y1] = points[from]
        const [x2, y2] = points[to]
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x1 + (x2 - x1) * t}
            y2={y1 + (y2 - y1) * t}
            stroke="currentColor"
            strokeWidth={1}
          />
        )
      })}

      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={pointRadius}
          fill="currentColor"
        />
      ))}
    </svg>
  )
}
