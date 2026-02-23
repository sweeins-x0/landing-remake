"use client"

import { useEffect, useState } from "react"

export default function AdminAbout() {
	const [form, setForm] = useState({
		title: "",
		description: "",
	})

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("/api/about")
			.then(res => res.json())
			.then(data => {
				if (data) {
					setForm({
						title: data.title,
						description: data.description,
					})
				}
				setLoading(false)
			})
	}, [])

	const handleSave = async () => {
		await fetch("/api/about", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		})

		alert("Berhasil disimpan!")
	}

	if (loading) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				Loading...
			</div>
		)
	}

	return (
		<div className="p-20 flex flex-col gap-6 w-1/2">
			<h1 className="text-3xl font-bold">Admin - About Page</h1>

			<input
				className="border p-2"
				value={form.title}
				onChange={e => setForm({ ...form, title: e.target.value })}
			/>

			<textarea
				className="border p-2 h-40"
				value={form.description}
				onChange={e => setForm({ ...form, description: e.target.value })}
			/>

			<button
				onClick={handleSave}
				className="bg-black text-white p-2"
			>
				Simpan
			</button>
		</div>
	)
}