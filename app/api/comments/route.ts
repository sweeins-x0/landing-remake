import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const [rows]: any = await db.query(
      "SELECT * FROM comments ORDER BY position ASC"
    )

    return NextResponse.json(
      Array.isArray(rows) ? rows : []
    )
  } catch (err) {
    return NextResponse.json({ error: "error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name, comment, avatar_url } = body

  await db.query(
    "INSERT INTO comments (name, comment, avatar_url) VALUES (?, ?, ?)",
    [name, comment, avatar_url]
  )

  return NextResponse.json({ success: true })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()

  await db.query("DELETE FROM comments WHERE id = ?", [id])

  return NextResponse.json({ success: true })
}