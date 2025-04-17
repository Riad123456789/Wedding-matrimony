import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from "../../public/Animation - 1715767968648.json";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




const OurServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [paginationItems, setPaginationItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);



  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);


  useEffect(() => {
    if (swiperRef.current) {
      const slidesCount = swiperRef.current.slides.length;
      const items = [];
      for (let i = 0; i < slidesCount; i++) {
        items.push(
          <button
            key={`pagination-${i}`}
            className={`px-3 py-1 rounded-full focus:outline-none ${activeIndex === i ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'}`}
            onClick={() => {
              swiperRef.current.slideTo(i);
            }}
          >
            {i + 1}
          </button>
        );
      }
      setPaginationItems(items);
    }
  }, [swiperRef, activeIndex]);
  return (
    <div className="bg-black w-full pb-32 pt-24 relative ">
      <h1 className="text-2xl font-sans text-center text-[#f0bb0e] italianno-regular tracking-wide">QUICK ACCESS</h1>
      <p className="text-5xl font-medium font-serif text-center text-[#f0bb0e] pt-2">Our Services</p>
      <div className="flex justify-center">
        <Lottie className="w-52 h-32 -mt-6 mr-3" animationData={img1}></Lottie>
      </div>

      <div className="mt-5 ">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="mb-40 overflow-scroll"
        >
          {/* Swiper slides */}
          {/* <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="bg-white rounded-md h-96 w-52">
            <img className="rounded-md h-96 bg-cover bg-center" src="https://i.ibb.co/ChKzv4T/wedding-dreamz-k-Thpa-ZCb-JGA-unsplash.jpg" alt="" />
          </SwiperSlide> */}

        </Swiper>


        <div
          ref={prevRef}
          className="custom-prev absolute transform -translate-y-1/2  z-10 cursor-pointer p-2  text-white  left-96 w-32 bottom-36"
        >
          <FaArrowLeft size={30} />
        </div>
        <div
          ref={nextRef}
          className="custom-next absolute  transform -translate-y-1/2  z-10 cursor-pointer p-2  text-white right-96 bottom-36"
        >
          <FaArrowRight size={30} />
        </div>


        <div className="flex justify-center -mt-4 space-x-4">
          {paginationItems}
        </div>


      </div>
    </div>
  );
};

export default OurServices;
