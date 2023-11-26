import useMenu from "../hooks/useMenu";
import SectionTitle from "./SectionTitle";
import FoodCard from "./Shared/FoodCard";

const CheifReq = () => {
  const [menu] = useMenu()

  const offeredItem = menu?.filter((item) => item?.category === "offered");
  return (
    <div className="mx-auto max-w-screen-2xl px-4 my-10">
      <SectionTitle
      subHeading='Should Try'
      heading='CHEF RECOMMENDS'
      >
      </SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 grid-cols-1  ">
        {offeredItem?.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CheifReq;
