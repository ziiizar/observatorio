'use server';

import { routes } from "@/constants/routes";
import { axiosInstance } from "@/lib/utils";
import { TSDeleteUserSchema, TSEditUserSchema } from "@/schemas/user";
import { revalidatePath } from "next/cache";

export const updateUser = async (data: TSEditUserSchema) => {
  const { id, email, first_name, last_name, organization, role, username } = data;

  try {
    const response = await axiosInstance.put("edit-user", { id, email, first_name, last_name, organization, role, username });

    if (!response) throw new Error("Error during update");

    // revalidatePath(routes.adminUsers);
    return { success: "Usuario editado con éxito" };
  } catch (error) {
    const err = error as { response?: { data?: { detail?: string } } }; // Casting de error
    return { error: "Update failed:" + (err.response?.data?.detail || (error as Error).message) };
  }
};

export const deleteUser = async (data: TSDeleteUserSchema) => {
  const { id } = data;


  try {
    await axiosInstance.delete(`delete-user/${id}`);
    revalidatePath(routes.adminUsers);
    return { success: "Usuario Eliminado" };
  } catch (error) {
    const err = error as Error; // Casting de error
    return { error: "Error: " + err.message };
  }
};
