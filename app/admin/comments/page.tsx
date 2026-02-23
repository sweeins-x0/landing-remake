"use client"

import { useEffect, useState } from "react"

export default function AdminComments() {

  const [comments, setComments] = useState<any[]>([])
  const [form, setForm] = useState({
    name: "",
    comment: "",
    avatar_url: ""
  })

  const load = () => {
    fetch("/api/comments")
      .then(res => res.json())
      .then(data => setComments(data))
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    setForm({ name: "", comment: "", avatar_url: "" })
    load()
  }

  const remove = async (id: number) => {
    await fetch("/api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    load()
  }

  return (
    <div className="min-h-screen bg-black text-white p-20 space-y-10">

      <h1 className="text-3xl">Admin Comments</h1>

      <div className="space-y-4">
        <input
          placeholder="Nama"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <textarea
          placeholder="Komentar"
          value={form.comment}
          onChange={e => setForm({...form, comment: e.target.value})}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <input
          placeholder="Avatar URL"
          value={form.avatar_url}
          onChange={e => setForm({...form, avatar_url: e.target.value})}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <button
          onClick={submit}
          className="px-6 py-2 bg-blue-600 rounded"
        >
          Tambah
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="p-4 bg-gray-900 border border-gray-700 rounded flex justify-between"
          >
            <div>
              <p className="font-medium">{c.name}</p>
              <p className="text-sm text-gray-400">{c.comment}</p>
            </div>
            <button
              onClick={() => remove(c.id)}
              className="text-red-400"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}