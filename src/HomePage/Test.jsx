import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Test = () => {
  const images = [
    'https://i.ibb.co/HC3j8cD/oziel-gomez-L8-0-SAy-ao-Q-unsplash.jpg',
    'https://i.ibb.co/7SPTRMq/jonathan-borba-Owvh-G-6-GTQ-unsplash.jpg',
  ]

  return (
    <>
      <style>{`
        @keyframes smooth-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .smooth-zoom {
          animation: smooth-zoom 15s infinite alternate;
        }
      `}</style>

      <div className='w-full h-[88vh]'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          loop
          className='w-full h-full'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full h-full'>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className='w-full h-full object-cover smooth-zoom'
                />

                {/* Content Container */}
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4'>
                  <div className='space-y-1 md:space-y-2'>
                    <h1 className='font-serif text-white text-2xl md:text-3xl'>
                      <span className='text-[28px] md:text-[38px]'>#1</span> MATRIMONY
                    </h1>
                    <h1 className='text-2xl md:text-4xl font-serif font-bold tracking-wide'>
                      Find your
                    </h1>
                    <h1 className='text-3xl md:text-5xl font-serif font-bold tracking-wide'>
                      <span className='text-[red]'>Right Match</span> here
                    </h1>
                    <h1 className='text-sm md:text-base font-medium tracking-wide pt-2'>
                      Most trusted Matrimony Brand in the World.
                    </h1>
                  </div>

                  <div className='mt-8 bg-black bg-opacity-80 rounded-md p-5 md:p-6 w-full max-w-4xl'>
                    <form className='grid grid-cols-1 md:grid-cols-5 gap-4 text-left'>
                      <div>
                        <label className='text-white block mb-1 text-sm'>I'm looking for</label>
                        <select className='w-full p-2 rounded text-black text-sm'>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>

                      <div>
                        <label className='text-white block mb-1 text-sm'>Age</label>
                        <input
                          type='number'
                          placeholder='Enter age'
                          className='w-full p-2 rounded text-black text-sm'
                        />
                      </div>

                      <div>
                        <label className='text-white block mb-1 text-sm'>Religion</label>
                        <select className='w-full p-2 rounded text-black text-sm'>
                          <option>Hindu</option>
                          <option>Muslim</option>
                          <option>Christian</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className='text-white block mb-1 text-sm'>Location</label>
                        <input
                          type='text'
                          placeholder='City or State'
                          className='w-full p-2 rounded text-black text-sm'
                        />
                      </div>

                      <div className='flex items-end'>
                        <button
                          type='submit'
                          className='w-full p-2 bg-[#9c9898] text-white rounded text-center hover:bg-[#7f7c7c] text-sm'
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Test
