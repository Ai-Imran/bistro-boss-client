import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect,useState } from "react";
import PopularItem from "../Home/Shared/PopularItem/PopularItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)})
    }, []);
    console.log(menu);
  return (
    <section className="">
     <div className="w-3/4 md:w-full mx-auto">
     <SectionTitle
        subHeading={"Popular Items"}
        heading={"from our menu"}
      ></SectionTitle>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:gap-7 my-12">
        {
            menu.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
        }
       
      </div>
      <div className="mx-auto text-center -mt-8 mb-10">
        <span className="cursor-pointer  hover:text-[#D99904] font-bold border-b-2 border-gray-400 pb-2 rounded">Read More</span>
        </div>
    </section>
  );
};

PopularMenu.propTypes = {};

export default PopularMenu;
