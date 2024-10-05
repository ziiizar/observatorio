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

const UsersTable = ({
  currentPage,
  limit,
  users,
}: {
  currentPage: number;
  limit: number;
  users: User[];
}) => {
  return (
     
        <Table className="">
          <TableHead className="">
            <TableRow>
              <TableHeadRow className="rounded-tl-xl ">Acciones</TableHeadRow>
              <TableHeadRow className="">Nombre</TableHeadRow>
              <TableHeadRow>Apellidos</TableHeadRow>
              <TableHeadRow>Correo</TableHeadRow>
              <TableHeadRow>Organismo</TableHeadRow>
              <TableHeadRow className="rounded-tr-xl">Admin</TableHeadRow>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                className="border-b-2 border-dusty-gray-300"
                key={user.id}
              >
                <TableCell className="border-l-2 border-dusty-gray-300">
                  {
                    <div className="flex gap-2">
                      <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">
                        x
                      </Button>
                      <Button className="border-2 size-8 rounded-full border-burgundy-900 text-burgundy-900">
                        E
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
                <TableCell className="border-x-2 border-dusty-gray-300">
                  {user.userprofile?.role}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
     
  );
};

export default UsersTable;