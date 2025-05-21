
import React, { useState } from "react";
import Button from "../components/Button";
import { useEffect } from "react";

function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [usereamil, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [usercpassword, setusercpassword] = useState("");

  const user = {
    firstName: firstname,
    lastName: lastname,
    email: usereamil,
    password: userpassword,
    cpassword: usercpassword
  };

  function Submmitform(e) {
    e.preventDefault();
    console.log(usereamil)
    if (
      firstname === "" ||
      lastname === "" ||
      usereamil === "" ||
      userpassword === "" ||
      usercpassword === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (userpassword !== usercpassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    if (usereamil.indexOf('@') === -1 || usereamil.indexOf('.') === -1) {
      alert("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Form submitted successfully!");
    setfirstname("");
    setlastname("");
    setuseremail("");
    setuserpassword("");
    setusercpassword("");
  }

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-blue-100 border-2 border-gray-300 rounded-lg">
      <h1 className="mb-6 text-2xl font-bold text-center text-blue-800">
        Sign up
      </h1>

      <form className="space-y-4" onSubmit={Submmitform}>
        <div className="space-y-2">
          <label
            htmlFor="firstname"
            className="block font-medium text-gray-700"
          >
            First Name:<sup className="text-red-600">*</sup>
          </label>

          <input
            className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter first name"
            value={firstname}
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
            required
          />
        </div>


        <div className="space-y-2">
          <label htmlFor="lastname" className="block font-medium text-gray-700">
            Last Name:<sup className="text-red-600">*</sup>
          </label>
          <input
            className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter last name"
            value={lastname}
            onChange={(e) => {
              setlastname(e.target.value);
            }}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium text-gray-700"> Email:<sup className="text-red-600">*</sup>
          </label>
          <input
            className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={usereamil}
            onChange={(e) => {
              setuseremail(e.target.value);
            }}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password:<sup className="text-red-600">*</sup>
          </label>
          <input
            className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={userpassword}
            onChange={(e) => {
              setuserpassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cpassword"
            className="block font-medium text-gray-700"
          >
            Confirm Password:<sup className="text-red-600">*</sup>
          </label>
          <input
            className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={usercpassword}
            onChange={(e) => {
              setusercpassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="py-2">
          <label htmlFor="terms" className="flex items-center text-gray-700">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mr-2 "
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        <div className="pt-1">
          <Button title="Create Account" Sub={Submmitform} />
        </div>

        <div className="pt-2 text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Signup;
<div className="pt-1">
  <Button title="Create Account" />
</div>
