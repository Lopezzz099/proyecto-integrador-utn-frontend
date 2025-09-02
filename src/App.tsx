import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 hover:animate-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 hover:animate-pulse" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold text-foreground mb-8">Vite + React + shadcn/ui</h1>
      
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Contador con shadcn/ui</CardTitle>
          <CardDescription>
            Este es un ejemplo usando componentes oficiales de shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg">Contador: {count}</p>
            <Button 
              onClick={() => setCount((count) => count + 1)}
              className="w-full"
            >
              Incrementar contador
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Edita <code className="bg-muted px-2 py-1 rounded text-foreground">src/App.tsx</code> y guarda para probar HMR
          </p>
        </CardFooter>
      </Card>
      
      <div className="mt-8 flex space-x-4">
        <Button variant="outline">Botón Outline</Button>
        <Button variant="secondary">Botón Secondary</Button>
        <Button variant="destructive">Botón Destructive</Button>
      </div>
      
      <p className="text-muted-foreground mt-8 text-center">
        Haz click en los logos de Vite y React para aprender más
      </p>
    </div>
  )
}

export default App
