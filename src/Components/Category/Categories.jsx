import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle";

const Categories = () => {
  const breakpoints = {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <section>
      
        <SectionTitle
          heading="ORDER ONLINE"
          subHeading="From 11:00am to 10:00pm"
        ></SectionTitle>

        <Swiper
        
          spaceBetween={30}
          centeredSlidesBounds={true}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={breakpoints}
          className="mySwiper mb-10"
        
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/zf9phTbZ/slide1.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded ">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/VNSD5KNW/slide2.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="md:text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded">
              Soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/1twBr4wg/slide3.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="md:text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded">
              Pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/jdZXXpwh/slide4.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="md:text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded">
              desserts
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/1twBr4wg/slide3.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="md:text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/VNSD5KNW/slide2.jpg"
              className="cursor-pointer relative"
              alt=""
            />
            <h1 className="md:text-2xl font-medium absolute bottom-4 left-4 text-white uppercase bg-black bg-opacity-10 drop-shadow-2xl rounded">
              Soups
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Categories;
