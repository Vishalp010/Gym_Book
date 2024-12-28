import {z} from 'zod'

export const signInSchema = z.object({
  identifier : z.string(),    //identifier are the term like username,registeredname,email etc...
  password : z.string(), 
})