import SectionTitle from "../Components/SectionTitle";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-2xl my-24">
        <SectionTitle
        subHeading='About Us'
        heading='About Bistro Boss'
        ></SectionTitle>
      <div 
        className="relative h-[450px] "
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/5ypc4sPS/chef-service.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
         
        }}
      >
        <div className="bg-white max-w-xl mx-auto absolute top-[30%] md:left-[10%] lg:left-[30%] text-center p-6 rounded drop-shadow-xl">
          <h1 className="text-3xl">Bistro Boss</h1>
          <p className="font-light md:text-base text-gray-500 text-xs py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
