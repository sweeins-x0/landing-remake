import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
	const [rows]: any = await db.query(
		"SELECT * FROM about ORDER BY id DESC LIMIT 1"
	)

	return NextResponse.json(rows[0] || null)
}

export async function PUT(req: Request) {
	const body = await req.json()

	await db.query(
		"UPDATE about SET title=?, description=? WHERE id=1",
		[body.title, body.description]
	)

	return NextResponse.json({ message: "Updated" })
}