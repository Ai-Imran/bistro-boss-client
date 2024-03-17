import { Parallax } from "react-parallax";

const Cover = ({ bgUrl, coverHeader, coverDesc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgUrl}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
       
      >
        <div className="hero-content rounded h-[300px] text-center w-3/4 bg-black bg-opacity-50 text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl uppercase font-bold">{coverHeader}</h1>
            <p className="mb-5">{coverDesc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {};

export default Cover;
