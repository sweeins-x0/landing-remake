"use client"

import { useRouter } from "next/navigation"

export default function AdminPage() {
	const router = useRouter()

	const handleLogout = async () => {
		await fetch("/api/logout", { method: "POST" })
		router.push("/login")
	}

	return (
		<div className="p-10">
			<h1 className="text-2xl font-bold">Admin Panel</h1>
			<button
				onClick={handleLogout}
				className="mt-4 bg-red-500 text-white px-4 py-2"
			>
				Logout
			</button>
		</div>
	)
}