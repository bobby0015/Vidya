import React, { useEffect } from 'react'
import { useState } from "react"
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md"

type carouselProp = {
  children: React.ReactNode,
  autoSlide?: boolean,
  autoSlideInterval?: number
}

const Slider = ({
  children,
  autoSlide = false,
  autoSlideInterval = 10000
}: carouselProp) => {

  // This is used because the type of the slides can be null or undefined
  const slides = React.Children.toArray(children);
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  },)

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} aria-label="Previous Slide">
          <MdOutlineArrowCircleLeft className='text-white' size={30} />
        </button>
        <button onClick={next} aria-label="Next Slide">
          <MdOutlineArrowCircleRight className='text-white' size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 right-50 left-50">
        <div className="flex items-center justify-center gap-2">
          {
            slides.map((_, i) => (
              <div 
              key={i}
              className={
                `transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'opacity-50'}`
              }></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider
