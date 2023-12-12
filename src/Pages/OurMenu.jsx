import SectionTitle from "../Components/SectionTitle";
import MenuCard from "../Components/Shared/MenuCard";
import Cover from "../Header/Cover";
import useMenu from "../hooks/useMenu";
import {Link} from 'react-router-dom'
const OurMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const offeredItem = menu?.filter((item) => item.category === "offered");
  const saladItem = menu?.filter((item) => item.category === "salad");
  const dessertItem = menu?.filter((item) => item.category === "dessert");
  const pizzaItem = menu?.filter((item) => item.category === "pizza");
  const soupItem = menu?.filter((item) => item.category === "soup");

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Cover
        title="OUR MENU"
        coverImg="https://i.postimg.cc/fbkR69RP/banner3.jpg"
      ></Cover>

      {/* Offerd Food Section */}
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
          {offeredItem?.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </div>
      }
      <div className="text-center mb-20">
        <Link to='/Our Shop/salad' className="btn btn-outline border-0 border-b-2">
        ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>


      {/* DESSERTS Food Section */}
      <Cover 
        title="DESSERTS"
       
        coverImg="https://i.postimg.cc/MG88YfjR/dessert-bg.jpg"
      ></Cover>
      {
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
          {dessertItem?.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </div>
      }
      <div className="text-center mb-20">
      <Link to='/Our Shop/dessert' className="btn btn-outline border-0 border-b-2">
        ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>


      {/* PIZZA Food Section */}
      <Cover 
        title="PIZZA"
      
        coverImg="https://i.postimg.cc/tTtwkrHG/category-pizza.jpg"
      ></Cover>
      {
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
          {pizzaItem?.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </div>
      }
      <div className="text-center mb-20">
      <Link to='/Our Shop/pizza' className="btn btn-outline border-0 border-b-2">
        ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>


      {/* saladItem Food Section */}
      <Cover 
        title="SALAD"
        
        coverImg="https://i.postimg.cc/pybt1m1g/salad-bg.jpg"
      ></Cover>
      {
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
          {saladItem?.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </div>
      }
      <div className="text-center mb-20">
      <Link to='/Our Shop/salad' className="btn btn-outline border-0 border-b-2">
        ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>

      {/* SOUP Food Section */}
      <Cover 
        title="SOUP"
      
        coverImg="https://i.postimg.cc/RCQ5MZyV/soup-bg.jpg"
      ></Cover>
      {
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 md:gap-10 gap-5 my-10">
          {soupItem?.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </div>
      }
      <div className="text-center mb-20">
      <Link to='/Our Shop/soup' className="btn btn-outline border-0 border-b-2">
        ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
