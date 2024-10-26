"use client";

import { useState } from "react";
import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "../../Table/TableHeadRow";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import { Fuente } from "@/types/fuente";
import Modal from "@/components/ui/Modal"; // Asegúrate de tener un componente Modal implementado
import EditFuenteForm from "@/components/Fuentes/EditFuenteForm";
import { deleteFuente, startMonitoring } from "@/services/fuente"; // Importa la función para eliminar la fuente
import { AuthUser } from "@/types/user";
import { toast } from "sonner";
import { DeleteIcon, EditIcon } from "@/Icons/Table";

const FuenteTable = ({ fuentes, user }: { fuentes: Fuente[], user:AuthUser }) => {
  const [selectedFuente, setSelectedFuente] = useState<Fuente | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Método para abrir el modal de edición con la fuente seleccionada
  const handleEditClick = (fuente: Fuente) => {
    setSelectedFuente(fuente);
    setIsEditModalOpen(true);
  };

  // Método para abrir el modal de confirmación de eliminación
  const handleDeleteClick = (fuente: Fuente) => {
    setSelectedFuente(fuente);
    setIsDeleteModalOpen(true);
  };

  // Método para cerrar el modal
  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedFuente(null);
  };

  // Método para eliminar la fuente
  const handleDeleteFuente = async () => {
    if (selectedFuente) {
      const resp = await deleteFuente({id:selectedFuente.id})
      if(resp.success){
      
        toast.success(resp.success)
       }
       if(resp.error){
        toast.error(resp.error)
       };
      closeModals(); // Cierra el modal después de eliminar
      // Aquí podrías agregar lógica adicional para actualizar la lista de fuentes si es necesario
    }
  };

  return (
    <>
      <Table className="">
        <TableHead className="">
          <TableRow>
            <TableHeadRow className="rounded-tl-xl">Acciones</TableHeadRow>
            <TableHeadRow className="">Titulo</TableHeadRow>
            <TableHeadRow>URL</TableHeadRow>
            <TableHeadRow>Organización</TableHeadRow>
            <TableHeadRow>Frecuencia</TableHeadRow>
            <TableHeadRow>Monitoreado</TableHeadRow>
            <TableHeadRow>Editores</TableHeadRow>
            <TableHeadRow>Materia</TableHeadRow>
            <TableHeadRow className="rounded-tr-xl">Eje Temático</TableHeadRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {fuentes.map((fuente) => (
            <TableRow className="" key={fuente.id}>
              <TableCell className="">
                {user?.role === 'observador' ? (<Button
                    className=" w-16 h-8 rounded-full bg-burgundy-900 text-white"
                    onClick={() => startMonitoring(fuente.id)} // Abrir el modal de edición con la fuente seleccionada
                  >
                    Iniciar
                  </Button>):(<div className="flex gap-2">
                  <Button
                    className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"
                    onClick={() => handleDeleteClick(fuente)}
                  >
                    <DeleteIcon className={'group-hover:fill-white fill-burgundy-900'}></DeleteIcon>
                  </Button>
                  <Button
                    className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"
                    onClick={() => handleEditClick(fuente)} // Abrir el modal de edición con la fuente seleccionada
                  >
                    <EditIcon></EditIcon>
                  </Button>
                </div>)}
              </TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.title}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.url}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.organization}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.frequency}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">
                {fuente.is_monitoring ? "Sí" : "No"}
              </TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.editores}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.materia}</TableCell>
              <TableCell className="border-l-2 border-dusty-gray-300">{fuente.id_eje}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal para editar la fuente */}
      {isEditModalOpen && selectedFuente && (
        <Modal onClose={closeModals}>
          <EditFuenteForm onClose={closeModals} fuente={selectedFuente} />
        </Modal>
      )}

      {/* Modal para confirmar eliminación */}
      {isDeleteModalOpen && selectedFuente && (
        <Modal onClose={closeModals}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Eliminar Fuente</h2>
            <p>¿Desea eliminar la fuente "{selectedFuente.title}"?</p>
            <div className="flex justify-end gap-4 mt-6">
              <Button className="bg-red-600 text-black" onClick={handleDeleteFuente}>
                Aceptar
              </Button>
              <Button className="bg-gray-300" onClick={closeModals}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FuenteTable;

