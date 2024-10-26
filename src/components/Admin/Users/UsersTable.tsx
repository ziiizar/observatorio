"use client";

import Table from "@/components/Table/Table";
import TableBody from "@/components/Table/TableBody";
import TableHead from "@/components/Table/TableHead";
import TableRow from "@/components/Table/TableRow";
import TableHeadRow from "../../Table/TableHeadRow";
import { User } from "@/types/user";
import TableCell from "@/components/Table/TableCell";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { routes } from "@/constants/routes";
import ExportButton from "@/components/ExportButton";
import jsPDF from "jspdf";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import EditUserForm from "@/components/Admin/Users/EditUserForm";
import { deleteUser } from "@/services/user";
import { toast } from "sonner";
import { DeleteIcon, EditIcon } from "@/Icons/Table";

const UsersTable = ({
  currentPage,
  limit,
  users,
}: {
  currentPage: number;
  limit: number;
  users: User[];
}) => {


  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  // Método para abrir el modal de confirmación de eliminación
  const handleDeleteClick = (user: User) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Método para cerrar el modal
  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  // Método para eliminar la fuente
  const handleDeleteUser = async () => {
    if (selectedUser) {
     const resp = await deleteUser({id:selectedUser.id});
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
              <TableHeadRow className="">Nombre</TableHeadRow>
              <TableHeadRow>Apellidos</TableHeadRow>
              <TableHeadRow>Correo</TableHeadRow>
              <TableHeadRow>Organismo</TableHeadRow>
              <TableHeadRow className="rounded-tr-xl">Rol</TableHeadRow>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                className=""
                key={user.id}
              >
                <TableCell className="">
                  {
                    <div className="flex gap-2">
                      <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"  onClick={() => handleDeleteClick(user)}>
                        <DeleteIcon className={'group-hover:fill-white fill-burgundy-900'}></DeleteIcon>
                      </Button>
                      <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900" onClick={() => handleEditClick(user)}>
                        <EditIcon></EditIcon>
                      </Button>
                    </div>
                  }
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {user.first_name}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {user.last_name}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {user.email}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {user.userprofile?.organization}
                </TableCell>
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {user.userprofile?.role}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
     
     {isEditModalOpen && selectedUser && (
      <Modal onClose={closeModals}>
        <EditUserForm onClose={closeModals} user={selectedUser} />
      </Modal>
    )}

    {/* Modal para confirmar eliminación */}
    {isDeleteModalOpen && selectedUser && (
      <Modal onClose={closeModals}>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Eliminar Usuario</h2>
          <p>¿Desea eliminar al usuario "{selectedUser.username}"?</p>
          <div className="flex justify-end gap-4 mt-6">
            <Button className="bg-red-600 text-black" onClick={handleDeleteUser}>
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

export default UsersTable;
