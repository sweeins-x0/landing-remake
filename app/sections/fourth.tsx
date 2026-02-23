import { GraduationCap, IdCard } from "lucide-react"

export function Fourth(properties: any) {
	return <>
	<div className={`w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
		<div className="relative flex flex-col justify-center gap-y-20 w-full h-full px-40 py-32">
			<div className="absolute w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-50"></div>
			<div className="absolute bottom-0 right-0 w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-50"></div>
			<div className="flex flex-row w-full">		
				<div className="w-1/2 flex justify-start">
					<p className="text-2xl">
						Fitur-Fitur Khusus SMA N 1 Purbalingga
					</p>
				</div>
				<div className="w-1/2 flex justify-end">
					<div className="w-1/2">
						<p className="text-sm"> SMA N 1 Purbalingga dilengkapi dengan fasilitas modern yang selalu diperbarui dan dipelihara dengan bijak. </p>
					</div>
				</div>
			</div>
			<div className="flex flex-row w-full h-full p-20 bg-gray-900/70 rounded-4xl border border-gray-800">
				<div className="flex items-center w-1/2">
					<div className="flex flex-col gap-y-10 w-[70%]">
						<p className="text-2xl !text-shadow-none !text-gray-200"> Moderninasi </p>
						<p className="!text-shadow-none !text-gray-200"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis labore rerum quis ex sunt perferendis ut non quas adipisci iste? Esse doloribus rem sint ipsum pariatur dicta et ipsa illo. </p>
					</div>
				</div>
				<div className="flex flex-col gap-y-5 w-1/2">
					<div className="flex flex-row items-center gap-x-10 h-1/3 p-8 bg-gray-900/70 border border-gray-800 rounded-2xl">
						<GraduationCap className="text-gray-400 h-full aspect-square" size={50} />
						<div className="flex flex-col gap-y-1">
							<p className="text-lg 	!text-shadow-none !text-gray-200"> Electronic Class </p>
							<p className="text-sm !text-shadow-none !text-gray-200"> Mempermudah pemberian materi dan penugasan dengan ElSmansa. </p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-x-10 h-1/3 p-8 bg-gray-900/70 border border-gray-800 rounded-2xl">
						<IdCard className="text-gray-400 h-full aspect-square" size={50} />
						<div className="flex flex-col gap-y-1">
							<p className="text-lg 	!text-shadow-none !text-gray-200"> Electronic Presence </p>
							<p className="text-sm !text-shadow-none !text-gray-200"> Menciptakan sistem presensi yang efektif, efisien, dan akurat. </p>
						</div>
					</div>
					<div className="h-1/3 bg-gray-900/70 border border-gray-800 rounded-2xl"></div>
				</div>
			</div>
		</div>
	</div>
	</>
}