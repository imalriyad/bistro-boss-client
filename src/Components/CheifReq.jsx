import SectionTitle from "./SectionTitle";
import FoodCard from "./Shared/FoodCard";

const array = [1, 2, 3, 4];
const CheifReq = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 my-10">
      <SectionTitle
      subHeading='Should Try'
      heading='CHEF RECOMMENDS'
      >
      </SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 grid-cols-1  ">
        {array.map((item) => (
          <FoodCard key={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CheifReq;
