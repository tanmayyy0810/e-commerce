import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-sm leading-6 text-gray-700">

      <h1 className="text-3xl font-bold mb-6 text-black">
        Shipping Policy – TajFresh (A Brand of Shri balaji Foods)
      </h1>

      <p className="mb-4">
        This Shipping Policy explains how TajFresh processes, packs, and delivers frozen food products across India and selected international locations.
      </p>

      <p className="mb-6">
        By placing an order with us, you agree to the terms mentioned in this Shipping Policy.
      </p>

      <hr className="my-6" />

      {/* 1 */}
      <h2 className="text-xl font-semibold mb-3">1. Order Processing & Delivery Process</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Once an order is placed, it is processed by our system for verification.</li>
        <li>Products are carefully inspected for quality and temperature compliance.</li>
        <li>After passing quality checks, items are securely packed in insulated packaging.</li>
        <li>Orders are handed over to trusted delivery partners for shipment.</li>
        <li>Delivery partners will attempt delivery at your provided address and time.</li>
        <li>If delivery cannot be completed, they may contact you for coordination.</li>
      </ul>

      <hr className="my-6" />

      {/* 2 */}
      <h2 className="text-xl font-semibold mb-3">2. Delivery Timeline (Frozen Products)</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Most orders are dispatched within 1–4 business days.</li>
        <li>Delivery is typically completed within 24–36 hours after dispatch for frozen items.</li>
        <li>Delivery may be delayed during high-demand periods, festivals, or sale events.</li>
        <li>Remote locations may experience slightly longer delivery times.</li>
        {/* <li>International shipments may be delayed due to customs or logistics conditions.</li> */}
      </ul>

      <hr className="my-6" />

      {/* 3 */}
      <h2 className="text-xl font-semibold mb-3">3. Packaging Standards</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>All products are packed in insulated boxes to maintain frozen conditions.</li>
        <li>Each item is individually wrapped using protective materials.</li>
        <li>Fragile items are secured with additional bubble wrap protection.</li>
        <li>Gel ice packs or cooling materials may be used to maintain temperature.</li>
        <li>We ensure packaging is leak-proof and temperature-resistant.</li>
      </ul>

      <hr className="my-6" />

      {/* 4 */}
      <h2 className="text-xl font-semibold mb-3">4. Important Delivery Acceptance Rules</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Do not accept the package if the outer packaging is torn or damaged.</li>
        <li>Do not accept the delivery if the product appears fully melted or spoiled.</li>
        <li>Check the package condition before signing the delivery receipt.</li>
        <li>If any damage is found, immediately report it to the delivery partner and customer support.</li>
        <li>Once accepted without complaint, responsibility for condition shifts to the customer.</li>
      </ul>

      <hr className="my-6" />

      {/* 5 */}
      <h2 className="text-xl font-semibold mb-3">5. Shipping Coverage</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>We currently deliver across in Agra and nearby cities.</li>
        {/* <li>Selected international delivery is available in limited regions.</li> */}
        <li>New shipping locations may be added in the future.</li>
      </ul>

      <hr className="my-6" />

      {/* 6 */}
      <h2 className="text-xl font-semibold mb-3">6. Tracking Your Order</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Once shipped, tracking details will be shared via email or SMS.</li>
        <li>Tracking becomes active within 24 hours of dispatch.</li>
        
      </ul>

      <hr className="my-6" />

      {/* 7 */}
      <h2 className="text-xl font-semibold mb-3">7. Shipping Charges</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Shipping charges may apply depending on location and order value.</li>
        <li>Free shipping may be available on selected order values or promotions.</li>
        <li>Final shipping charges (if applicable) are shown at checkout.</li>
      </ul>

      <hr className="my-6" />

      {/* 8 */}
      <h2 className="text-xl font-semibold mb-3">8. Special Conditions for Frozen Products</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>Products are temperature-sensitive and must be stored immediately upon delivery.</li>
        <li>Customers are advised to refrigerate or freeze items immediately after receipt.</li>
        <li>We are not responsible for spoilage due to delayed unpacking after delivery.</li>
        <li>Quality is guaranteed only if the package is accepted in proper condition.</li>
      </ul>

      <hr className="my-6" />

      {/* 9 */}
      <h2 className="text-xl font-semibold mb-3">9. Failed Delivery Attempts</h2>

      <ul className="list-disc pl-6 space-y-1">
        <li>If delivery fails due to incorrect address or unavailability, re-delivery may be attempted.</li>
        <li>Additional charges may apply for repeated delivery attempts.</li>
        <li>Perishable items may not be eligible for extended holding time.</li>
      </ul>

      <hr className="my-6" />

      {/* Contact */}
      <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>

      <p>If you have any questions regarding shipping or delivery, please contact us:</p>

      <div className="mt-4">
        <p><strong>TajFresh – Shribalaji Foods Group</strong></p>
        <p>Email: [Insert Email Here]</p>
        <p>Address: [Insert Business Address Here]</p>
      </div>

    </div>
  );
};

export default ShippingPolicy;