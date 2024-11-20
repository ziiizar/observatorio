import { z } from "zod";

// Esquema para el formulario de Boletín
export const CreateBoletinSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"), 
  image: z.instanceof(File).optional(), // Archivo opcional
  theme: z.coerce.number().positive("El eje temático es obligatorio"), // Validar un ID positivo
  published_by: z.coerce.number().positive(), // ID del usuario creador
  labels: z.array(z.string()).optional(), // Etiquetas como array opcional
  content: z.string().min(1, "El contenido no puede estar vacío"),
  attached_document: z.instanceof(File).optional(), // Documento opcional
});

export type TSCreateBoletinSchema = z.infer<typeof CreateBoletinSchema>;
