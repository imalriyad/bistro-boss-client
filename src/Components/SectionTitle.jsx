/* eslint-disable react/prop-types */


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center max-w-sm my-14 ">
            <p className="text-[#D99904] mb-2 text-xs md:text-base">---{subHeading}---</p>
             <h1 className="md:text-4xl text-2xl text-[#151515] md:border-y-4 border-y-2 md:py-4 py-2 ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;