import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verficationEmail";

export async function sendVerificationEmail(
  email:string,
  username : string,
  verifyCode :string
):Promise<void>{
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'GYM_BOOK | verification code',
      react: VerificationEmail({username,otp: verifyCode }),
      
  })
}catch (error) {
    console.error('error sending verificatoin email',error)
  }
}
