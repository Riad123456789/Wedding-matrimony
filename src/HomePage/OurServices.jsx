import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../public/Animation - 1715767968648.json";
import { GiDiamondRing } from "react-icons/gi"; // Wedding ring icon

const OurServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [paginationItems, setPaginationItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",

  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);


  useEffect(() => {
    if (swiperRef.current) {
      const slidesCount = swiperRef.current.slides.length;
      const items = Array.from({ length: slidesCount }, (_, i) => (
        <button
          key={`pagination-${i}`}
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 transform ${
            activeIndex === i
              ? "border-yellow-500 text-yellow-500 scale-110 animate-pulse"
              : "border-transparent text-white scale-100"
          } hover:scale-110 hover:text-yellow-400`}
          onClick={() => {
            swiperRef.current.slideTo(i);
          }}
        >
          <GiDiamondRing size={20} />
        </button>
      ));
      setPaginationItems(items);
    }
  }, [swiperRef, activeIndex]);
  

  return (
    <div className="bg-black w-full pb-20 pt-24 px-4 lg:px-20 relative">
      <h1 className="text-xl md:text-2xl text-center text-[#f0bb0e] italianno-regular tracking-wide">
        QUICK ACCESS
      </h1>
      <p className="text-3xl md:text-5xl font-medium font-serif text-center text-[#f0bb0e] pt-2">
        Our Services
      </p>
      <div className="flex justify-center">
        <Lottie className="w-40 md:w-52 h-24 md:h-32 -mt-6" animationData={img1} />
      </div>

      <div className="relative mt-5">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          loop
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="mb-8"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="bg-white rounded-md h-96">
              <img
                className="rounded-md h-96 w-full object-cover"
                src={img}
                alt={`service-${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation & Pagination in one row */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-4 ">
          <button
            ref={prevRef}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500 transition md:block hidden" // Hide on small screens
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="flex flex-wrap gap-2">{paginationItems}</div>

          <button
            ref={nextRef}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500 transition md:block hidden" // Hide on small screens
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
