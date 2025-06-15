"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react"
import Image from "../image/Image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import Card from "../card/Card"
import Card from "../component/Card"
import Event from "../component/Event"  

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
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 px-4 w-full max-w-6xl mx-auto">
  <div className="w-full lg:w-2/3 py-8">

        {/* Swiper Section */}
        <div className="mb-10 relative">
          <div className="max-w-2xl  mx-auto relative">
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-1 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={12}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
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
                  <div className="bg-green-800/30 border border-green-700  overflow-hidden flex justify-center items-center p-3">
                    <img
                      src="thubnail-slider-img.png"
                      className="w-40 h-30 object-cover"
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
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <hr className="text-white mt-6 mb-6" />
<Card/>
<Image/>
      </div>
      <div className=" mt-10">
     
      <Event/>
      </div>
    </div>
  )
}

export default SlidesPerView2
