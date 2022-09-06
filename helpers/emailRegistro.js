import nodemailer from "nodemailer";

const emailRegistro =async (datos)=>{
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
    subject:"Verify your APV account",
    text:'Verify your APV account',
    html:`<p>${nombre}, please verify your account in APV.</p>
    <p>Your account is ready, just check it on the following link:
    <a href="${process.env.FRONTEND_URL}/confirm/${token}">Check Account </a></p>
    
    <p>If you didn't create this account, you can ignore this message.</p>`,
  })

  console.log("mensaje enviado: %s", info.messageId);
}
export default emailRegistro