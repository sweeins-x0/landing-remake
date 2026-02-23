import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const [rows]: any = await db.query(
    "SELECT * FROM history ORDER BY position ASC"
  )
  return NextResponse.json(rows)
}

export async function POST(req: Request) {
  const body = await req.json()

  await db.query(
    "INSERT INTO history (year, title, content, image_url, position) VALUES (?, ?, ?, ?, ?)",
    [body.year, body.title, body.content, body.image_url, body.position]
  )

  return NextResponse.json({ message: "Created" })
}