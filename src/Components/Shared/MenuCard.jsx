/* eslint-disable react/prop-types */

const MenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="md:flex gap-4 items-center px-6 ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
        className="w-[110px] mx-auto md:py-0 py-10"
      />
      <div>
        <h1 className="uppercase text-lg">
         {name} --------------
        </h1>
        <p className="text-sm">
          {recipe}
        </p>
      </div>
      <p className="text-[#BB8506] text-lg">${price}</p>
    </div>
  );
};

export default MenuCard;
