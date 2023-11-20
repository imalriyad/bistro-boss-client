/* eslint-disable react/prop-types */

const FoodCard = ({item,handleAddCart}) => {
  const {name,recipe,image,price,category} = item || []
  return (
    <div>
      <div className="card rounded md:h-[470px] bg-[#F3F3F3] shadow-xl">
        <figure className="relative">
          <img
            src={image}
            alt="Food"
            className="rounded w-full  object-cover"
          />
          <div className="badge badge-warning absolute bottom-0 text-lg font-bold top-4 right-4 ">${price}</div>
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-warning text-lg text-left font-bold ">{category}</div>
          <p className="text-sm">{recipe}</p>
          <div className="w-full mt-4">
            <button onClick={()=>handleAddCart(item)} className="btn w-full text-[#BB8506] border-0 border-[#BB8506] border-b-2 hover:bg-[#1F2937]">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
