import Banner from "../../Banner/Banner";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimionals from "../../Testimontials/Testimionals";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured/>
      <Testimionals/>
    </div>
  );
};

Home.propTypes = {};

export default Home;
