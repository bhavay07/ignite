import React from 'react'
import person1 from '../assets/person1_rep.jpg'
import person2 from '../assets/person2_rep.jpg'
import person3 from '../assets/person3_rep.jpg'
import person4 from '../assets/person4_rep.jpg'
import person5 from '../assets/person5_rep.jpg'
import person6 from '../assets/person6_rep.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
const OurTeam = () => {

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <section className="w-screen h-full bg-black" id="team">
      <div className="w-full h-full flex items-center justify-center flex-col py-4 lg:p-2">
        <div className="w-full h-full flex items-start justify-center flex-row py-2 lg:p-2">
          <div className="w-full h-full flex items-start justify-start flex-col p-6">
            <div className="flex items-center justify-start">
              <h1 className='text-[2rem]  xs:text-[2.7rem] s:text-6xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#e1e1e1] whitespace-nowrap'>PAST EVENTS <span className="text-[#d47916]">.</span></h1>
            </div>
            <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center w-full py-8 my-6'>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person6} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person1} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person5} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person2} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person3} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden relative'>
                <img src={person4} loading="lazy" alt="ourteam" className="xl:h-[40rem] h-[25rem] w-[20rem] md:h-[24rem] md:w-auto group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </div>

          </div>
        </div>
        <div className="flex md:hidden items-center justify-start w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            slidesPerView={5}
            spaceBetween={50}
            navigation={false}
            autoplay={{ delay: 4500 }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
          >

            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
              <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                <img src={person2} loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-center ">
              <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                <img src={person4} loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-center ">
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden h-[28rem]  w-auto relative'>
                <img src={person3} loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-center ">
              <div className='flex items-center justify-center grid-cols-1 group overflow-hidden h-[28rem]  w-auto relative'>
                <img src={person2} loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-center ">
              <div className='flex items-center justify-center grid-cols-1 h-[28rem] w-auto group overflow-hidden relative'>
                <img src={person1} loading="lazy" alt="ourteam" className="w-full h-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-center ">
              <div className='flex items-center justify-center grid-cols-1 h-[28rem] w-auto group overflow-hidden relative'>
                <img src={person5} loading="lazy" alt="ourteam" className="w-full h-full group-hover:scale-[1.2] transition duration-300 ease-in-out" />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>

    </section>
  )
}

export default OurTeam