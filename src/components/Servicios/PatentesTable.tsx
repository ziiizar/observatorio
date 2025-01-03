import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "@/components/Table/TableHeadRow";
import { Patente } from "@/types/patente";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import { DeleteIcon } from "@/Icons/Table";

const PatentesTable = async ({patentes}: {patentes: Patente[]}) => {


  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow columnIndex={0} className="rounded-tl-xl">Fuente</TableHeadRow>
          <TableHeadRow columnIndex={1} className="">URL</TableHeadRow>
          <TableHeadRow columnIndex={2} className="">Resumen</TableHeadRow>
          <TableHeadRow columnIndex={3} className="">Patent-Office</TableHeadRow>
          <TableHeadRow columnIndex={4} className="">Claims</TableHeadRow>
          <TableHeadRow columnIndex={5} className="rounded-tr-xl">Descripción</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {patentes.map((patente) => (
          <TableRow className="" key={patente.id}>
            {/* <TableCell columnIndex={0} className="">
              {
                <div className="flex gap-2">
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"><DeleteIcon className={'group-hover:fill-white fill-burgundy-900'}></DeleteIcon></Button>
                  
                </div>
              }
            </TableCell> */}
            <TableCell columnIndex={0} className="">{patente.sourceData?.organization}</TableCell>
            <TableCell columnIndex={1} className="border-l-2 border-dusty-gray-300">{patente.url}</TableCell>
            <TableCell columnIndex={2} className="border-l-2 border-dusty-gray-300">{patente.abstract}</TableCell>
            <TableCell columnIndex={3} className="border-l-2 border-dusty-gray-300">{patente.patent_office}</TableCell>
            <TableCell columnIndex={4} className="border-l-2 border-dusty-gray-300">{patente.claims}</TableCell>
            <TableCell columnIndex={5} className="border-l-2 border-dusty-gray-300">{patente.description}</TableCell>
            
            
            {/* <TableCell className="border-x-2 border-dusty-gray-300">{user.userprofile?.role}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PatentesTable