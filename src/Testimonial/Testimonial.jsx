import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../Components/SectionTitle";
import { useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios";
const Testimonial = () => {
  const [reviews, setReview] = useState([]);
  const axios = UseAxios();
  console.log(reviews);
  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      setReview(res.data);
    });
  }, [axios]);
  return (
    <div className="mx-auto max-w-screen-xl px-4 my-14">
      <SectionTitle
        heading="What Our Clients Say"
        subHeading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => <SwiperSlide key={review._id}>
            <div className="border text-center md:p-14 p-6 space-y-4">
              {" "}
              <Rating className="py-2 mx-auto" style={{ maxWidth: 180 }} value={review?.rating} readOnly />
              <p className="md:text-base  text-xs">
                {review?.details}
              </p>
              <h1 className="md:text-3xl text-xl text-[#CD9003] font-medium">{review?.name}</h1>
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Testimonial;
