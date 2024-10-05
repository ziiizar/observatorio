import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "../../Table/TableHeadRow";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import { fetchFuentes } from "@/data/fuentes";
import { Fuente } from "@/types/fuente";

const FuenteTable = async () => {
  const fuentes: Fuente[] = await fetchFuentes();

  return (
    <Table className="">
      <TableHead className="">
        <TableRow>
          <TableHeadRow className="rounded-tl-xl ">Acciones</TableHeadRow>
          <TableHeadRow className="">Titulo</TableHeadRow>
          <TableHeadRow>URL</TableHeadRow>
          <TableHeadRow>Organizacion</TableHeadRow>
          <TableHeadRow>Frecuencia</TableHeadRow>
          <TableHeadRow>Monitoreado</TableHeadRow>
          <TableHeadRow>Editores</TableHeadRow>
          <TableHeadRow>Materia</TableHeadRow>
          <TableHeadRow className="rounded-tr-xl">Eje Tematico</TableHeadRow>
        </TableRow>
      </TableHead>
      <TableBody>
        {fuentes.map((fuente) => (
          <TableRow className="border-b-2 border-dusty-gray-300" key={fuente.id}>
            <TableCell className="border-l-2 border-dusty-gray-300">
              {
                <div className="flex gap-2">
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">x</Button>
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">E</Button>
                </div>
              }
            </TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.title}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.url}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.organization}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.frequency}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.is_monitoring}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.editors}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{fuente.matter}</TableCell>
            <TableCell className="border-x-2 border-dusty-gray-300">{fuente.id_eje}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FuenteTable