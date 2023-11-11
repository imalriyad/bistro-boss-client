import SectionTitle from "./SectionTitle";

const Featureditem = () => {
  return (
    <div className="mx-auto max-w-screen-2xl text-white my-10">
      <div className="md:h-[600px] h-auto "
        style={{
          backgroundImage: "url(https://i.postimg.cc/52gZ8Kbc/featured.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
         
        }}
      >
        {" "}
        <div className="hero-overlay bg-opacity-60 pb-4">
            <div className="pt-12 ">
            <SectionTitle
            heading='FROM OUR MENU'
            subHeading='Check it out'
        ></SectionTitle>

          <div className="md:flex justify-center gap-10 px-4">
            <img src="https://i.postimg.cc/52gZ8Kbc/featured.jpg" className="md:w-1/4 mb-5 rounded" alt=""  />
            <div className="flex flex-col space-y-1 md:w-1/4"><p className="uppercase text-lg">March 20, 2023</p>
            <p className="uppercase text-lg">WHERE CAN I GET SOME?</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p></div>
        </div>
            </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Featureditem;
