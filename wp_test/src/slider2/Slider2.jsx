"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "../image/Image"

const SlidesPerView2 = () => {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress)
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  return (
    <div className="bg-green-900 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Swiper Section */}
        <div className="mb-8 relative">
          <div className="max-w-5xl mx-auto relative">
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-1 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass:
                  "inline-block w-2 h-2 bg-white/50 rounded-full mx-1 cursor-pointer",
                bulletActiveClass: "!bg-white",
              }}
              className="w-full"
            >
              {[...Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-green-800/30 border border-green-700 rounded-md overflow-hidden">
                    <img
                      src="thubnail-slider-img.png"
                      className="w-full h-40 md:h-60 object-cover"
                      alt={`Adidas footwear ${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-1 text-white"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>

        {/* Cards and Events Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {/* Cards */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-green-800 rounded-md overflow-hidden">
              <img
                src="post-img.png"
                className="w-full h-48 object-cover"
                alt="Sports footwear"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold uppercase">
                  2019 National Champions Crowned at Reebok
                </h3>
                <p className="text-sm mt-2">
                  Membership has its perks. Joining ADIDAS means you can race at your local tracks
                </p>
                <button className="mt-4 uppercase text-sm font-bold">Read More</button>
              </div>
            </div>
          ))}

          {/* Events */}
          <div className="w-full lg:w-64 bg-green-700 rounded-md overflow-hidden">
            <h2 className="bg-green-800 text-white uppercase font-bold p-3 text-center">
              Events
            </h2>
            <div className="p-2 space-y-2">
              {[
                { number: 1, title: "SHOW IN USA", location: "USA" },
                { number: 2, title: "ADIDAS SHOW IN USA", location: "USA" },
                { number: 3, title: "ADIDAS SHOW", location: "USA" },
                { number: 4, title: "ADIDAS IN USA", location: "USA" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 flex-wrap bg-green-800/50 p-2 rounded-sm text-white"
                >
                  <div className="bg-white text-green-800 w-8 h-8 flex items-center justify-center rounded-sm font-bold">
                    {event.number}
                  </div>
                  <div className="text-white text-xs sm:text-center">
                    <h3 className="text-sm font-bold">{event.title}</h3>
                    <p className="text-xs">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Component Section */}
        <div className="mb-8">
          <Image />
        </div>
      </div>
    </div>
  )
}

export default SlidesPerView2
 