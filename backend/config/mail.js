import nodemailer from "nodemailer";

const emailUser = (process.env.EMAIL_USER || "").trim();
const emailPass = (process.env.EMAIL_PASS || "").replace(/\s/g, "");
const smtpPort = Number(process.env.SMTP_PORT || 465);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    family: 4,
    auth: {
        user: emailUser,
        pass: emailPass
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
});

const sendMail = async (mailOptions) => {
    if (!emailUser || !emailPass) {
        throw new Error("Email credentials are not configured");
    }

    return transporter.sendMail({
        from: `"Shri Balaji Foods" <${emailUser}>`,
        ...mailOptions
    });
};

export { sendMail };
export default transporter;
