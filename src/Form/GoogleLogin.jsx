import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import swal from "sweetalert";
import useAxiospublic from "../hooks/useAxiospublic";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiospublic();
  const loginWithGoogle = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = {
          name: res.user?.displayName,
          email: res.user?.email,
          photo: res.user?.photoURL,
        };
        axiosPublic
          .post("/create-user", loggedUser)
          .then((res) => console.log(res.data));
        swal("Congrats", "Your Login is Successfull", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <button
        onClick={loginWithGoogle}
        className="btn my-5 bg-base-300 w-full max-w-md"
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          className="w-[30px]"
          alt=""
        />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleLogin;
