import { z } from "zod";

export const InsertFuenteSchema = z.object({
  title: z.string().min(1, { message: "El título no puede estar vacío." }),
  organization: z.string().min(1, { message: "La organización no puede estar vacía." }),
  editores: z.string().min(1, { message: "El editor no puede estar vacío." }),
  frequency: z.coerce.number().min(1, { message: "La frecuencia debe ser al menos 1." }),
  url: z.string().url({ message: "Debe ser una URL válida." }),
  materia: z.string().min(1, { message: "La materia no puede estar vacía." }),
  id_eje: z.string().min(1, { message: "Debe seleccionar un eje temático." }),
  is_monitoring: z.boolean(),
});

export type TSInsertFuenteSchema = z.infer<typeof InsertFuenteSchema>;

export const UpdateFuenteSchema = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "El título no puede estar vacío." }),
  organization: z.string().min(1, { message: "La organización no puede estar vacía." }),
  editores: z.string().min(1, { message: "El editor no puede estar vacío." }),
  frequency: z.coerce.number().min(1, { message: "La frecuencia debe ser al menos 1." }),
  url: z.string().url({ message: "Debe ser una URL válida." }),
  materia: z.string().min(1, { message: "La materia no puede estar vacía." }),
  id_eje: z.string().min(1, { message: "Debe seleccionar un eje temático." }),
  is_monitoring: z.boolean(),
});

export type TSUpdateFuenteSchema = z.infer<typeof UpdateFuenteSchema>;


export const DeleteFuenteSchema = z.object({
  id: z.number(),
});

export type TSDeleteFuenteSchema = z.infer<typeof DeleteFuenteSchema>;
