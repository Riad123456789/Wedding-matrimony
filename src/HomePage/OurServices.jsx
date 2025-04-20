import React, { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { GiDiamondRing } from 'react-icons/gi'
import img1 from '../../public/Animation - 1715767968648.json'

const OurServices = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)
  const [paginationItems, setPaginationItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
      title: 'Wedding Planning',
      description: 'We provide .'
    },
    {
      image:
        'https://i.ibb.co.com/7SPTRMq/jonathan-borba-Owvh-G-6-GTQ-unsplash.jpg',
      title: 'Photography',
      description: 'Capture every '
    },
    {
      image:
        'https://i.ibb.co.com/nPc3hy2/jonathan-borba-9-Paz5wi-MA5c-unsplash.jpg',
      title: 'Catering Services',
      description: 'Delight your guests '
    },
    {
      image: 'https://i.ibb.co.com/dD5yfvv/hisu-lee-FTW8-ADj5igs-unsplash.jpg',
      title: 'Venue Decoration',
      description: 'Elegant and thematic .'
    },
    {
      image: 'https://i.ibb.co.com/qds9K9Z/photo-nic-Qu-dnz-Kqgw-unsplash.jpg',
      title: 'Bridal Makeup',
      description: 'Our professionals .'
    },
    {
      image:
        'https://i.ibb.co.com/bvsvRYc/pre-wedding-photoshoot-ideas-2023-1440x960.jpg',
      title: 'Pre-Wedding Shoot',
      description: 'Cherish the moments '
    }
  ]

  // Fix Swiper navigation after DOM elements are ready
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [swiperRef.current, prevRef.current, nextRef.current])

  // Custom pagination buttons
  useEffect(() => {
    const slidesCount = services.length
    const items = Array.from({ length: slidesCount }, (_, i) => (
      <button
        key={`pagination-${i}`}
        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 transform ${
          activeIndex === i
            ? 'border-yellow-500 text-yellow-500 scale-110 animate-pulse'
            : 'border-transparent text-white scale-100'
        } hover:scale-110 hover:text-yellow-400`}
        onClick={() => swiperRef.current?.slideToLoop(i)}
      >
        <GiDiamondRing size={20} />
      </button>
    ))
    setPaginationItems(items)
  }, [activeIndex])

  return (
    <div className='bg-black w-full pb-20 pt-24 px-4 lg:px-20 relative'>
      <h1 className='text-xl md:text-2xl text-center text-[#f0bb0e] italianno-regular tracking-wide'>
        QUICK ACCESS
      </h1>
      <p className='text-3xl md:text-5xl font-medium font-serif text-center text-[#f0bb0e] pt-2'>
        Our Services
      </p>
      <div className='flex justify-center'>
        <Lottie
          className='w-40 md:w-52 h-24 md:h-32 -mt-6'
          animationData={img1}
        />
      </div>

      <div className='relative mt-5'>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 20 }
          }}
          loop
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          className='mb-8'
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className='relative bg-white rounded-md h-96 overflow-hidden group cursor-pointer'
            >
              <img
                className='rounded-md h-96 w-full object-cover transition-all duration-500 transform group-hover:scale-125'
                src={service.image}
                alt={`service-${index + 1}`}
              />

              <div
                className='absolute bottom-0 left-0 right-0 h-1/2 bg-[#e71b95] opacity-0 group-hover:opacity-80 
            transform group-hover:scale-x-100 group-hover:scale-y-100 scale-x-0 scale-y-0 origin-bottom-right 
            transition-all duration-700 ease-in-out rounded-t-3xl'
              ></div>
  <div
    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white  "
  >
    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
    <p className="text-sm mb-4">{service.description}</p>
    
    {/* Button animation from bottom to center */}
    <button className="border-2 border-[white] hover:bg-yellow-600 text-[white] font-semibold py-2 px-4 rounded-lg ">
      Learn More
    </button>
  </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + Pagination Controls */}
        <div className='flex flex-wrap justify-center items-center gap-10 mt-4'>
          <button
            ref={prevRef}
            className='p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500 transition'
          >
            <FaArrowLeft size={20} />
          </button>

          <div className='flex flex-wrap gap-2'>{paginationItems}</div>

          <button
            ref={nextRef}
            className='p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500 transition'
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurServices
