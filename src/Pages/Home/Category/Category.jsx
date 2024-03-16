import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <div className="text-center w-3/4 mx-auto my-10">
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="md:text-4xl uppercase text-white text-center  -mt-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="md:text-4xl uppercase text-white text-center  -mt-16">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="md:text-4xl uppercase text-white text-center  -mt-16">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="md:text-4xl uppercase text-white text-center  -mt-16">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

Category.propTypes = {};

export default Category;
