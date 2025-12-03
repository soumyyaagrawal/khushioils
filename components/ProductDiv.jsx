import React from 'react'
import Image from 'next/image';

const ProductDiv = ({ eventName, eventDate, imageUrl, description, isLast = false, isActive = true }) => {
  return (
    <div className='min-w-full flex flex-col justify-center items-flex-start'>
      <div className={`text-4xl mt-4 font-semibold text-gray-900 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        {eventName}
      </div>
      <div className="relative mt-8">
        <div 
          style={{ width: isLast ? 'auto' : '100%', right: isLast ? 'auto' : 0 }}
        >
          {isLast && (
            <div className="inline-block">
            
            </div>
          )}
        </div>
        <div className={`pt-2 text-6xl text-gray-900 font-semibold transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
          {eventDate}
        </div>
      </div>
      <div className={`flex flex-row gap-6 mt-6 pr-[200px] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        <div className="w-[30vw] h-auto aspect-square">
          <Image 
            src={imageUrl}
            alt={`${eventName} event`}
            width={600}
            height={600}
            className="object-cover rounded-xl w-full h-full"
            sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 600px"
            priority={false}
          />
        </div>
        <div className="justify-end text-gray-900 flex flex-col text-2xl font-normal w-[70%] ml-16 mr-12">
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProductDiv;