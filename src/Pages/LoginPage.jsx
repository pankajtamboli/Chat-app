import React, { useState } from "react";
import assets from "../assets/assets";
import Signup from "./Signup";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [bio, setbio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  // ----------------- Submit Handler -----------------
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    // Add API logic here
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">

      {/* --------- Left Logo ---------- */}
      <img src={assets.logo} alt="" className="w-[min(30vw,250px)]" />

      {/* ------------ Form ------------- */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}

          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {/* Full Name Input */}
        {currState === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className="w-full px-4 py-2 bg-white/10 text-white rounded-lg mt-1"
            placeholder="Full Name"
            required
          />
        )}

        {/* Email + Password */}
        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 bg-white/10 text-white rounded-lg mt-1"
            />

            <input
              className="w-full px-4 py-2 bg-white/10 text-white rounded-lg mt-1"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </>
        )}

        {/* Bio Input */}
        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setbio(e.target.value)}
            value={bio}
            rows={10}
            className="p-2 py-2 border-gray-500 rounded-lg  focus:outline focus:ring-2 focus:ring-indigo-100 bg-white/5 mt-0"
            placeholder="Provide a short bio..."
            required
          ></textarea>
        )}

        {/* Button */}
        <button
          type="submit"
          className="py-2 bg-gradient-to-r rounded-lg from-purple-400 to-violet-600 text-white cursor-pointer"
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        {/* Terms */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        {/* Toggle Login/Signup */}
        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account{" "}
              <span
                onClick={() => {
                  setCurrState("Sign up");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
