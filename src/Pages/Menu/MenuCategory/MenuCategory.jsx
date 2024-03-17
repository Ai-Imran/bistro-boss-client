import Cover from "../../Home/Shared/Cover/Cover";
import PopularItem from "../../Home/Shared/PopularItem/PopularItem";
import bgMenu from '../../../assets/menu/banner3.jpg'


const MenuCategory = ({ items ,coverHeader ,img }) => {
  return (
    <div>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        { coverHeader && <Cover
          coverHeader={"our menu"}
          coverDesc={"Would you like to try a dish?"}
        ></Cover>}
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:gap-7 my-12">
        {items.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
      <div className="mx-auto text-center -mt-8 mb-10">
        <span className="cursor-pointer  hover:text-[#D99904] font-bold border-b-2 border-gray-400 pb-2 rounded">
        ORDER YOUR FAVOURITE FOOD
        </span>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {};

export default MenuCategory;
