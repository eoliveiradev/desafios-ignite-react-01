'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { ReactNode } from 'react'

interface SliderProps {
  children: ReactNode[]
  width: string
  height: string
}

export const Slider = (props: SliderProps) => {
  const { children, height, width } = props

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      style={{
        width,
        height,
      }}
    >
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}
