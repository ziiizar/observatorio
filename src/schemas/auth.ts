import {z} from 'zod'

export const LoginSchema = z.object({

    //! Agregar validaciones
    username: z.string(),
    password: z.string(),

})

export type TSLoginSchema = z.infer<typeof LoginSchema>