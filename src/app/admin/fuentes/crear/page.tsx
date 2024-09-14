import InsertFuenteForm from "@/components/Fuentes/InsertFuenteForm"
import {fetchEjesTematicos} from '@/data/ejesTematicos'

const page = async () => {

    const ejes = await fetchEjesTematicos()

  return (
    <InsertFuenteForm ejes={ejes}></InsertFuenteForm>
  )
}

export default page