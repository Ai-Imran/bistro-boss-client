
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10 md:w-3/12 mx-auto">
            <p className="text-[#D99904]  mx-autop-2">---{subHeading}---</p>
            <h3 className="text-3xl  mx-autop-2 border-y-2 py-2 mt-2 uppercase border-gray-300 text-bold">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    
};

export default SectionTitle;