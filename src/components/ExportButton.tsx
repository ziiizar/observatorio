'use client'

import { ExportIcon } from "@/Icons/Table"
import Button from "./ui/Button"
import { exportToPDF } from "@/lib/utils"

const ExportButton = ({data}) => {
  return (
    <Button onClick={()=> exportToPDF(data)} className="w-36 border-burgundy-900 border-2 text-burgundy-900 flex gap-2">
       <ExportIcon className={'group-hover:fill-white fill-burgundy-900'}></ExportIcon>
          Exportar
        </Button>
  )
}

export default ExportButton