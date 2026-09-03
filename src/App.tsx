import './App.css'
import { Header } from "@/components/Header"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Aquí irá la sección Hero y las demás secciones */}
      </main>
    </div>
  )
}
