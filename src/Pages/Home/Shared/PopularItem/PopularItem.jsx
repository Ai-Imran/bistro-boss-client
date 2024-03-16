const PopularItem = ({ item }) => {
  const { name, _id, category, image, price, recipe } = item;
  return (
    <div>
      <div className="flex gap-3">
        <img
          className=" rounded-b-full  rounded-r-full w-[120px] h-[104px] "
          src={image}
          alt=""
        />
        <div className="flex flex-col ">
          <h2 className="uppercase">{name}--------------</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-[#BB8506]">{"$" + price}</p>
      </div>
      
    </div>
  );
};

PopularItem.propTypes = {};

export default PopularItem;
