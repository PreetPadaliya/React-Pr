import React, { use, useState } from "react";
import Button from "../components/Button";
import { useEffect } from "react";

function Signup() {
  const [username, setusername] = useState("");
  const [usereamil, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [usercpassword, setusercpassword] = useState("");

  function Submmitform() {
    if (
      username === "" ||
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
    console.log(
      "Form submitted",
      username,
      usereamil,
      userpassword,
      usercpassword
    );
    alert("Form submitted");
  }
  return (
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={usereamil}
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userpassword}
          onChange={(e) => {
            setuserpassword(e.target.value);
          }}
          required
        />

        <label htmlFor="cpassword">Confirm Password:</label>
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          value={usercpassword}
          onChange={(e) => {
            setusercpassword(e.target.value);
          }}
          required
        />
        <Button title="Signup" Sub={Submmitform()} />
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
}
export default Signup;
