import { Suspense } from "react"

export default function NotFoundPage() {
  return (
    <Suspense>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-primary-700 md:text-5xl">
          404 - Página No Encontrada
        </h1>
        <p className="mt-4 text-lg text-primary-600 md:mt-6 md:text-xl">
          Lo sentimos, la página que buscas no existe.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/"
            className="rounded-lg bg-primary-600 px-4 py-2 text-white transition-all hover:bg-primary-700"
          >
            Volver al Inicio
          </a>
          <a
            href="/contacto"
            className="rounded-lg bg-secondary-500 px-4 py-2 text-white transition-all hover:bg-secondary-600"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </Suspense>
  )
}