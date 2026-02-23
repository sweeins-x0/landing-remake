"use client"

import { useEffect, useState } from "react"

export default function AdminHistory() {
	const emptyForm = {
		id: null,
		year: "",
		title: "",
		content: "",
		image_url: "",
		position: 0,
	}

	const [form, setForm] = useState<any>(emptyForm)
	const [data, setData] = useState<any[]>([])

	const fetchData = () => {
		fetch("/api/history")
			.then(res => res.json())
			.then(setData)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleSave = async () => {
		if (form.id) {
			await fetch(`/api/history/${form.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			})
		} else {
			await fetch("/api/history", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			})
		}

		setForm(emptyForm)
		fetchData()
	}

	const handleEdit = (item: any) => {
		setForm(item)
	}

	const handleDelete = async (id: number) => {
		await fetch(`/api/history/${id}`, { method: "DELETE" })
		fetchData()
	}

	return (
		<div className="p-20 flex flex-col gap-10">
			<h1 className="text-3xl font-bold">Admin Sejarah</h1>

			<div className="flex flex-col gap-4 w-1/2 border p-6">
				<input
					placeholder="Year"
					className="border p-2"
					value={form.year}
					onChange={e => setForm({ ...form, year: e.target.value })}
				/>

				<input
					placeholder="Title"
					className="border p-2"
					value={form.title}
					onChange={e => setForm({ ...form, title: e.target.value })}
				/>

				<textarea
					placeholder="Content"
					className="border p-2 h-32"
					value={form.content}
					onChange={e => setForm({ ...form, content: e.target.value })}
				/>

				<input
					placeholder="Image URL"
					className="border p-2"
					value={form.image_url}
					onChange={e => setForm({ ...form, image_url: e.target.value })}
				/>

				<input
					type="number"
					placeholder="Position"
					className="border p-2"
					value={form.position}
					onChange={e => setForm({ ...form, position: e.target.value })}
				/>

				<button
					onClick={handleSave}
					className="bg-black text-white p-2"
				>
					{form.id ? "Update" : "Tambah"}
				</button>
			</div>

			<div className="flex flex-col gap-4">
				{data.map(item => (
					<div
						key={item.id}
						className="border p-4 flex justify-between items-center"
					>
						<div>
							<p className="font-bold">{item.year}</p>
							<p>{item.title}</p>
						</div>

						<div className="flex gap-3">
							<button
								onClick={() => handleEdit(item)}
								className="bg-blue-500 text-white px-3 py-1"
							>
								Edit
							</button>

							<button
								onClick={() => handleDelete(item.id)}
								className="bg-red-500 text-white px-3 py-1"
							>
								Hapus
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}