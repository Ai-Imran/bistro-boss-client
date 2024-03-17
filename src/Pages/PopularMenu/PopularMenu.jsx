import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import PopularItem from "../Home/Shared/PopularItem/PopularItem";
import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu()
    const popularItem = menu.filter((item) => item.category === "popular");
    
  return (
    <section className="">
      <div className="w-3/4 md:w-full mx-auto">
        <SectionTitle
          subHeading={"Popular Items"}
          heading={"from our menu"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:gap-7 my-12">
        {popularItem.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
      <div className="mx-auto text-center -mt-8 mb-10">
        <span className="cursor-pointer  hover:text-[#D99904] font-bold border-b-2 border-gray-400 pb-2 rounded">
          Read More
        </span>
      </div>
    </section>
  );
};

PopularMenu.propTypes = {};

export default PopularMenu;
