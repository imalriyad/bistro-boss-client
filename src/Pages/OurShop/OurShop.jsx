import Cover from "../../Header/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/Shared/FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UseAxios from "../../hooks/UseAxios";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import useCart from "../../hooks/useCart";
const OurShop = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  const axios = UseAxios();
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleAddCart = (item) => {
    item.email = user?.email;

    // Attempt to insert the document
    axios
      .post(`/add-to-cart`, item)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Yay!", `${item.name} added to your cart`, "success");
          refetch();
        }
      })
      .catch((error) => {
        // Check if the error is a duplicate key error
        if (error.response && error.response.status === 400) {
          const errorMessage = error.response.data.error;
          swal("Yay!", errorMessage, "error");
        } else {
          console.error("Error adding to cart:", error);
        }
      });
  };

 

  const categorys = ["salad", "pizza", "soups", "dessert", "drink"];
  const initialIndex = categorys.indexOf(category);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const drinksItem = menu?.filter((item) => item.category === "drinks");
  const saladItem = menu?.filter((item) => item.category === "salad");
  const dessertItem = menu?.filter((item) => item.category === "dessert");
  const pizzaItem = menu?.filter((item) => item.category === "pizza");
  const soupItem = menu?.filter((item) => item.category === "soup");

  return (
    <div className="mx-auto max-w-screen-2xl ">
      <Cover
        coverImg="https://i.postimg.cc/284bwh1F/banner2.jpg"
        title="OUR SHOP"
      ></Cover>

      <div className="py-20 text-center max-w-screen-xl mx-auto px-4">
        <Tabs
          defaultIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
        >
          <TabList>
            {" "}
            {categorys?.map((item) => (
              <Tab key={item}>{item.toUpperCase()}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1  ">
              {" "}
              {saladItem?.map((item) => (
                <FoodCard
                  key={item._id}
                  item={item}
                  handleAddCart={handleAddCart}
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1  ">
              {pizzaItem?.map((item) => (
                <FoodCard
                  key={item._id}
                  item={item}
                  handleAddCart={handleAddCart}
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1  ">
              {soupItem?.map((item) => (
                <FoodCard
                  key={item._id}
                  item={item}
                  handleAddCart={handleAddCart}
                ></FoodCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1  ">
              {dessertItem?.map((item) => (
                <FoodCard
                  key={item._id}
                  item={item}
                  handleAddCart={handleAddCart}
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1  ">
              {" "}
              {drinksItem?.map((item) => (
                <FoodCard
                  key={item._id}
                  item={item}
                  handleAddCart={handleAddCart}
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>

       
      </div>
    </div>
  );
};

export default OurShop;
