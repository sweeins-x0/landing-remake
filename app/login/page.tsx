"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const res = await fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
			credentials: "include", // ⬅ penting
		})
    setLoading(false)

    if (res.ok) {
      router.push("/admin")
    } else {
      alert("Login gagal")
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <Card className="w-[24rem] p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Label>Username</Label>
            <Input
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="mt-4"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  )
}