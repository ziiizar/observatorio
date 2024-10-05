"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import {Mail} from "@/Icons/AboutUs"

const profiles = [
  { name: "Jose Manuel", department: "Departamento de Energia", position: "Ing. Eléctrico", image: "/JoseManuel.png" },
  { name: "Jordi Wild", department: "Departamento de Energia", position: "Ing. Eléctrico", image: "/JordiWild.png" },
  { name: "Alberto Moreno", department: "Departamento de Energia", position: "Ing. Eléctrico", image: "/AlbertoMoreno.png" },
  { name: "Jovany Vazquez", department: "Departamento de Energia", position: "Ing. Eléctrico", image: "/JovanyVazquez.png" },
  { name: "Ilkay Gundoganga", department: "Departamento de Energia", position: "Ing. Eléctrico", image: "/IlkayGundoganga.png" },
]

export default function WorkTeam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
    }
  }

  return (
    <section className="relative w-full max-w-[75rem] mx-auto">
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
        onScroll={handleScroll}
      >
        {profiles.map((profile, index) => (
          <div key={index} className="flex-shrink-0 w-72 bg-burgundy-900 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 ">

              <Image
                src={profile.image}
                alt={profile.name}
                width={300}
                height={400}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className=" w-full bg-white  py-1 px-3 rounded-xl flex gap-1 items-center justify-between hover:bg-white/90 transition-colors text-black">
                  <div className='flex flex-col gap-1'>
                      <h3 className="text-xl font-bold ">{profile.name}</h3>
                      <p className="text-sm ">{profile.department}</p>
                      <p className="text-sm ">{profile.position}</p>
                  </div>
                  <button className='p-3 bg-burgundy-900 shadow-shadowRed text-white rounded-xl'>
                    <Mail  />
                    
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {canScrollLeft && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6 text-[#8B0000]" />
        </button>
      )}
      {canScrollRight && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6 text-[#8B0000]" />
        </button>
      )}
    </section>
  )
}