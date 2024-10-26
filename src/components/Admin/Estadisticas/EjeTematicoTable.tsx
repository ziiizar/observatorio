'use client'

import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "../../Table/TableHeadRow";
import { fetchEjesTematicos } from "@/data/ejesTematicos";
import { EjeTematico } from "@/types/ejeTEmatico";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { deleteEje } from "@/services/eje";
import { toast } from "sonner";
import Modal from "@/components/ui/Modal";
import EditEjeForm from "./EditEjeForm";
import { DeleteIcon, EditIcon } from "@/Icons/Table";

const EjeTematicoTable =  ({ejes}: {ejes:EjeTematico[]}) => {


  
  const [selectedEje, setSelectedEje] = useState<EjeTematico | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const handleEditClick = (eje: EjeTematico) => {
    setSelectedEje(eje);
    setIsEditModalOpen(true);
  };

  // Método para abrir el modal de confirmación de eliminación
  const handleDeleteClick = (eje: EjeTematico) => {
    setSelectedEje(eje);
    setIsDeleteModalOpen(true);
  };

  // Método para cerrar el modal
  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedEje(null);
  };

  // Método para eliminar la fuente
  const handleDeleteEje = async () => {
    if (selectedEje) {
     const resp = await deleteEje({id_eje:selectedEje.id_eje});
     if(resp.success){
      
      toast.success(resp.success)
     }
     if(resp.error){
      toast.error(resp.error)
     }
      closeModals(); // Cierra el modal después de eliminar
      // Aquí podrías agregar lógica adicional para actualizar la lista de fuentes si es necesario
    }
  };

  return (
    <>
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
          <TableRow className="" key={eje.id_eje}>
            <TableCell className="">
              {
                <div className="flex gap-2">
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900" onClick={() => handleDeleteClick(eje)}><DeleteIcon className={'group-hover:fill-white fill-burgundy-900'}></DeleteIcon></Button>
                  <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900" onClick={() => handleEditClick(eje)}><EditIcon></EditIcon></Button>
                </div>
              }
            </TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{eje.nombre_eje}</TableCell>
            <TableCell className="border-l-2 border-dusty-gray-300">{eje.esta_activo}</TableCell>
            
            {/* <TableCell className="border-x-2 border-dusty-gray-300">{user.userprofile?.role}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>

{isEditModalOpen && selectedEje && (
  <Modal onClose={closeModals}>
    <EditEjeForm onClose={closeModals} eje={selectedEje} />
  </Modal>
)}

{/* Modal para confirmar eliminación */}
{isDeleteModalOpen && selectedEje && (
  <Modal onClose={closeModals}>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Eliminar Usuario</h2>
      <p>¿Desea eliminar al usuario "{selectedEje?.nombre_eje}"?</p>
      <div className="flex justify-end gap-4 mt-6">
        <Button className="bg-red-600 text-black" onClick={handleDeleteEje}>
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
  )
}

export default EjeTematicoTable