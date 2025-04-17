import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper/modules'

const Banner2 = () => {
  return (
    <div className='h-[95vh]  '>
      <Swiper
        zoom={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className=' h-full w-full'
      >
        <SwiperSlide>
          <div className='test1 h-full w-full '>
            <div className='w-full h-full  bg-gradient-to-t from-black to-black opacity-60 '></div>
          </div>

          <div className=' w-full  absolute top-4 md:top-8 lg:top-14 z-20'>
            <div className='text-center space-y-1 md:space-y-2'>
              <h1 className=' font-serif text-white'>
                <span className='text-[38px]'>#1</span> MATRIMONY
              </h1>
              <h1 className=' text-3xl md:text-4xl font-serif text-white font-bold tracking-wide'>
                Find your
              </h1>
              <h1 className='text-4xl md:text-5xl font-serif text-white font-bold tracking-wide'>
                <span className='text-[red]'>Right Match</span> here
              </h1>
              <h1 className='text-white text-sm md:text-base font-medium tracking-wide pt-2'>
                Most trusted Matrimony Brand in the World.
              </h1>
            </div>

            <div className='mx-10 mt-8 bg-[#000000] rounded-md mb-5'>
              <div className='px-10 py-7 space-y-3'>
                <div className='px-3 py-3 rounded-sm  bg-white'>I'm looking for</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Age</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Religion</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Location</div>
                <div className='px-3 py-3 rounded-sm text-center bg-[#9c9898] text-white'>Search</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='test2 h-full w-full '>
            <div className='w-full h-full  bg-gradient-to-t from-black to-black opacity-60 '></div>
          </div>

          <div className=' w-full absolute top-5 md:top-8 lg:top-14 z-20'>
            <div className='text-center space-y-1 md:space-y-2'>
              <h1 className=' font-serif text-white'>
                <span className='text-[38px]'>#1</span> MATRIMONY
              </h1>
              <h1 className=' text-3xl md:text-4xl font-serif text-white font-bold tracking-wide'>
                Find your
              </h1>
              <h1 className='text-4xl md:text-5xl font-serif text-white font-bold tracking-wide'>
                <span className='text-[red]'>Right Match</span> here
              </h1>
              <h1 className='text-white text-sm md:text-base font-medium tracking-wide pt-2'>
                Most trusted Matrimony Brand in the World.
              </h1>
            </div>

            <div className='mx-10 mt-8 bg-[#000000] rounded-md '>
              <div className='px-10 py-7 space-y-3'>
                <div className='px-3 py-3 rounded-sm  bg-white'>I'm looking for</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Age</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Religion</div>
                <div className='px-3 py-3 rounded-sm  bg-white'>Location</div>
                <div className='px-3 py-3 rounded-sm text-center bg-[#9c9898]'>Search</div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

    
      </Swiper>
    </div>
  )
}

export default Banner2
