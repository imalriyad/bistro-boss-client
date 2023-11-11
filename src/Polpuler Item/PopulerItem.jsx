import SectionTitle from "../Components/SectionTitle";
import { useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios";
import MenuCard from "../Components/Shared/MenuCard";
const PopulerItem = () => {
  const axios = UseAxios();
  const [populerItem, setPopulerItem] = useState([]);

  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const populeritem = res.data.filter(
        (item) => item.category === "popular"
      );
      setPopulerItem(populeritem);
    });
  }, [axios]);

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
      <div className="text-center "><button className="btn btn-outline border-0 border-b-2">View Full  Menu</button></div>
    </div>
  );
};

export default PopulerItem;
