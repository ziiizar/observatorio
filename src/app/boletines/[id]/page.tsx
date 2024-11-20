import DetailedBoletin from "@/components/Boletines/DetailedBoletin"
import { fetchBoletinById } from "@/data/boletines"
import { Boletin } from "@/types/boletin"

const page = async ({params}:{params:{id:number}}) => {

  const boletin: Boletin = await fetchBoletinById(params.id)
  return (
    <div><DetailedBoletin boletin={boletin}></DetailedBoletin></div>
  )
}

export default page