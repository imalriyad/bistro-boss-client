import SectionTitle from "../Components/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiospublic from "../hooks/useAxiospublic";
import UseAxios from "../hooks/UseAxios";
import swal from "sweetalert";
const imageUploadKey = import.meta.env.VITE_APP_IMAGEUPKEY;
const imageUpURI = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`;

const AddItem = () => {
  const axiosPublic = useAxiospublic();
  const axios = UseAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const item = {
      name: data?.name,
      recipe: data?.recipe,
      category: data?.category,
      price: parseFloat(data?.price),
    };
    // upload image to imgbb
    const imageFile = { image: data?.image[0] };
    const res = await axiosPublic.post(imageUpURI, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    const image = res.data?.data?.display_url;
    if (res.data.success) {
      const res = await axios.post(`/add-item`, {...item,image});
      if(res.data.insertedId){
        swal("Yay!",`${item?.name} added to the menu`, "success");
      }
    }
  };
  return (
    <div className="max-w-screen-md mx-auto">
      <SectionTitle
        subHeading={"What's new?"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded grid grid-cols-2 gap-6"
      >
        <div className="col-span-full">
          <label
            htmlFor="example1"
            className="mb-1 block text-sm font-medium  text-gray-700 "
          >
            Recipe name
          </label>
          <input
            type="text"
            id="example1"
            {...register("name", { required: true })}
            className="block input focus:outline-none w-full   rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="Recipe name"
          />
        </div>
        <div>
          <label
            htmlFor="example3"
            className="mb-1 block text-sm font-medium  text-gray-700 "
          >
            Category*
          </label>
          <select
            defaultValue={"default"}
            {...register("category", { required: true })}
            className="select select-bordered block input focus:outline-none w-full max-w-md rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          >
            <option disabled value={"default"}>
              Select category
            </option>
            <option value={"salad"}>SALAD</option>
            <option value={"pizza"}>PIZZA</option>
            <option value={"soup"}>SOUPS</option>
            <option value={"dessert"}>DESSERT</option>
            <option value={"drinks"}>DRINK</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="example2"
            className="mb-1 block text-sm font-medium  text-gray-700 "
          >
            Price*
          </label>
          <input
            type="text"
            id="example2"
            {...register("price", { required: true })}
            className="block input focus:outline-none w-full max-w-md  rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="Price"
          />{" "}
          {errors.price?.type === "required" && (
            <p role="alert" className="text-red-500">
              Price is required
            </p>
          )}
        </div>
        <div className="col-span-full">
          <label
            htmlFor="example4"
            className="mb-1 block text-sm font-medium  text-gray-700 "
          >
            Recipe Details*
          </label>
          <textarea
            rows={4}
            placeholder="Recipe Details*"
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered textarea-md input focus:outline-none w-full rounded-md border-gray-300 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            style={{ height: "auto" }}
          ></textarea>{" "}
          {errors.details?.type === "required" && (
            <p role="alert" className="text-red-500">
              Details is required
            </p>
          )}
        </div>
        <div className="flex col-span-full w-full flex-col space-y-10 ">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs"
          />
          <span className="">
            {" "}
            <button className="btn w-full   btn-neutral">
              Add Item <ImSpoonKnife></ImSpoonKnife>
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
