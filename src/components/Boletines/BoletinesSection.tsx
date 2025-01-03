'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Download, Filter } from 'lucide-react'
import type { Boletin, GetBoletinesResponse } from '@/types/boletin'
import  Button  from '@/components/ui/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import Pagination from '../Table/Pagination'
import { BoletinCard } from './BoletinCard'
import { FeaturedBoletin } from './FeaturedBoletin'
import OrderBy from '../Table/OrderBy'
import { orderOptions } from '@/types/orderOptions'




export default function BoletinesSection({
  initialData,
}: {
  initialData: GetBoletinesResponse
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTheme, setSelectedTheme] = useState<string>('')
  const { boletines, total_pages } = initialData

  return (
    < >
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold text-shark-900">
          Boletines Temáticos.
        </h1>
        <p className="text-lg text-shark-500">
          Monitoreamos las tendencias y avances tecnológicos para impulsar el
          desarrollo energético y minero en Cuba.
        </p>
      </div>

      {/* Featured Bulletin Carousel */}
      <div className="relative mb-12">
        <FeaturedBoletin boletin={boletines[0]} />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-shadowBlackSmall hover:bg-burgundy-50"
          aria-label="Previous bulletin"
        >
          <ChevronLeft className="size-4 text-burgundy-900" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-shadowBlackSmall hover:bg-burgundy-50"
          aria-label="Next bulletin"
        >
          <ChevronRight className="size-4 text-burgundy-900" />
        </button>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <Select value={selectedTheme} onValueChange={setSelectedTheme}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecciona Temática" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los temas</SelectItem>
            {/* Add theme options dynamically */}
          </SelectContent>
        </Select>

        <OrderBy columns={orderOptions.BOLETINES}></OrderBy>
      </div>

      {/* Bulletins Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {boletines.map((boletin) => (
          <BoletinCard key={boletin.id} boletin={boletin} />
        ))}
      </div>

      {/* Pagination */}
     <Pagination className='border-none' totalPages={total_pages}></Pagination>
    </>
  )
}