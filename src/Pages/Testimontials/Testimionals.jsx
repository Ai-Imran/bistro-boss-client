import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimionals = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section>
      <div className="mx-auto w-3/4">
        <SectionTitle
          subHeading={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        ></SectionTitle>
      </div>
      {/* <div className="my-8  text-center">
        <div className="rating rating-md space-x-2">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-[#CD9003]"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-[#CD9003]"
            
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-[#CD9003]"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-[#CD9003]"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 "
          />
        </div>
      </div> */}
      <section className="my-20 w-3/4 mx-auto">
        <Swiper
        
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="mx-24 text-center">
                <Rating className="text-center mx-auto mb-10" style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="mx-auto mb-6 text-xl" />
                  {review.details}
                  <h3 className=" font-bold text-xl text-[#CD9003] text-center">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </section>
  );
};

Testimionals.propTypes = {};

export default Testimionals;
