import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui";
import { signUserFailure, signUserStart, signUserSuccess} from "../slice/auth"
import AuthService from "../servis/auth";
import {ValidationError} from "./";

function Login() {
  const [email, setEmail] = useState("")
  const [parol, setParol] = useState("")
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = async (e) => {
      e.preventDefault()
      dispatch(signUserStart())
      const user = {email, password: parol}
      try{
        const response = await AuthService.userLogin(user)
        dispatch(signUserSuccess(response.user))
      }catch(error){
        dispatch(signUserFailure(error.response.data.errors))
      }
  }

  console.log(isLoading);
  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <ValidationError />
            <Input label={'Email Adress'} type={'email'} state={email} setState={setEmail} />
            <Input label={'Password'} type={'password'} state={parol} setState={setParol} />
         
            <div className="flex justify-between items-baseline">
              <button
              disabled={isLoading}
              onClick={loginHandler}
                type="submit"
                className="cursor-pointer mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                {isLoading ? "Loading...": "Login"}
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

export default Login;
