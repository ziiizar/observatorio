import { z } from "zod";

export const LoginSchema = z.object({
  //! Agregar validaciones
  username: z
    .string()
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre de usuario no puede exceder los 20 caracteres",
    }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[a-z]/, {
      message: "La contraseña debe tener al menos una letra minúscula",
    })
    .regex(/[A-Z]/, {
      message: "La contraseña debe tener al menos una letra mayúscula",
    })
    .regex(/\d/, { message: "La contraseña debe tener al menos un número" }),
});

export type TSLoginSchema = z.infer<typeof LoginSchema>;

export const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Debe ser un email válido" }),
    username: z
      .string()
      .min(3, {
        message: "El nombre de usuario debe tener al menos 3 caracteres",
      })
      .max(20, {
        message: "El nombre de usuario no puede exceder los 20 caracteres",
      }),
    first_name: z.string().min(1, { message: "El nombre es obligatorio" }),
    last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
    organization: z.string(),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
      .regex(/[a-z]/, {
        message: "La contraseña debe tener al menos una letra minúscula",
      })
      .regex(/[A-Z]/, {
        message: "La contraseña debe tener al menos una letra mayúscula",
      })
      .regex(/\d/, { message: "La contraseña debe tener al menos un número" }),
    confirmPassword: z
      .string()
      .min(8, { message: "La confirmación de la contraseña es obligatoria" }),
    role: z.string().min(1, { message: "El rol es obligatorio" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });
export type TSSignUpSchema = z.infer<typeof SignUpSchema>;

export const EditUserSchema = z.object({
  id: z.number(),
  email: z.string().email({ message: "Debe ser un email válido" }),
  username: z
    .string()
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre de usuario no puede exceder los 20 caracteres",
    }),
  first_name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  organization: z.string(),

  role: z.string().min(1, { message: "El rol es obligatorio" }),
});

export type TSEditUserSchema = z.infer<typeof EditUserSchema>;

export const DeleteUserSchema = z.object({
  id: z.string(),
});

export type TSDeleteUserSchema = z.infer<typeof DeleteUserSchema>;
