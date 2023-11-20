import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
const Login = () => {
  const { login } = useAuth();
  const [User_Submitted_Value, setUserInput] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCapctha = (e) => {
    const inputCapctha = e.target.value;
    setUserInput(inputCapctha);
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    if (!validateCaptcha(User_Submitted_Value)) {
      swal("Error", "Invalid Captcha", "error");
      return;
    }
    login(email, password)
      .then(() => {
        swal("Yay!", "Login Successfull", "success");
        navigate("/");
      })
      .catch((error) => {
        swal("Yay!", `${error.message}`, "error");
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/FstND6Sw/authentication.png)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-20 md:flex items-center justify-between">
        <img
          src="https://i.postimg.cc/rwf6XZdV/authentication2.png"
          className="md:w-3/6 mx-auto"
          alt=""
        />
      <div className="flex-1">  <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="space-y-5 "
        >
          <h1 className="md:text-4xl text-2xl font-bold">Login</h1>
          <div>
            <label
              htmlFor="example1"
              className="mb-1 block text-sm font-medium  text-gray-700 "
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="example1"
              className="block input focus:outline-none w-full max-w-md  rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
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
              {...register("password", { required: true })}
              id="example2"
              className="block input focus:outline-none w-full max-w-md rounded-md border-gray-300 shadow-sm  disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                Password is required
              </p>
            )}
          </div>

          <div className="">
            <LoadCanvasTemplateNoReload />
          </div>

          <div>
            <input
              type="text"
              id="example1"
              onBlur={handleCapctha}
              className="block input focus:outline-none w-full max-w-md rounded-md  border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Type the Text "
            />
          </div>

          <button
            type="submit"
            className="rounded-lg btn border px-5 py-2.5 text-center bg-[#CD9003] hover:bg-[#CD9003] max-w-md text-white w-full text-sm font-medium shadow-sm  "
          >
            Sign In
          </button>
          <h1>
            Dont have an account?
            <span className="ml-1 font-bold text-[#CD9003]">
              <Link to="/Registration">Registration</Link>
            </span>
          </h1>
        </form>
        <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
