import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "@/components/Table/TableHeadRow";
import {fetchPatents} from "@/data/patents";
import { Patente } from "@/types/patente";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";

const PatentesTable = async ({currentPage, limit}: {currentPage: number, limit: number}) => {


    const patentes:Patente[] = await fetchPatents({currentPage,limit})


  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow className="rounded-tl-xl ">Acciones</TableHeadRow>
          <TableHeadRow className="">Fuente</TableHeadRow>
          <TableHeadRow className="">URL</TableHeadRow>
          <TableHeadRow className="">Resumen</TableHeadRow>
          <TableHeadRow className="">Patent-Office</TableHeadRow>
          <TableHeadRow className="">Claims</TableHeadRow>
          <TableHeadRow className="rounded-tr-xl">Descripción</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {patentes.map((patente) => (
          <TableRow className="border-b-2 border-dusty-gray-300" key={patente.id}>
            <TableCell className="border-l-2 border-dusty-gray-300">
              {
                <div className="flex gap-2">
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">x</Button>
                  
                </div>
              }
            </TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{patente.source?.title}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{patente.url}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{patente.abstract}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{patente.patent_office}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{patente.claims}</TableCell>
            <TableCell className="border-x-2 border-dusty-gray-300">{patente.description}</TableCell>
            
            
            {/* <TableCell className="border-x-2 border-dusty-gray-300">{user.userprofile?.role}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PatentesTable