import { useState } from "react";
import { Input } from "../ui";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");
  return (
    <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
      <div class="relative py-3 sm:w-96 mx-auto text-center">
        <span class="text-2xl font-light ">Register to your account</span>
        <div class="mt-4 bg-white shadow-md rounded-lg text-left">
          <div class="h-2 bg-purple-400 rounded-t-md"></div>
          <div class="px-8 py-6 ">
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

            <div class="flex justify-between items-baseline">
              <button
                type="submit"
                class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                Register
              </button>
              <a href="/" class="text-sm hover:underline">
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
