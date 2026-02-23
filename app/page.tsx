"use client"

import { useEffect, useState } from "react"

import { MoonDefinition } from "@/components/custom/moon"
import { ConstellationDefinition } from "@/components/custom/constellation"

import { First } from "@/app/sections/first"
import { Second } from "@/app/sections/second"
import { Third } from "@/app/sections/third"
import { Fourth } from "@/app/sections/fourth"
import { Fifth } from "@/app/sections/fifth"

export default function Landing() {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setTimeout(() => setVisible(true), 2000)
	}, [])
	return <>
	<ConstellationDefinition />
	<MoonDefinition />
	<div className="w-full h-full bg-[#020712] relative overflow-hidden">
		<First visible={visible} />
		{/* <Second visible={visible} /> */}
		{/* <Third visible={visible} /> */}
		{/* <Fourth visible={visible} /> */}
		{/* <Fifth visible={visible} /> */}
	</div>
	</>
}