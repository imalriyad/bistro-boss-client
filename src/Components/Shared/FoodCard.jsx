
const FoodCard = () => {
  return (
    <div>
      <div className="card rounded bg-[#F3F3F3] shadow-xl">
        <figure className="">
          <img
            src="https://i.postimg.cc/pybt1m1g/salad-bg.jpg"
            alt="Food"
            className="rounded"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions mt-4">
            <button className="btn text-[#BB8506] border-0 border-[#BB8506] border-b-2 hover:bg-[#1F2937]">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
