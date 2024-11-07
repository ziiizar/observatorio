// import { ResponsivePie } from '@nivo/pie'

// interface PatentData {
//   id: string
//   country: string
//   color: string
//   cant: number
// }

// interface PatentesPieChartProps {
//   data: PatentData[]
// }

// export default function PatentesPieChart({ data }: PatentesPieChartProps) {
//   return (
//     <ResponsivePie
//       data={data.map(item => ({
//         id: item.country,
//         label: item.country,
//         value: item.cant,
//         color: item.color
//       }))}
//       margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderWidth={1}
//       borderColor={{
//         from: 'color',
//         modifiers: [['darker', 0.2]]
//       }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: 'color' }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{
//         from: 'color',
//         modifiers: [['darker', 2]]
//       }}
//       defs={[
//         {
//           id: 'dots',
//           type: 'patternDots',
//           background: 'inherit',
//           color: 'rgba(255, 255, 255, 0.3)',
//           size: 4,
//           padding: 1,
//           stagger: true
//         },
//         {
//           id: 'lines',
//           type: 'patternLines',
//           background: 'inherit',
//           color: 'rgba(255, 255, 255, 0.3)',
//           rotation: -45,
//           lineWidth: 6,
//           spacing: 10
//         }
//       ]}
//       legends={[
//         {
//           anchor: 'bottom',
//           direction: 'row',
//           justify: false,
//           translateX: 0,
//           translateY: 56,
//           itemsSpacing: 0,
//           itemWidth: 100,
//           itemHeight: 18,
//           itemTextColor: '#999',
//           itemDirection: 'left-to-right',
//           itemOpacity: 1,
//           symbolSize: 18,
//           symbolShape: 'circle',
//           effects: [
//             {
//               on: 'hover',
//               style: {
//                 itemTextColor: '#000'
//               }
//             }
//           ]
//         }
//       ]}
//     />
//   )
// }








// // *GRAFICO CON LEYENDA Y SIN LAS FLECHITAS

// "use client"

// import { ResponsivePie } from '@nivo/pie'

// interface PatentData {
//   id: string
//   country: string
//   color: string
//   cant: number
// }

// interface PatentesPieChartProps {
//   data: PatentData[]
// }

// export default function PatentesPieChart({ data}: PatentesPieChartProps) {
//   return (
//       <div className="w-3/4 h-full">
//         <ResponsivePie
//           data={data.map(item => ({
//             id: item.country,
//             label: item.country,
//             value: item.cant,
//             color: item.color
//           }))}
//           margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//           innerRadius={0.5}
//           padAngle={0.7}
//           cornerRadius={3}
//           activeOuterRadiusOffset={8}
//           borderWidth={1}
//           borderColor={{
//             from: 'color',
//             modifiers: [['darker', 0.2]]
//           }}
//           enableArcLinkLabels={false}
//           arcLabelsSkipAngle={10}
//           arcLabelsTextColor={{
//             from: 'color',
//             modifiers: [['darker', 2]]
//           }}
//         />
//       </div>
      
  
//   )
// }

"use client";

import { Patente } from "@/types/patente";
import { ResponsivePie } from "@nivo/pie";

export default function PatentesPieChart({
  data,
  selectedField,
}: {
  data: Patente[];
  selectedField: keyof Patente;
}) {
  const formattedData = Object.values(
    data.reduce((acc, item) => {
      const key = item[selectedField] !== null && item[selectedField] !== undefined 
                  ? String(item[selectedField]) 
                  : "Desconocido"; // Usa un valor por defecto para null/undefined
      if (!acc[key]) {
        acc[key] = { id: key, label: key, value: 0 };
      }
      acc[key].value += 1; // Incrementar el contador para este valor único
      return acc;
    }, {} as Record<string, { id: string; label: string; value: number }>)
  );

  return (
    <div className="h-[400px] w-full">
      <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </div>
  );
}
