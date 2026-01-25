import { Constellation } from "@/components/custom/constellation"

export default function Landing() {
  return <>
  <div className="w-40">
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
        pointerEvents: "none", // biar klik nggak ngeblok Constellation
      }}
    />
    <Constellation
      points={[

        // Head
        [150, 60],   // 0 crown top
        [110, 90],   // 1 left forehead
        [190, 90],   // 2 right forehead
        [90, 130],   // 3 left head
        [210, 130],  // 4 right head

        // Ears
        [50, 140],   // 5 left ear outer
        [80, 160],   // 6 left ear inner
        [250, 140],  // 7 right ear outer
        [220, 160],  // 8 right ear inner

        // Eyes
        [130, 120],  // 9 left eye
        [170, 120],  // 10 right eye

        // Trunk (belalai melengkung)
        [150, 150],  // 11 trunk start
        [145, 180],  // 12 trunk mid
        [160, 210],  // 13 trunk curve
        [150, 240],  // 14 trunk end

        // Legs (lebih melebar)
        [120, 280],  // 15 left leg
        [180, 280],  // 16 right leg
      ]}
      lines={[
        // Head outline
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 4],

        // Ears
        [3, 5],
        [5, 6],
        [4, 7],
        [7, 8],

        // Eyes
        [1, 9],
        [2, 10],

        // Trunk
        [11, 12],
        [12, 13],
        [13, 14],

      ]}
    />
  </div>
  </>
}