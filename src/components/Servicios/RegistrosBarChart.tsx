"use client"

import { formattedRegistros } from '@/types/registro';
import { ResponsiveBar } from '@nivo/bar'

// Ajusta el tipo de datos para cumplir con los requisitos de `ResponsiveBar`


export default function RegistrosBarChart({ data, selectedValue = 'language'}: {data: formattedRegistros[], selectedValue: string}) {
  // Transformar `year` en string si es necesario
  const formattedData = Object.values(
    data.reduce((acc, item) => {
      const key = item[selectedValue]; // Obtener el valor de la columna dinámica
      if (!acc[key]) {
        acc[key] = { [selectedValue]: key, cant: 0 };
      }
      acc[key].cant += 1;
      return acc;
    }, {} as Record<string, { [key: string]: string; cant: number }>)
  );
  return (
    <div className="h-[400px] w-full">
      <ResponsiveBar
        data={formattedData}
        keys={['cant']}
        indexBy={selectedValue}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: 'Year',
          legendPosition: 'middle',
          legendOffset: 40
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Registrations',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Registration data bar chart"
        barAriaLabel={(e) => `${e.id}: ${e.formattedValue} registrations in year: ${e.indexValue}`}
      />
    </div>
  );
}
