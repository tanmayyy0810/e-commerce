import nodemailer from "nodemailer";
import axios from "axios";

const emailUser = (process.env.EMAIL_USER || "").trim();
const emailPass = (process.env.EMAIL_PASS || "").replace(/\s/g, "");
const emailFromName = process.env.EMAIL_FROM_NAME || "Shri Balaji Foods";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const brevoApiKey = (process.env.BREVO_API_KEY || "").trim();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort !== 465,
    family: 4,
    auth: {
        user: emailUser,
        pass: emailPass
    },
    connectionTimeout: 7000,
    greetingTimeout: 7000,
    socketTimeout: 10000
});

const sendMail = async (mailOptions) => {
    if (brevoApiKey) {
        if (!emailUser) {
            throw new Error("Sender email is not configured");
        }

        const recipients = Array.isArray(mailOptions.to)
            ? mailOptions.to
            : String(mailOptions.to).split(",").map((email) => email.trim()).filter(Boolean);

        await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    name: emailFromName,
                    email: emailUser
                },
                to: recipients.map((email) => ({ email })),
                subject: mailOptions.subject,
                htmlContent: mailOptions.html,
                textContent: mailOptions.text
            },
            {
                headers: {
                    "api-key": brevoApiKey,
                    "content-type": "application/json",
                    accept: "application/json"
                },
                timeout: 10000
            }
        );
        return;
    }

    if (!emailUser || !emailPass) {
        throw new Error("Email credentials are not configured");
    }

    return transporter.sendMail({
        from: `"${emailFromName}" <${emailUser}>`,
        ...mailOptions
    });
};

export { sendMail };
export default transporter;
