import React from 'react'

const ScrollingNav = ({newsItems}) => {
  return (
    <div className="bg-gray-200 text-black overflow-hidden">
    <div className="flex animate-marquee">
        {newsItems.map((news, index) => (
            <span key={index} className="px-4 py-2">{news}</span>
        ))}
    </div>
</div>

  )
}

export default ScrollingNav;
