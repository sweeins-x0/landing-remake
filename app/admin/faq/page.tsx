"use client"

import { useEffect, useState } from "react"

export default function AdminFAQ() {

  const [faq, setFaq] = useState<any[]>([])
  const [form, setForm] = useState({
    question: "",
    answer: ""
  })

  const load = () => {
    fetch("/api/faq")
      .then(res => res.json())
      .then(data => setFaq(data))
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async () => {
    await fetch("/api/faq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    setForm({ question: "", answer: "" })
    load()
  }

  const remove = async (id: number) => {
    await fetch("/api/faq", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    load()
  }

  return (
    <div className="min-h-screen bg-black text-white p-20 space-y-10">

      <h1 className="text-3xl">Admin FAQ</h1>

      <div className="space-y-4">
        <input
          placeholder="Pertanyaan"
          value={form.question}
          onChange={e => setForm({...form, question: e.target.value})}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <textarea
          placeholder="Jawaban"
          value={form.answer}
          onChange={e => setForm({...form, answer: e.target.value})}
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <button
          onClick={submit}
          className="px-6 py-2 bg-blue-600 rounded"
        >
          Tambah FAQ
        </button>
      </div>

      <div className="space-y-4">
        {faq.map(item => (
          <div
            key={item.id}
            className="p-4 bg-gray-900 border border-gray-700 rounded flex justify-between"
          >
            <div>
              <p className="font-medium">{item.question}</p>
              <p className="text-sm text-gray-400">{item.answer}</p>
            </div>
            <button
              onClick={() => remove(item.id)}
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