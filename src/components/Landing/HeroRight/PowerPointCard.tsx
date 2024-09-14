import {Check} from '@/Icons/Landing'
const PowerPointCard = ({text}) => {
  return (
    <div className="bg-white rounded-xl px-2 py-1 place-content-center items-center w-full flex text-black gap-4 text-sm">
    <strong>{text}</strong>
    <Check></Check>
  </div>
  )
}

export default PowerPointCard