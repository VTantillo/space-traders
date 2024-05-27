import { z } from 'zod'
import { FactionSymbolSchema } from '../faction/faction.types'

export const RegistrationFormSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    // .min(8, 'Password must have more than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    faction: FactionSymbolSchema,
    symbol: z.string().min(1, 'Must have a name'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
export type RegistrationForm = z.infer<typeof RegistrationFormSchema>

export const LoginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
})
export type LoginForm = z.infer<typeof LoginFormSchema>
