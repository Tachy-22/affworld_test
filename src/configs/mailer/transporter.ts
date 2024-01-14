import nodemailer from "nodemailer";

const email = process.env.MAILER_EMAIL;
const pass = process.env.MAILER_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
};
