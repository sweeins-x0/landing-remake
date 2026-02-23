import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const [rows]: any = await db.query(
    "SELECT * FROM trusted_by WHERE is_active = 1 ORDER BY position ASC"
  )

  return NextResponse.json(rows)
}