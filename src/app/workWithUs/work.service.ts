import { Injectable } from '@angular/core';

/* import nodemailer from 'nodemailer' */
/*
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "delgadofloresarlintonarturo@gmail.com",
    pass: "jn7jnAPss4f63QBp6D",
  },
}) */

@Injectable({
  providedIn: 'root'
})

export class WorkService {


  constructor() { }



/*   async sendEmail(data:any) {
    const {email,message,...restData} =data
    const info = await  transporter.sendMail({
      from: `<${email}>`, // sender address
      to: "delgadofloresarlintonarturo@gmail.com", // list of receivers
      subject: "Nuevo Cliente ✔", // Subject line
      text: `${restData}`, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

  } */

}
