import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">ISO9001</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600">
              Inicio
            </Link>          
            <Link href="/recursos" className="text-sm font-medium hover:text-blue-600">
              Recursos
            </Link>
            <Link href="/chat" className="text-sm font-medium hover:text-blue-600">
              Asistente ISO
            </Link>
          </nav>
        </div>

      </div>
    </header>
  )
}
