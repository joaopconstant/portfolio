"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  text: string
) => {
  await resend.emails.send({
    to: ["joaoconstantdev@gmail.com"],
    from: "Contato Portifolio <onboarding@resend.dev>",
    subject: `${subject} - ${name} - ${email}`,
    html: `<div>
    <p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Tipo de Projeto: ${subject}</p>
    <p>Mensagem: ${text}</p>
    </div>`,
  });
};
