'use client'

import {startMonitoring} from '@/services/startMonitoring'
import { stopMonitoring } from "@/services/stopMonitoring";
import { Fuente } from '@/types/fuente';
const FuenteCard = ({fuente}: {fuente:Fuente}) => {

console.log('typeof(fuente.id)')
console.log(typeof(fuente.id))
    
    const handelStart = (fuenteId) => {
        startMonitoring(fuenteId)
      }
      const handelStop = (fuenteId) => {
        stopMonitoring(fuenteId)
      }

  return (
    <article key={fuente.id} className="flex gap-4">
            <div>
              <h3>{fuente.organization}</h3>
              <h4>{fuente.matter}</h4>
            </div>
            <button onClick={()=>{handelStart(fuente.id)}}>Start</button>
            <button onClick={()=>{handelStop(fuente.id)}}>Stop</button>
          </article>
  )
}

export default FuenteCard