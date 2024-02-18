import React from "react";
import prize from "../assets/poster.jpeg";
import vector from "../assets/Vector.svg";
import star2 from '../assets/star2.svg'
import cbs from '../assets/cbs.png';
import gmc from '../assets/gmc.png';
import selle from '../assets/selle.png';
import vardiano from '../assets/vardiano.png';
import ccsc from '../assets/favicon.png';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
const Prizes = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section className="w-screen h-full bg-black" id="prizes">
        <div className="w-full h-full flex items-center justify-center py-2 lg:py-6 lg:p-2">
          <div className="w-full h-full flex items-start justify-center flex-row lg:py-4 lg:p-2">
            <div className="w-full h-full flex items-start justify-start lg:w-[65%] flex-col p-6">
              <div className="flex items-center justify-start">
                <h1 className="text-[2rem]  xs:text-[2.7rem] s:text-6xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff]">
                  PRIZES <span className="text-[#d47916]">.</span>
                </h1>
              </div>
              <div className="xs:flex items-center justify-center flex-row w-full md:w-[75%] lg:w-full  my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg ">
                  Prizes includes : • Best Name Registry Category award • Best Girls Team Award
                  Goodies worth 50k Each participant will get premium goodies. Venue - Pierre Hall, Le-corbusier Block, Date - 22/23 Feb 2024.
                  
                </p>
              </div>
              <br />
              <div className="flex items-center justify-start w-full flex-col max-w-4xl lg:w-full">
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    Exciting Prizes
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    2.2Lakh
                  </h1> */}
                </div>
                <div className="flex items-center justify-between w-full flex-row border-white px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    Fun activies
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    1Lakh
                  </h1> */}
                </div>
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    Goodies worth 50k
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    1Lakh
                  </h1> */}
                </div>
              </div>
            </div>
            <div className="lg:flex hidden items-center justify-start w-[35%] flex-col p-4">
              <div className="flex items-center justify-center p-2 rounded-tl-[3.5rem] ">
                <img src={prize} alt="prize" className="h-80 w-80 rounded-tl-[3.5rem] ]" />
              </div>
              <div className="flex items-center justify-center flex-row w-full sm:p-2 my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg ">
                It will be a 2 day event, team of 5 consisting of the CEO, CFO, COO, CMO and CTO, all from CSE department. Students are independent to make their own team and choose their problem statement which they will solve using their product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen md:h-screen bg-black">
        <div className="w-full h-full flex items-center justify-center p-4 lg:p-6">
          <div className="w-full h-full flex items-start justify-center flex-row  s:p-4 md:p-6 lg:p-8 my-4">
            <div className="flex items-center justify-center bg-[#292929] p-4 md:p-6 sm:py-12 w-full h-full relative">
              <div className="flex items-center justify-center flex-row my-4 w-full s:max-w-7xl s:w-[85%] md:w-[90%]">
                <p className="items-center justify-center inline-block text-center gap-4 text-2xl xs:text-3xl sm:text-4xl p-1 sm:p-2 md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black w-full">
                	GUTS BUILD <span className="text-[#d47916]">EMPIRES</span>, NO DOUBTS. 
                  EVERY SETBACK IS A{" "}
                  <span className="text-[#d47916]">STEPPING STONE</span>, EVERY STORM A{" "}
                  <span className="text-[#d47916]">TEST. </span>
                  CLIMB ON, <span className="text-[#d47916]">FOUNDER</span>, YOUR SUMMIT AWAITS.
                </p>
                <img
                  src={vector}
                  alt="vector"
                  className="absolute top-0 left-0 w-8 h-8 sm:h-14 sm:w-14"
                />
                <img
                  src={vector}
                  alt="vector"
                  className="absolute bottom-0 right-0 w-8 h-8 sm:h-14 sm:w-14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-full md:overflow-hidden relative bg-black">
      <div className="md:h-screen h-full flex items-center justify-center w-full z-[10] p-2">
                           
                           <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation={false}
      slidesPerView={5}
      spaceBetween={50}
      autoplay={{ delay: 4500 }}
      breakpoints={{
        300:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
      <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">
        
      <div className="flex items-center  justify-center bg-[#ffffff] rounded-md p-2 md:p-4"> <img src={ccsc} alt="ccsc" className="md:h-24 h-14 xs:h-16 s:h-20 w-auto"/> </div>
      </SwiperSlide>
      <SwiperSlide className="s:p-4 xs:p-7 p-4 xl:hidden flex items-center justify-center flex-row">
              
      <div className="flex items-center  justify-center bg-[#ffffff] rounded-md p-2 md:p-4"> <img src={cbs} alt="ccsc" className="md:h-24 h-14 xs:h-16 s:h-20 w-auto"/> </div>
     
      </SwiperSlide>
     
      <SwiperSlide className="s:p-4 xs:p-7 p-4 xl:hidden flex items-center justify-center flex-row">
        
      <div className="flex items-center  justify-center bg-[#ffffff] rounded-md p-2 md:p-4"> <img src={selle} alt="ccsc" className="md:h-24 h-14 xs:h-16 s:h-20 w-auto"/> </div>
      
      </SwiperSlide>
      <SwiperSlide className="s:p-4 xs:p-7 p-4 xl:hidden flex items-center justify-center flex-row">
        
       
      <div className="flex items-center  justify-center bg-[#ffffff] rounded-md p-2 md:p-4"> <img src={gmc} alt="ccsc" className="md:h-24 h-14 xs:h-16 s:h-20 w-auto"/> </div>
      
      </SwiperSlide>
      </div>
      </Swiper>
                           
                            
                            
                            
                         
                   </div>
      <div className="h-screen hidden md:flex items-center justify-center absolute top-0 bottom-0 left-0 right-0  w-full ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[45deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d47916] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR STARTUP</h1></marquee></div>
                   </div>
      <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-45deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d47916] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR STARTUP</h1></marquee></div>
                   </div>
      <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-135deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d47916] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR STARTUP</h1></marquee></div>
                   </div>
      <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[135deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d47916] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR STARTUP</h1></marquee></div>
                   </div>
      
      </section>
    </>
  );
};

export default Prizes;
