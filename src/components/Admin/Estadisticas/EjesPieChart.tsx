"use client"

import { ResponsivePie } from '@nivo/pie'

interface EjeData {
  id: string
  name: string
  color: string
  cant: number
}

interface EjesPieChartProps {
  data: EjeData[]
}

export default function EjesPieChart({ data}: EjesPieChartProps) {
  return (
      <div className="w-3/4 h-full">
        <ResponsivePie
          data={data.map(item => ({
            id: item.id,
            label: item.name,
            value: item.cant,
            color: item.color
          }))}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]]
          }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]]
          }}
        />
      </div>
      
  
  )
}