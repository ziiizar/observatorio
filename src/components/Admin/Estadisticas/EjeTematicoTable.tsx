import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "../../Table/TableHeadRow";
import { fetchEjesTematicos } from "@/data/ejesTematicos";
import { EjeTematico } from "@/types/ejeTEmatico";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";

const EjeTematicoTable = async () => {

    const ejes: EjeTematico[] = await fetchEjesTematicos()
  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow className="rounded-tl-xl ">Acciones</TableHeadRow>
          <TableHeadRow className="">Eje Temático</TableHeadRow>
          <TableHeadRow className="rounded-tr-xl">Cant. de Publicaciones</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {ejes.map((eje) => (
          <TableRow className="border-b-2 border-dusty-gray-300" key={eje.id_eje}>
            <TableCell className="border-l-2 border-dusty-gray-300">
              {
                <div className="flex gap-2">
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">x</Button>
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">E</Button>
                </div>
              }
            </TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{eje.nombre_eje}</TableCell>
            <TableCell className="border-x-2 border-dusty-gray-300">{eje.esta_activo}</TableCell>
            
            {/* <TableCell className="border-x-2 border-dusty-gray-300">{user.userprofile?.role}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EjeTematicoTable