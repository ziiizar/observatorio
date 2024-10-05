import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "@/components/Table/TableHeadRow";
import { fetchRegistros } from "@/data/registros";
import { Registros } from "@/types/registro";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";

const RegistrosTable = async ({currentPage, limit}: {currentPage: number, limit:number}) => {


  const registros: Registros[] = await fetchRegistros({currentPage,limit});

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
        {registros.map((registro) => {
          try {
            // Convertir el campo 'metadata' en un objeto
            const metadataObject = JSON.parse(registro.metadata);

            // Extraer el campo 'description'
            const description = metadataObject._map.description
              ? metadataObject._map.description[0] // Aquí accedes al primer valor del array 'description'
              : "Sin descripción disponible";

            return (
              <TableRow className="border-b-2 border-dusty-gray-300" key={registro.id}>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  <div className="flex gap-2">
                    <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">
                      x
                    </Button>
                  </div>
                </TableCell>
                {/* Aquí puedes agregar más celdas para otros campos */}
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {metadataObject._map.title ? metadataObject._map.title[0] : "Sin título"}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {metadataObject._map.creator ? metadataObject._map.creator.join(", ") : "Sin autor"}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {metadataObject._map.date ? metadataObject._map.date[0] : "Sin fecha"}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {metadataObject._map.publisher ? metadataObject._map.publisher[0] : "Sin editorial"}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {metadataObject._map.subject ? metadataObject._map.subject.join(", ") : "Sin materia"}
                </TableCell>
                <TableCell className="border-x-2 border-dusty-gray-300">
                  {description}
                </TableCell>
              </TableRow>
            );
          } catch (error) {
            console.error("Error parsing metadata:", error);
            return (
              null
            );
          }
        })}
      </TableBody>
    </Table>
  );
};

export default RegistrosTable;
