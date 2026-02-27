import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const galleryDir = path.join(process.cwd(), "public", "gallery")

  let files: string[] = []
  if (fs.existsSync(galleryDir)) {
    files = fs
      .readdirSync(galleryDir)
      .filter((f) => /^\d+\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort((a, b) => parseInt(a) - parseInt(b))
  }

  return NextResponse.json({ images: files })
}
