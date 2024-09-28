import {z} from 'zod'

export const LoginSchema = z.object({

    //! Agregar validaciones
    username: z.string(),
    password: z.string(),

})

export type TSLoginSchema = z.infer<typeof LoginSchema>


export const SignUpSchema =z.object({
    adminId: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    organization: z.string(),
    password: z.string(),
    rol: z.string(),
})

export type TSSignUpSchema = z.infer<typeof SignUpSchema>
