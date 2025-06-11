import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const SlidesPerView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="h-screen w-full"
      >
        <SwiperSlide>
          {/* Parent container for the entire slide */}
          <div className="relative w-full h-full bg-green-800/30">
            {/* Background overlay image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('hero-bg.png')" }}
            />
            {/* Foreground content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 gap-8 h-full text-white">
              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  GET READY FOR NEW ADIDAS BANDS
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Adidas tracks all begin with a starting gate and end with a finish line, 
                  but everything in between varies from track to track. Because no two 
                  tracks are alike, this action sport keeps you on your toes wherever you are racing.
                </p>
              </div>

              {/* Shoe Image & Play Button */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={openVideoModal}
                  className="absolute text-3xl text-white rounded-full p-3 hover:bg-green-700/90 transition"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="hero-bg.png"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="zig-zag-img-2.png"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src="hero-bg.png"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-black p-4">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-white"
            >
              Close
            </button>
            <video controls autoPlay className="w-full">
              <source src="https://youtu.be/864B4rzoPog?si=AgBWZY2VAxTT1O-2"  />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default SlidesPerView;
