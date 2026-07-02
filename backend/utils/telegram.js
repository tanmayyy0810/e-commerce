import axios from "axios";

const sendTelegramMessage = async (message) => {
  try {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(url, {
      chat_id: process.env.TELEGRAM_GROUP_ID,
      text: message,
      parse_mode: "HTML",
    });

    console.log("✅ Telegram notification sent");
  } catch (error) {
    console.error(
      "❌ Telegram Error:",
      error.response?.data || error.message
    );
  }
};

export default sendTelegramMessage;