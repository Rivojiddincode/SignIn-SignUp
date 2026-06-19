// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'

//     const {signup}=useAuth()
//     const navigate=useNavigate()
//     const [user, setUser]=useState({
//         name:"",
//         email:"",
//         password:"",
//     })
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         signup(user)
//         navigate("/signin")
//     }
//   return (
//     <div className="">
//     <div className='
// '>
        
       
//    <form  onSubmit={handleSubmit}  className=''>
//     <label>Name
// <input className='' type="text" placeholder='Name'  onChange={(e)=>
//     setUser({
//         ...user,
//         name:e.target.value
//     })
// }
// />
// </label>
// <label >Email
// <input className='inp' type="email" 
// placeholder='Email' 
//  onChange={(e)=>
//     setUser({
//         ...user,
//         email: e.target.value,
//     })
// }/>
// </label>
// <label >Password
// <input className='' type="password" placeholder='Password' onChange={(e)=>
//     setUser({
//         ...user,
//         password:e.target.value,
//     })
// } />
// </label>
// <button className=''>Sign Up</button>


//    </form>
//    <div className=''>
// <button class="">
        
//         <span class="">Google</span>
//       </button>

//       {/* GitHub Tugmasi */}
//       <button class="">
      
//         <span class="">GitHub</span>
//       </button>

//       {/* Discord Tugmasi */}
//       <button class="">
       
//         <span class="">Discord</span>
//       </button>
//    </div>
//    </div>
//    </div>
   
//   )

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    <div>
      <form onSubmit={handleSubmit}>
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

      
    </div>
  );
}

export default Signup;