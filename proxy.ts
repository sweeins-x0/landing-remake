import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
	console.log("proxy jalan")

	const isLoggedIn = request.cookies.get("admin-auth")

	if (!isLoggedIn && request.nextUrl.pathname.startsWith("/admin")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/admin/:path*"],
}