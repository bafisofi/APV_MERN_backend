import nodemailer from "nodemailer";

const emailOlvidePassword =async (datos)=>{
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS 
    }
  });

  const {email, nombre, token} = datos;

  //Enviar email

  const info = await transporter.sendMail({
    from: "APV-Veterinary Patient Manager",
    to:email,
    subject:"Reset your password",
    text:'Reset your password',
    html:`<p>Hi! ${nombre}, you have requested to reset your password.</p>

    <p>Please click on the following link to generate a new password:
    <a href="${process.env.FRONTEND_URL}/password-forgotten/${token}">Reset Password </a></p>
    
    <p>If you didn't create this account, you can ignore this message.</p>`,
  })

  console.log("mensaje enviado: %s", info.messageId);
}
export default emailOlvidePassword