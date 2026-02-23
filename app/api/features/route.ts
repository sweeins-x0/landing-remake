import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const [section]: any = await db.query(
    "SELECT * FROM feature_section LIMIT 1"
  )

  const [features]: any = await db.query(
    "SELECT * FROM features ORDER BY position ASC"
  )

  return NextResponse.json({
    section: section[0],
    features
  })
}