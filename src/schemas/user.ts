import {z} from 'zod'

export const LoginSchema = z.object({

    //! Agregar validaciones
    username: z.string(),
    password: z.string(),

})

export type TSLoginSchema = z.infer<typeof LoginSchema>


export const SignUpSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    organization: z.string(),
    password: z.string(),
    role: z.string(),
})

export type TSSignUpSchema = z.infer<typeof SignUpSchema>

export const EditUserSchema = z.object({
    id: z.number(),
    email: z.string().email(),
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    organization: z.string(),
    // password: z.string(),
    role: z.string(),
})

export type TSEditUserSchema = z.infer<typeof EditUserSchema>


export const DeleteUserSchema = z.object({
    id: z.string(),
  });
  
  export type TSDeleteUserSchema = z.infer<typeof DeleteUserSchema>;
  