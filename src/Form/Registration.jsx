import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import useAxiospublic from "../hooks/useAxiospublic";
import GoogleLogin from "./GoogleLogin";

const Registration = () => {
  const { registeration } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiospublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    registeration(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: data.name,
          photoURL: data.photoUrl,
        })
          .then(() => {
            const loggedUser = {
              name: res.user?.displayName,
              email: res.user?.email,
              photo: res.user?.photoURL,
            };

            axiosPublic
              .post("/create-user", loggedUser)
              .then((res) => console.log(res.data));
            swal(
              "Congratulations!",
              "Your Registration is Successfull",
              "success"
            );
            navigate("/Login");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        swal("Yay!", `${error.message}`, "error");
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/FstND6Sw/authentication.png)",
        }}
      >
        <div className="mx-auto max-w-screen-2xl px-4 pt-24 md:flex items-center justify-between">
          <img
            src="https://i.postimg.cc/rwf6XZdV/authentication2.png"
            className="md:w-3/6 mx-auto"
            alt=""
          />
         <div className=" flex-1 "> <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
            <h1 className="md:text-4xl text-2xl font-bold">Registration</h1>
            <div>
              <label
                htmlFor="example2"
                className="mb-1 block text-sm font-medium  text-gray-700 "
              >
                Name
              </label>
              <input
                type="text"
                id="example2"
                {...register("name", { required: true })}
                className="block input focus:outline-none w-full max-w-md rounded-md  border-gray-300 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Full Name"
              />{" "}
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Name is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-sm font-medium  text-gray-700 "
              >
                Email
              </label>
              <input
                type="email"
                id="example2"
                {...register("email", { required: true })}
                className="block input focus:outline-none w-full max-w-md rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="you@email.com"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Email is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="example2"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="example3"
                {...register("password", { required: true })}
                className="block input focus:outline-none w-full max-w-md rounded-md border-gray-300 shadow-sm  disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Password is required
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="example2"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Photo Url
              </label>
              <input
                type="text"
                id="example4"
                {...register("photoUrl", { required: true })}
                className="block input focus:outline-none w-full max-w-md rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Type the Text "
              />
              {errors.photoUrl?.type === "required" && (
                <p role="alert" className="text-red-500">
                  photoUrl is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-lg btn border px-5 py-2.5 text-center bg-[#CD9003] hover:bg-[#CD9003] max-w-md text-white w-full text-sm font-medium shadow-sm  "
            >
              Registration
            </button>
            <h1>
              Already have an account?
              <span className="ml-1 font-bold text-[#CD9003]">
                <Link to="/Login">Login</Link>
              </span>
            </h1>
          </form>
          <GoogleLogin></GoogleLogin>
          </div>

        </div>
      </div>
      
    </>
  );
};

export default Registration;
