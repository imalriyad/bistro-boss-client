/* eslint-disable react/prop-types */
const Cover = ({title,coverImg}) => {
  return (
    <div>
      <div
        className="hero md:h-[600px] h-[300px]"
        style={{
          backgroundImage:
            `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="border max-w-2xl rounded-sm p-5 md:p-10 bg-black bg-opacity-40">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="mb-5 md:text-base text-xs md:font-light">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
