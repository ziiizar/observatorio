import { Check } from '@/Icons/Landing'

const PowerPointCard = ({ text }) => {
  return (
    <div className="bg-white rounded-xl px-2 py-1 place-content-center items-center w-full flex text-black gap-2 sm:gap-4 text-[clamp(0.625rem,1.5vw,0.875rem)]">
      <strong>{text}</strong>
      <Check />
    </div>
  )
}

export default PowerPointCard