import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function PUT(req: Request, { params }: any) {
	const body = await req.json()

	await db.query(
		"UPDATE features SET title=?, content=?, icon=?, position=? WHERE id=?",
		[body.title, body.content, body.icon, body.position, params.id]
	)

	return NextResponse.json({ message: "Updated" })
}

export async function DELETE(_: Request, { params }: any) {
	await db.query("DELETE FROM features WHERE id=?", [params.id])
	return NextResponse.json({ message: "Deleted" })
}