import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-sm leading-6 text-gray-700">

      <h1 className="text-3xl font-bold mb-6 text-black">
        Refund Policy – TajFresh (A Brand of Shri balaji Foods)
      </h1>

      <p className="mb-4">
        We aim to provide a great experience every time here at TajFresh. The best way to ensure a smooth experience is to carefully review our shipping guidelines before placing an order.
      </p>

      <p className="mb-6">
        If you have any issue that is not covered below, please reach out to our customer support team at <strong>[Insert Email Here]</strong> and we will assist you.
      </p>

      <hr className="my-6" />

      {/* 1 */}
      <h2 className="text-xl font-semibold mb-3">1. Shipping Accuracy</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Please ensure your billing and delivery addresses are correct before placing an order.</li>
        <li>We are only responsible for delivery to the address provided at checkout.</li>
        <li>We are not responsible for delays or damage caused due to incorrect address or rerouting by courier partners.</li>
        <li>Delivery is guaranteed only to the address confirmed in the order details.</li>
      </ul>

      <hr className="my-6" />

      {/* 2 */}
      <h2 className="text-xl font-semibold mb-3">2. Cancellation Policy</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Order cancellation is allowed only before the order is packed or processed.</li>
        <li>Once the order has been packed or shipped, cancellation is not allowed.</li>
        <li>To cancel an order, immediately contact customer support or email us at <strong>[Insert Email Here]</strong>.</li>
        <li>We reserve the right to decide whether an order has been processed or not.</li>
      </ul>

      <hr className="my-6" />

      {/* 3 */}
      <h2 className="text-xl font-semibold mb-3">3. Returns & Replacement Policy</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Returns are only accepted at the time of delivery.</li>
        <li>If the product is damaged, melted, or incorrect, you must refuse acceptance at delivery.</li>
        <li>Once the product is accepted and delivery is completed, no returns will be entertained.</li>
        <li>We do not accept returns after delivery due to the perishable nature of frozen food products.</li>
      </ul>

      <hr className="my-6" />

      {/* 4 */}
      <h2 className="text-xl font-semibold mb-3">4. Damaged or Defective Products</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>We take strict measures to ensure safe packaging and quality control.</li>
        <li>If you receive a damaged or defective product, report it immediately with photos.</li>
        <li>Email us at <strong>[Insert Email Here]</strong> with order details and images.</li>
        <li>Our team will review and respond promptly for resolution or replacement.</li>
      </ul>

      <hr className="my-6" />

      {/* 5 */}
      <h2 className="text-xl font-semibold mb-3">5. Replacement Policy</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>We do not entertain any replacement but if item delivered and immediately we get a mail regarding poor quality then we may respond promptly for resolution or replacement.</li>
      </ul>

      <hr className="my-6" />

      {/* 6 */}
      <h2 className="text-xl font-semibold mb-3">6. Payment Policy (Prepaid Orders)</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>We accept 100% secure prepaid payments through UPI, debit/credit cards, net banking, and other digital methods.</li>
        <li>Cash on Delivery (COD) may be available only in selected locations (if enabled).</li>
        <li>Prepaid orders are prioritized for faster processing and delivery.</li>
        <li>Refunds (if applicable) for prepaid orders will be processed to the original payment method only.</li>
      </ul>

      <hr className="my-6" />

      {/* 7 */}
      <h2 className="text-xl font-semibold mb-3">7. No Refund Policy</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Due to the consumable and perishable nature of our products, refunds are not allowed once the order is delivered.</li>
        <li>Refunds are only considered in cases of verified non-delivery or approved order cancellation before dispatch.</li>
      </ul>

      <hr className="my-6" />

      {/* 8 */}
      <h2 className="text-xl font-semibold mb-3">8. Packaging Standards</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Products are carefully packed to maintain quality during transit.</li>
        <li>Each item is secured to avoid damage or leakage.</li>
        <li>Frozen products are packed with temperature-controlled materials where required.</li>
      </ul>

      <hr className="my-6" />

      {/* 9 */}
      <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>

      <p>If you have any questions regarding shipping, cancellation, or returns, please contact us:</p>

      <div className="mt-4">
        <p><strong>TajFresh – Shribalaji Foods Group</strong></p>
        <p>Email: [Insert Email Here]</p>
        <p>Address: [Insert Business Address Here]</p>
      </div>

    </div>
  );
};

export default RefundPolicy;