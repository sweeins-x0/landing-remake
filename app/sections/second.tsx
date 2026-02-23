import { LeftConstellation } from "@/components/smansa/left-constellation"
import { RightConstellation } from "@/components/smansa/right-constellation"

export function Second(properties: any) {
	return <>
	<div className={`w-full h-screen ${properties.visible ? "flex" : "hidden"}`}>
		<div className="relative flex flex-col justify-center items-center w-full h-screen">
			<div className="flex flex-row justify-center items-center">
				<div className="absolute w-[10rem] h-[10rem] bg-[#3f00ff] rounded-full blur-[10rem]"></div>
				<RightConstellation visible={1} />
				<div className="bottom-10 flex flex-col items-center w-1/4 justify-center items-center gap-y-16">
					<p className="text-3xl"> Ayo menjelajah! </p>
					<div className="flex flex-col items-center justify-center gap-y-10">
						<p> SMA N 1 Purbalingga diharapkan dapat menjadi wadah siswa untuk mengembangkan kemampuan secara holistik. Sudah tahu? langsung bergabung! </p>
						<a href="">
							<div className="px-10 py-2 rounded-full bg-[#020712]">
								<p> Gabung Sekarang </p>
							</div>
						</a>
					</div>
				</div>
				<LeftConstellation visible={1} />
			</div>
			<div className="absolute bottom-0 flex flex-col gap-y-10 items-center">
				<p className="text-sm text-gray-400 text-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> Dipercaya oleh </p>
				<div className="flex flex-row h-32 bg-black"></div>
			</div>
		</div>
	</div>
	</>
}