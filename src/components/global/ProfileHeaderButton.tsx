'use client'

import { useState, useRef, useEffect } from 'react'
import { AuthUser } from '@/types/user'
import Button from '../ui/Button'
import { logout } from '@/services/logout'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routes'

export default function ProfileHeaderButton({ user }: { user: AuthUser }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter();


  const onClick = async () => {
    const resp = await logout();
    if(resp.success){
      toast.success(resp.success)
      router.push(routes.home)
      
     }
     if(resp.error){
      toast.error(resp.error)
     }
  };


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 bg-transparent rounded-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="size-8 sm:size-9 bg-gray-400 rounded-full flex items-center justify-center text-white border-2 border-black">
          <h4 className='text-[clamp(0.75rem,2vw,0.875rem)]'>{user?.role.at(0)?.toUpperCase()}</h4>
        </div>
        <svg
          className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-700 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180 will-change-auto' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div 
        className={`
          absolute right-0 mt-2 w-28 sm:w-32 bg-white rounded-xl shadow-lg p-2 z-10
          transition-all duration-200 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <Button
          onClick={onClick}
          className="block w-full border border-burgundy-900 px-2 sm:px-4 py-2 text-[clamp(0.625rem,1.5vw,0.75rem)] hover:bg-burgundy-800 focus:outline-none text-burgundy-900 hover:text-white transition-all duration-200 ease-in-out hover:shadow-shadowRed"
        >
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}