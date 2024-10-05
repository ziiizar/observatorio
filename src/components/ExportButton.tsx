'use client'

import Button from "./ui/Button"
import { exportToPDF } from "@/lib/utils"

const ExportButton = ({data}) => {
  return (
    <Button onClick={()=> exportToPDF(data)} className="w-36 border-burgundy-900 border-2 text-burgundy-900">
          Exportar
        </Button>
  )
}

export default ExportButton