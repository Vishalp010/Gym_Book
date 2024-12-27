import {z} from 'zod'

export const usernameValidation = z
.string()
.min(5,'username must be atleast of 5 characters')
.max(20,'can max upto 20 character only')
.regex(/^[a-zA-Z0-9_]+$/,'username must not contain special character')


export const signUpSchema = z.object({
  username : usernameValidation,
  email : z.string().email({message : 'invalid email address'}),
  password : z.string().min(6,{ message : 'atleast 6 character must be in a password'})
})