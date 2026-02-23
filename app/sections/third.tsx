import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Third(properties: any) {
	const [carousel, setCarousel] = useState(0)
	const [historyData, setHistoryData] = useState<any[]>([])

	useEffect(() => {
		fetch("/api/history")
			.then(res => res.json())
			.then(data => setHistoryData(data))
	}, [])

	useEffect(() => {
		if (historyData.length === 0) return

		const interval = setInterval(() => {
			setCarousel(prev => (prev + 1) % historyData.length)
		}, 10000)

		return () => clearInterval(interval)
	}, [historyData])

	return (
		<div className={`relative w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
			<div className="flex flex-row gap-x-40 w-full h-full p-40 bg-gray-900/70">

				{/* LEFT SIDE */}
				<div className="flex flex-row w-1/2">
					<div className="flex flex-col w-1/2">
						<div className="flex h-1/2">
							<p className="un text-3xl">
								Sejarah SMA N 1 Purbalingga
							</p>
						</div>

						<div className="flex flex-col gap-y-5">
							{historyData.map((item, index) => (
								<div key={item.id} onClick={() => setCarousel(index)}>
									<p className={`un ${carousel === index ? "!text-white font-medium" : ""}`}>
										{item.year}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* TEXT CONTENT */}
					<div className="flex flex-col gap-y-5 justify-end items-end w-1/2">
						<AnimatePresence mode="wait">
							{historyData[carousel] && (
								<motion.div
									key={historyData[carousel].id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<motion.p
										initial={{ y: 40, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -40, opacity: 0 }}
										className="un text-xl text-end font-medium"
									>
										{historyData[carousel].title}
									</motion.p>

									<motion.p
										initial={{ y: 40, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -40, opacity: 0 }}
										transition={{ delay: 0.2 }}
										className="un text-end"
									>
										{historyData[carousel].content}
									</motion.p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* IMAGE SIDE */}
				<div className="relative w-1/2">
					{historyData.map((item, index) => (
						<img
							key={item.id}
							src={item.image_url}
							className={`absolute w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
								carousel === index ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
				</div>

			</div>
		</div>
	)
}