import { Topbar } from "@/components/smansa/topbar"
import { LeftConstellation } from "@/components/smansa/left-constellation"
import { CenterConstellation } from "@/components/smansa/center-constellation"
import { RightConstellation } from "@/components/smansa/right-constellation"
import { Moon } from "@/components/custom/moon"

export function First(properties: any) {
	return <>
	<div className="w-full h-screen">
		<div className="relative flex flex-col w-full h-full">
			<Moon className="absolute -bottom-[5rem]" visible={properties.visible} />
			<Topbar visible={properties.visible} />
			<div className="flex flex-row items-center justify-center w-full h-full">
				<LeftConstellation visible={properties.visible} />
				<CenterConstellation visible={properties.visible} />
				<RightConstellation visible={properties.visible} />
			</div>
			<div className={`absolute -bottom-[10rem] flex flex-col gap-y-10 w-full items-center transition-opacity ease-in-out duration-1000 ${properties.visible ? "opacity-70" : "opacity-0"}`}>
				<div className={`flex flex-row gap-x-[10rem] justify-center w-full h-[10rem]`}>
					<div className="flex flex-col h-full justify-center">
						<p> Dengan siswa </p>
						<p className="text-4xl"> 1200+ </p>
						<p>siswa</p>
					</div>
					<div className="flex flex-col h-full justify-center">
						<p> Dengan kelas </p>
						<p className="text-4xl"> 36 </p>
						<p>kelas</p>
					</div>
					<div className="flex flex-col h-full justify-center">
						<p> Dengan ekstrakurikuler </p>
						<p className="text-4xl"> 24 </p>
						<p>ekstrakurikuler</p>
					</div>
				</div>
				<p>SMA N 1 Purbalingga Profile</p>
			</div>
		</div>
	</div>
	</>
}