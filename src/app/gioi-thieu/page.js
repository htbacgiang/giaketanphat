import React from 'react'
import Hero from '@/src/components/About/Hero'
import Story from '@/src/components/About/Story'
import WhyUs from '@/src/components/About/WhyUs'
import Testimonlal from '@/src/components/Testimonlal'

export const metadata = {
  title: "Giới thiệu về Giá Kệ Siêu Thị Tân Phát",
  description: `Here are some details about my self.`,
};
const page = () => {
  return (

    <>
    <Hero className=''/>
    <Story className='mt-5' />
    <WhyUs className='mt-5' />
    <Testimonlal clasName='' />

    </>
  )
}

export default page