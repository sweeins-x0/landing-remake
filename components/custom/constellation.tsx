import React from "react"

type Point = [number, number]
type Line = [number, number]

interface ConstellationProps {
  points: Point[]
  lines: Line[]
  width?: number
  height?: number
  pointRadius?: number
}

export function Constellation({
  points,
  lines,
  width = 300,
  height = 300,
  pointRadius = 3,
}: ConstellationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* lines */}
      {lines.map(([from, to], i) => {
        const [x1, y1] = points[from]
        const [x2, y2] = points[to]

        return (
          <line
            key={`line-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.6}
          />
        )
      })}

      {/* points */}
      {points.map(([x, y], i) => (
        <circle
          key={`point-${i}`}
          cx={x}
          cy={y}
          r={pointRadius}
          fill="currentColor"
        />
      ))}
    </svg>
  )
}
