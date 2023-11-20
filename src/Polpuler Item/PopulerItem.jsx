import { Link } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import MenuCard from "../Components/Shared/MenuCard";
import useMenu from "../hooks/useMenu";
const PopulerItem = () => {
  const [menu] = useMenu();

  const populerItem = menu.filter((item) => item.category === "popular");

  return (
    <div className="mx-auto max-w-screen-2xl">
      <SectionTitle
        subHeading="Populer Item"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
        {populerItem?.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <div className="text-center ">
        <Link to='/Our Menu' className="btn btn-outline border-0 border-b-2">
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default PopulerItem;
