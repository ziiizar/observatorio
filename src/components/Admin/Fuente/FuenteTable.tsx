'use client'

import { useState } from 'react'
import Table from '@/components/Table/Table'
import TableBody from '@/components/Table/TableBody'
import TableHead from '@/components/Table/TableHead'
import TableRow from '@/components/Table/TableRow'
import TableHeadRow from '@/components/Table/TableHeadRow'
import TableCell from '@/components/Table/TableCell'
import Button from '@/components/ui/Button'
import { Fuente } from '@/types/fuente'
import Modal from '@/components/ui/Modal'
import EditFuenteForm from '@/components/Fuentes/EditFuenteForm'
import { deleteFuente, startMonitoring, stopMonitoring } from '@/services/fuente'
import { AuthUser } from '@/types/user'
import { toast } from 'sonner'
import { DeleteIcon, EditIcon } from '@/Icons/Table'
import MonitoringModal from './MonitoringModal'

const FuenteTable = ({ fuentes, user }: { fuentes: Fuente[]; user: AuthUser }) => {
  const [selectedFuente, setSelectedFuente] = useState<Fuente | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isMonitoringModalOpen, setIsMonitoringModalOpen] = useState(false)

  const handleEditClick = (fuente: Fuente) => {
    setSelectedFuente(fuente)
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = (fuente: Fuente) => {
    setSelectedFuente(fuente)
    setIsDeleteModalOpen(true)
  }

  const handleMonitoringClick = (fuente: Fuente) => {
    setSelectedFuente(fuente)
    // startMonitoring(fuente.id)
    setIsMonitoringModalOpen(true)
  }

  const closeModals = () => {
    setIsEditModalOpen(false)
    setIsDeleteModalOpen(false)
    setSelectedFuente(null)
  }

  const closeMonitoringModal = (fuenteId: number) => {
setIsMonitoringModalOpen(false)
stopMonitoring(fuenteId)
  }

  const handleDeleteFuente = async () => {
    if (selectedFuente) {
      const resp = await deleteFuente({ id: selectedFuente.id })
      if (resp.success) {
        toast.success(resp.success)
      }
      if (resp.error) {
        toast.error(resp.error)
      }
      closeModals()
    }
  }

  return (
    <>
            <Table className="">
        <TableHead className="">
          <TableRow>
            <TableHeadRow columnIndex={0} className="rounded-tl-xl">
              Acciones
            </TableHeadRow>
            <TableHeadRow columnIndex={1} className="">
              Titulo
            </TableHeadRow>
            <TableHeadRow columnIndex={2}>URL</TableHeadRow>
            <TableHeadRow columnIndex={3}>Organización</TableHeadRow>
            <TableHeadRow columnIndex={4}>Frecuencia</TableHeadRow>
            <TableHeadRow columnIndex={5}>Monitoreado</TableHeadRow>
            <TableHeadRow columnIndex={6}>Editores</TableHeadRow>
            <TableHeadRow columnIndex={7}>Materia</TableHeadRow>
            <TableHeadRow columnIndex={8} className="rounded-tr-xl">
              Eje Temático
            </TableHeadRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {fuentes.map((fuente) => (
            <TableRow className="" key={fuente.id}>
              <TableCell columnIndex={0} className="">
                {user?.role === 'observador' ? (
                  <Button
                    className="px-2 py-1 rounded-full bg-burgundy-900 text-white"
                    onClick={() => handleMonitoringClick(fuente)}
                  >
                    Iniciar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"
                      onClick={() => handleDeleteClick(fuente)}
                    >
                      <DeleteIcon className={'group-hover:fill-white fill-burgundy-900'} />
                    </Button>
                    <Button
                      className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900"
                      onClick={() => handleEditClick(fuente)}
                    >
                      <EditIcon />
                    </Button>
                  </div>
                )}
              </TableCell>
              <TableCell columnIndex={1} className="border-l-2 border-dusty-gray-300">
                {fuente.title}
              </TableCell>
              <TableCell columnIndex={2} className="border-l-2 border-dusty-gray-300">
                {fuente.url}
              </TableCell>
              <TableCell columnIndex={3} className="border-l-2 border-dusty-gray-300">
                {fuente.organization}
              </TableCell>
              <TableCell columnIndex={4} className="border-l-2 border-dusty-gray-300">
                {fuente.frequency}
              </TableCell>
              <TableCell columnIndex={5} className="border-l-2 border-dusty-gray-300">
                {fuente.is_monitoring ? 'Sí' : 'No'}
              </TableCell>
              <TableCell columnIndex={6} className="border-l-2 border-dusty-gray-300">
                {fuente.editores}
              </TableCell>
              <TableCell columnIndex={7} className="border-l-2 border-dusty-gray-300">
                {fuente.materia}
              </TableCell>
              <TableCell columnIndex={8} className="border-l-2 border-dusty-gray-300">
                {fuente.id_eje}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isEditModalOpen && selectedFuente && (
        <Modal onClose={closeModals}>
          <EditFuenteForm onClose={closeModals} fuente={selectedFuente} />
        </Modal>
      )}

      {isDeleteModalOpen && selectedFuente && (
        <Modal onClose={closeModals}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Eliminar Fuente</h2>
            <p>¿Desea eliminar la fuente {selectedFuente.title}?</p>
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

      {isMonitoringModalOpen && selectedFuente && (
        <Modal onClose={closeModals}>
          <MonitoringModal
            fuenteId={selectedFuente.id}
            onClose={()=>closeMonitoringModal(selectedFuente.id)}
            
            
          />
        </Modal>
      )}
    </>
  )
}

export default FuenteTable