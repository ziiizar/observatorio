import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "@/components/Table/TableHeadRow";
import { Registros } from "@/types/registro";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import { DeleteIcon } from "@/Icons/Table";
import { formatRegistros } from "@/lib/utils";

const RegistrosTable = async ({registros}: {registros:Registros[]}) => {

  const formatedRegistros = registros.map((item: Registros) =>
    formatRegistros(item)
  );


  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow className="rounded-tl-xl">Acciones</TableHeadRow>
          <TableHeadRow className="">Título</TableHeadRow>
          <TableHeadRow className="">Autor</TableHeadRow>
          <TableHeadRow className="">Fecha</TableHeadRow>
          <TableHeadRow className="">Editorial</TableHeadRow>
          <TableHeadRow className="">Materia</TableHeadRow>
          <TableHeadRow className="rounded-tr-xl">Descripción</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {formatedRegistros.map((registro) => {
          
         
            return (
              <TableRow className=" " key={registro.id}>
                <TableCell className=" ">
                  <div className="flex gap-2">
                    <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">
                      <DeleteIcon className={'group-hover:fill-white fill-burgundy-900'}></DeleteIcon>
                    </Button>
                  </div>
                </TableCell>
                {/* Aquí puedes agregar más celdas para otros campos */}
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.title }
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.creators}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.date}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.publisher}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.subject}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {registro.description}
                </TableCell>
              </TableRow>
            );
          
        })}
      </TableBody>
    </Table>
  );
};

export default RegistrosTable;
