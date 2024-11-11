'use client'

import  Button from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'

interface MonitoringModalProps {
  fuenteId: number
  onClose: () => void
  stopMonitoring: (fuenteId: number) => Promise<{ success?: string; error?: string }>
}

export default function MonitoringModal({ fuenteId, onClose, stopMonitoring }: MonitoringModalProps) {
  const handleCancel = async () => {
    try {
      const result = await stopMonitoring(fuenteId)
      if (result.success) {
        console.log(result.success)
      } else if (result.error) {
        console.error(result.error)
      }
    } catch (error) {
      console.error('An unexpected error occurred')
    } finally {
      onClose()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Monitoreo en Proceso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <Search className="w-12 h-12 text-burgundy-900 animate-pulse" />
        </div>
        <p className="text-center text-sm text-gray-600">
          El monitoreo está en curso. Haga clic en "Detener Monitoreo" para finalizar.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCancel} className="w-full bg-burgundy-900 text-white hover:bg-burgundy-800">
          Detener Monitoreo
        </Button>
      </CardFooter>
    </Card>
  )
}