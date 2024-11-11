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

const RegistrosTable = async ({ registros }: { registros: Registros[] }) => {
  const formatedRegistros = registros
    .map((item: Registros) => formatRegistros(item))
    .filter((registro) => registro !== null); // Filtrar registros nulos

  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow columnIndex={0} className="rounded-tl-xl">Título</TableHeadRow>
          <TableHeadRow columnIndex={1} className="">Autor</TableHeadRow>
          <TableHeadRow columnIndex={2} className="">Fecha</TableHeadRow>
          <TableHeadRow columnIndex={3} className="">Editorial</TableHeadRow>
          <TableHeadRow columnIndex={4} className="">Materia</TableHeadRow>
          <TableHeadRow columnIndex={5} className="rounded-tr-xl">Descripción</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {formatedRegistros.map((registro) => (
          <TableRow className=" " key={registro?.id}>
            {/* <TableCell columnIndex={0} className=" ">
              <div className="flex gap-2">
                <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">
                  <DeleteIcon className={'group-hover:fill-white fill-burgundy-900'} />
                </Button>
              </div>
            </TableCell> */}
            <TableCell columnIndex={0} className="">
              {registro?.title}
            </TableCell>
            <TableCell columnIndex={1} className="border-l-2 border-dusty-gray-300">
              {registro?.creators}
            </TableCell>
            <TableCell columnIndex={2} className="border-l-2 border-dusty-gray-300">
              {registro?.date}
            </TableCell>
            <TableCell columnIndex={3} className="border-l-2 border-dusty-gray-300">
              {registro?.publisher}
            </TableCell>
            <TableCell columnIndex={4} className="border-l-2 border-dusty-gray-300">
              {registro?.subject}
            </TableCell>
            <TableCell columnIndex={5} className="border-l-2 border-dusty-gray-300">
              {registro?.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RegistrosTable;
