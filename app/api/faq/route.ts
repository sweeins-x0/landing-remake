import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const [rows]: any = await db.query(
    "SELECT * FROM faq ORDER BY position ASC"
  )

  return NextResponse.json(
    Array.isArray(rows) ? rows : []
  )
}

export async function POST(req: Request) {
  const body = await req.json()

  await db.query(
    "INSERT INTO faq (question, answer) VALUES (?, ?)",
    [body.question, body.answer]
  )

  return NextResponse.json({ success: true })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()

  await db.query("DELETE FROM faq WHERE id = ?", [id])

  return NextResponse.json({ success: true })
}