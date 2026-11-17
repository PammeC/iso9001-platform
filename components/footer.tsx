"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [year, setYear] = useState<number>()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© {year ?? ''} ISO9001.</p>
        </div>
      </div>
    </footer>
  )
}
