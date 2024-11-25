'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'
import { axiosInstance } from '@/lib/utils'
import { startMonitoring } from '@/services/fuente'

interface MonitoringModalProps {
  fuenteId: number
  onClose: () => void
}

export default function MonitoringModal({ fuenteId, onClose }: MonitoringModalProps) {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    // Iniciar el monitoreo con axios (esto es solo para disparar el backend)
    startMonitoring(fuenteId)

    // Escuchar los mensajes enviados desde el backend
    const eventSource = new EventSource(`${axiosInstance.defaults.baseURL}start-monitoring/${fuenteId}/`)

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, data.message])
    }

    eventSource.onerror = () => {
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [fuenteId])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Monitoreo en Proceso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <Search className="w-12 h-12 text-burgundy-900 animate-pulse" />
        </div>
        <div className="text-center text-sm text-gray-600">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onClose} className="w-full bg-burgundy-900 text-white hover:bg-burgundy-800">
          Detener
        </Button>
      </CardFooter>
    </Card>
  )
}
