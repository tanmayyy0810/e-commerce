import React from 'react'

const AnnouncementBar = () => {
  const message =
    " 🚚 FREE DELIVERY ABOVE ₹500 • PREMIUM QUALITY • FROZEN TO FRESH • ORDER TODAY • ";

  return (
    <div className="w-full overflow-hidden bg-[#658486] py-1">
      <div className="flex w-max animate-marquee whitespace-nowrap text-white text-xs font-regular tracking-wide">
        <span>{message.repeat(6)}</span>
        <span>{message.repeat(6)}</span>
      </div>
    </div>
  )
}

export default AnnouncementBar