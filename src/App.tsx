export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 space-y-4">
      <h1 className="text-4xl font-bold text-accent">¡Tailwind y Estilos Listos!</h1>
      <p className="text-muted-foreground">Tu entorno de React + Vite + Tailwind CSS está configurado correctamente.</p>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow hover:opacity-90 transition">
        Iniciar Portafolio
      </button>
    </div>
  )
}