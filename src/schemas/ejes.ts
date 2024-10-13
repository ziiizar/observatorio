import { z } from "zod";

export const InsertEjeSchema = z.object({
    nombre_eje: z.string().min(1, { message: "El nombre no puede estar vacío." }),
    esta_activo: z.boolean(),
});
export type TSInsertEjeSchema = z.infer<typeof InsertEjeSchema>;

export const UpdateEjeSchema = z.object({
  id_eje: z.number(),
  nombre_eje: z.string().min(1, { message: "El nombre no puede estar vacío." }),
    esta_activo: z.boolean(),
});

export type TSUpdateEjeSchema = z.infer<typeof UpdateEjeSchema>;


export const DeleteEjeSchema = z.object({
  id_eje: z.number(),
});

export type TSDeleteEjeSchema = z.infer<typeof DeleteEjeSchema>;
