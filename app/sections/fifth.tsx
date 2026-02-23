export function Fifth(properties: any) {
	return <>
	<div className={`w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
		<div className="relative flex flex-col items-center gap-y-20 w-full h-full px-96 py-32">
			<div className="absolute top-0 left-0 w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-70"></div>
			<div className="absolute bottom-0 right-0 w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem] opacity-50"></div>
			<p className="text-2xl">
				Bagaimana pendapat orang lain?
			</p>
			<div className="flex flex-row w-full h-full p-20 bg-gray-900/70 rounded-4xl border border-gray-800">
				
			</div>
		</div>
	</div>
	</>
}