"use client"

import { useEffect, useState } from "react"

export default function AdminFeatures() {

  const [section, setSection] = useState<any>(null)
  const [features, setFeatures] = useState<any[]>([])

  const emptyFeature = {
    id: null,
    title: "",
    description: "",
    icon: "monitor",
    position: 0
  }

  const [form, setForm] = useState<any>(emptyFeature)

  const fetchData = () => {
    fetch("/api/features")
      .then(res => res.json())
      .then(res => {
        setSection(res.section)
        setFeatures(res.features)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!section) return null

  const saveSection = async () => {
    await fetch("/api/feature-section", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(section)
    })
    alert("Section updated")
  }

  const saveFeature = async () => {
    if (form.id) {
      await fetch(`/api/features/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
    } else {
      await fetch("/api/features/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
    }

    setForm(emptyFeature)
    fetchData()
  }

  const editFeature = (item: any) => setForm(item)

  const deleteFeature = async (id: number) => {
    await fetch(`/api/features/${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="p-20 flex flex-col gap-16">

      <h1 className="text-3xl font-bold">Admin Features</h1>

      {/* SECTION EDIT */}
      <div className="border p-10 flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Edit Section</h2>

        <input
          className="border p-2"
          value={section.title}
          onChange={e => setSection({ ...section, title: e.target.value })}
        />

        <textarea
          className="border p-2"
          value={section.description}
          onChange={e => setSection({ ...section, description: e.target.value })}
        />

        <input
          className="border p-2"
          value={section.highlight_title}
          onChange={e => setSection({ ...section, highlight_title: e.target.value })}
        />

        <textarea
          className="border p-2"
          value={section.highlight_description}
          onChange={e => setSection({ ...section, highlight_description: e.target.value })}
        />

        <button
          onClick={saveSection}
          className="bg-black text-white p-2"
        >
          Update Section
        </button>
      </div>

      {/* FEATURE CRUD */}
      <div className="border p-10 flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Tambah / Edit Feature</h2>

        <input
          placeholder="Title"
          className="border p-2"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="border p-2"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Icon (graduation-cap, id-card, book-open, monitor)"
          className="border p-2"
          value={form.icon}
          onChange={e => setForm({ ...form, icon: e.target.value })}
        />

        <input
          type="number"
          placeholder="Position"
          className="border p-2"
          value={form.position}
          onChange={e => setForm({ ...form, position: e.target.value })}
        />

        <button
          onClick={saveFeature}
          className="bg-black text-white p-2"
        >
          {form.id ? "Update" : "Tambah"}
        </button>
      </div>

      {/* LIST */}
      {features.map(item => (
        <div key={item.id} className="border p-4 flex justify-between">
          <p>{item.title}</p>
          <div className="flex gap-4">
            <button onClick={() => editFeature(item)}>Edit</button>
            <button onClick={() => deleteFeature(item.id)}>Delete</button>
          </div>
        </div>
      ))}

    </div>
  )
}