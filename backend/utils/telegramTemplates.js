// =========================
// ORDER NOTIFICATION
// =========================

export const orderNotification = (order) => {
  const orderItems = order.items
    .map(
      (item) =>
        `• ${item.name} (${item.weights}) × ${item.quantity}`
    )
    .join("\n");

  return `

━━━━━━━━━━━━━━━━━━  
🛒 <b>NEW ORDER RECEIVED</b>
━━━━━━━━━━━━━━━━━━

👤 <b>Customer:</b> ${order.address.firstName} ${order.address.lastName}

📞 <b>Phone:</b> ${order.address.phone}

📧 <b>Email:</b> ${order.address.email}

📍 <b>Address:</b>
${order.address.street}
${order.address.city}, ${order.address.state}
${order.address.country} - ${order.address.zipcode}

💰 <b>Total Amount:</b> ₹${order.amount}

💳 <b>Payment Method:</b> ${order.paymentMethod}

🆔 <b>Order ID:</b> <code>${order._id}</code>

📦 <b>Items:</b>
${orderItems}

🕒 ${new Date(order.date).toLocaleString("en-IN")}
`;
};

// =========================
// CAREER NOTIFICATION
// =========================

export const careerNotification = (application) => {
  return `
💼 <b>NEW CAREER APPLICATION</b>

👤 <b>Name:</b> ${application.fullName}

📧 <b>Email:</b> ${application.email}

📞 <b>Phone:</b> ${application.phone}

🛠 <b>Skills:</b> ${application.skills}

💡 <b>Contribution:</b> ${application.contribution}

🕒 ${new Date().toLocaleString("en-IN")}
`;
};

// =========================
// SUBSCRIBER NOTIFICATION
// =========================

export const subscriberNotification = (subscriber) => {
  return `
📧 <b>NEW NEWSLETTER SUBSCRIBER</b>

📩 <b>Email:</b>

${subscriber.email}

🕒 ${new Date().toLocaleString("en-IN")}
`;
};