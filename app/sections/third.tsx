import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Third(properties: any) {
	const [carousel, setCarousel] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setCarousel(prev => (prev + 1) % 6)
		}, 10000)
		return () => clearInterval(interval)
	}, [carousel])
	return <>
	<div className={`relative w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
		<div className="absolute bottom-1/6 left-1/5 w-[20rem] h-[20rem] bg-[#3f00ff] rounded-full blur-[20rem] opacity-20"></div>
		<div className="flex flex-row gap-x-40 w-full h-full p-40 bg-gray-900/70">
			<div className="flex flex-row w-1/2">
				<div className="flex flex-col w-1/2">
					<div className="flex h-1/2">
						<p className="un text-3xl"> Sejarah SMA N 1 Purbalingga </p>
					</div>
					<div className="flex flex-row items-end h-1/2">
						<div className="flex flex-col gap-y-5 w-1/2">
							<div onClick={() => setCarousel(0)}>
								<p className={`un ${carousel === 0 ? "!text-white font-medium" : ""}`}> 1961 </p>
							</div>
							<div onClick={() => setCarousel(1)}>
								<p className={`un ${carousel === 1 ? "!text-white font-medium" : ""}`}> 1970 </p>
							</div>
							<div onClick={() => setCarousel(2)}>
								<p className={`un ${carousel === 2 ? "!text-white font-medium" : ""}`}> 1980 </p>
							</div>
							<div onClick={() => setCarousel(3)}>
								<p className={`un ${carousel === 3 ? "!text-white font-medium" : ""}`}> 1990 </p>
							</div>
							<div onClick={() => setCarousel(4)}>
								<p className={`un ${carousel === 4 ? "!text-white font-medium" : ""}`}> 2000 </p>
							</div>
							<div onClick={() => setCarousel(5)}>
								<p className={`un ${carousel === 5 ? "!text-white font-medium" : ""}`}> 2026 </p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-5 justify-end items-end w-1/2">
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={carousel}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col gap-y-5 justify-end items-end w-1/2"
						>
							<motion.p
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -40, opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="un text-xl text-end font-medium"
							>
								Slide {carousel}
							</motion.p>

							<motion.p
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -40, opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="un text-end"
							>
								Lorem ipsum dolor sit amet.
							</motion.p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			<div className="relative w-1/2">
				<div className={`absolute w-full h-full rounded-2xl bg-red-500 transition-opacity duration-1000 ease-in-out ${carousel === 0 ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`absolute w-full h-full rounded-2xl bg-blue-500 transition-opacity duration-1000 ease-in-out ${carousel === 1 ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`absolute w-full h-full rounded-2xl bg-green-500 transition-opacity duration-1000 ease-in-out ${carousel === 2 ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`absolute w-full h-full rounded-2xl bg-yellow-500 transition-opacity duration-1000 ease-in-out ${carousel === 3 ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`absolute w-full h-full rounded-2xl bg-purple-500 transition-opacity duration-1000 ease-in-out ${carousel === 4 ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`absolute w-full h-full rounded-2xl bg-pink-500 transition-opacity duration-1000 ease-in-out ${carousel === 5 ? "opacity-100" : "opacity-0"}`}></div>
			</div>
		</div>
	</div>
	</>
}