import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import gg from "../assets/svg/gg.svg"
import fc from "../assets/png/fc.png"
import ins from "../assets/png/ins.png"


import "./SignUp.sass"
function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user);
    navigate("/signin");
  };

  return (
    <div  className="box">
        <div className="cont">
      <form onSubmit={handleSubmit}>
        <p>SignUp</p>
        <label>
          Name
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
      <div className="divider">
  <span>OR</span>
</div>
<div className="icons">
    <img src={gg} alt="" />
        <img className="s" src={fc} alt="" />
    <img className="s" src={ins} alt="" />


</div>
<p className='switch-link' onClick={() => navigate('/signin')}>Already a user?<span>LOGIN</span></p>




      </div>
    </div>
  );
}

export default Signup;