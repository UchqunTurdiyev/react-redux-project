import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../servis/auth";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { Input } from "../ui";
import {ValidationError} from "./";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const registerHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: userName, email, password: parol}
    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
    }catch(error) {
      console.log(
        error.response.data.errors
      );
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Register to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <ValidationError />
            <Input label={"Username"} state={userName} setState={setUserName} />
            <Input
              label={"Email Adress"}
              type={"email"}
              state={email}
              setState={setEmail}
            />
            <Input
              label={"Password"}
              type={"password"}
              state={parol}
              setState={setParol}
            />

            <div className="flex justify-between items-baseline">
              <button
                disabled={isLoading}
                onClick={registerHandler}
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
              <a href="/" className="text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
