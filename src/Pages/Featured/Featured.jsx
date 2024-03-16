import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featured from '../../assets/home/featured.jpg'
import './feature.css'

const Featured = () => {
    return (
        <div style={{backgroundImage:`url(${featured})`}} className="parallax-content bg-fixed bg-center bg-cover ">
           <div className="bg-black bg-opacity-50 parallax-container text-white">
           <div className="pt-10 w-3/4 mx-auto">
           <SectionTitle
            subHeading={"Check It Out"}
            heading={"featured item"}
            ></SectionTitle>
           </div>
            <div className="md:flex w-3/4 gap-8 mx-auto py-10 items-center">
                <img className="w-[500px] mb-4 h-[300px] rounded" src={featured} alt="" />
                <div className="">
                   <div className="mb-16"> 
                   <p className="">April 20, 2024</p>
                    <h2 className="font-bold text-xl">WHERE CAN I GET SOME?</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                   </div>
                    <span className="cursor-pointer hover:text-[#D99904] font-bold border-b-2 border-gray-400 pb-2 rounded">Read More</span>
                </div>
            </div>
           </div>
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;