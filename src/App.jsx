// import { useState } from "react";

// function App() {
//   // const [time,settime] = useState(new  Date().toLocaleTimeString());
//   // const getInfo = () => {
//   //   console.log("hello world");
//   // }
//   // const datainfo = (takeinfo) => {
//   //   console.log(takeinfo);
//   // };

//   // let [a, seta] = useState(0);
//   // const counter = () => {
//   //   seta(a+1);
//   // };
//   // console.log(a);
//   // setInterval(()=>{
//   //   settime(new  Date().toLocaleTimeString());
//   // },1000)
//   const submitHandler = (event) => {
//       event.preventDefault();
//       // console.log(event.target.username.value);
//   console.log({username})

//   }
//   const [username,setuser] = useState("");
//   console.log(username);
//   return (
//     // <div>
//     //   {/* <h1>Hello From React</h1>
//     //   <h2 className="text-red-500">
//     //     {import.meta.env.VITE_API_KEY}
//     //   // </h2> */}
//     //   <button onClick={getInfo}>click me!</button>
//     //   <button onClick={() => {datainfo('hello')}}>press</button>
//     // </div>
//     // <div>
//     //   <h1 className="ml-4">{a}</h1>
//     //   <button className="bg-red-500 m-2 p-1" onClick={counter}>add</button>
//     // </div>
//   <div>
//     {/* <h1 className="flex justify-center align-center">{time}</h1> */}
//     <form onSubmit={submitHandler}> 
//       <input onChange = { (e) => setuser(e.target.value)} value = {username} type="text" placeholder="Username" name = "username"/>
//       <button type="submit">submit</button>
//     </form>
//   </div>

//    );
// }
// export default App;
// 

// import {useForm} from "react-hook-form";

// const App = () => {

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submitHandler = (data) => {
//     console.log(data);
//   }

//   console.log(errors)

//   return(
//     <div>
//     <form onSubmit={handleSubmit(submitHandler)}>
//       <input {...register('username',  { required: "This is required." }) } type="text" placeholder="username" />
//       <br/>
//       {errors.username && <p className="text-red-800">{errors.username.message}</p>}
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   )
// };

// export default App;

// import React from 'react'
// import { useState } from 'react'
// import Navigation from './component/Navigations'
// import Footer from './component/Footer'

// const App = () => {

//   const [nav, setnav] = useState("Nav | Navigation.jsx");
//   const [footer, setfooter] = useState("Footer | Footer.jsx");
//   return (
//     <div>
//       <h1>App</h1>
//       <Navigation nav = {nav} setnav ={setnav}></Navigation>
//       <Footer>
//         {footer}
//       </Footer>
//     </div>
//   )
// }

// export default App


// first class
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [a,seta] = useState(12);
// const counthandler = () => {
//   seta(a + 1);
// }
// console.log(a);

//   return (
//     <>
//     <h1>{a}</h1>
//     <button className='bg-blue-800' onClick={counthandler}>click me</button>
//     </>
//   )
// }
// export default App;


// second class 
// import React, { useState } from 'react'

// const App = () => {
//   const [time,settime] = useState(new Date().toLocaleTimeString())
//   const date = new Date().toLocaleDateString()

//   setInterval(() => {
//     settime(new Date().toLocaleTimeString())
//   }, 1000);
//   return (
//     <>
//       <h1>{time}</h1>
//       <h1>{date}</h1>
//     </>
//   )
// }

// export default App;


// third class = how to pass parameters in react

// import React from 'react'

// const App = () => {
//   const [username, setusername] = React.useState("user");
//   const userHandler = (n) => {
//     setusername(n);
//   }
//   // const wrapper = () => {
//   //   userHandler("user updated")
//   // } 
//   return (
//     <>
//       <h1>{username}</h1>
//       <button className="bg-red-200" onClick={() => userHandler("user updated")}>update user</button>
//     </>
//   )
// }

// export default App


// fourth class = use form in react

// import React from 'react'

// const App = () => {
//   const saveUser = (e) => {
//     e.preventDefault();
//     console.log(e.target.username.value);
//   }
//   return (
//     <>
//     <form onSubmit={saveUser}>
//       <input type="text" name = "username" placeholder="username"/>
//       <button type="submit" className='bg-blue-500'>Submit</button>
//     </form>
//     </>
//   )
// }

// export default App


// fifth class = two-way binding

// import { useState } from "react";

// const App = () => {

//   const [username, setUsername] = useState("");
//   const [gender, setgender] = useState("female");
//   const [city, setcity] = useState("bangalore");
//   const [desc, setdesc] = useState("");
//   const [accept, setaccept] = useState(true);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log({username,gender,city,desc,accept});
//   }
//   console.log(accept)
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <input value = {username} type="text" name='user' onChange = {(e) => setUsername(e.target.value)} placeholder="username"/>
//         <input type="submit" />
//         <br />
//         <br />
//         <input value = 'male' type="radio" name="gender"  onChange={(e) => setgender(e.target.value)} checked = {gender == 'male'?true:false} />male
//         <input value = 'female' type="radio" name="gender" onChange={(e) => setgender(e.target.value)} checked = {gender == 'female'?true:false} />female
//         <br /><br />
//         <select name="city" value = {city} onChange={(e) => setcity(e.target.value)}>
//           <option value="delhi">Delhi</option>
//           <option value="mumbai">Mumbai</option>
//           <option value="chennai">Chennai</option>
//           <option value="bangalore">Bangalore</option>
//         </select>
//         <br /><br />
//         <textarea value={desc} className="bg-blue-100" name="desc" onChange={(e) => setdesc(e.target.value)}></textarea>
//         <br />
//         <br />
//         <input value={accept} type="checkbox" onChange={(e) => setaccept(!accept)} checked = {accept} />i accept all terms and conditions
//       </form>
//     </>
//   )
// }

// export default App;


// sixth class = render the data.

// import { list } from "postcss";
// import { useState } from "react";

// const App = () => {
//   const [users, setusers] = useState([])

//   const [username, setUsername] = useState("");
//   const [gender, setgender] = useState("female");
//   const [city, setcity] = useState("bangalore");
//   const [desc, setdesc] = useState("");
//   const [accept, setaccept] = useState(true);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const Newuser = {username,gender,city,desc,accept};
//     const copyuser = [...users]
//     copyuser.push(Newuser);
//     setusers(copyuser);
//     setUsername("");
//     setgender("female");
//     setcity("bangalore");
//     setdesc("");
//     setaccept(true);
//   }
//   let userrender = 'nodata';
//   if(users.length > 0) {
//     userrender = users.map((user,i) => <li key={i}>{user.username}</li>)
//   }
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <input value = {username} type="text" name='user' onChange = {(e) => setUsername(e.target.value)} placeholder="username"/>
//         <input type="submit" />
//         <br />
//         <br />
//         <input value = 'male' type="radio" name="gender"  onChange={(e) => setgender(e.target.value)} checked = {gender == 'male'?true:false} />male
//         <input value = 'female' type="radio" name="gender" onChange={(e) => setgender(e.target.value)} checked = {gender == 'female'?true:false} />female
//         <br /><br />
//         <select name="city" value = {city} onChange={(e) => setcity(e.target.value)}>
//           <option value="delhi">Delhi</option>
//           <option value="mumbai">Mumbai</option>
//           <option value="chennai">Chennai</option>
//           <option value="bangalore">Bangalore</option>
//         </select>
//         <br /><br />
//         <textarea value={desc} className="bg-blue-100" name="desc" onChange={(e) => setdesc(e.target.value)}></textarea>
//         <br />
//         <br />
//         <input value={accept} type="checkbox" onChange={(e) => setaccept(!accept)} checked = {accept} />i accept all terms and conditions
//       </form>
//       <hr /><hr />
//         <ol>{userrender}</ol>
//     </>
//   )
// }

// export default App;


//seven class = context api - 1st.

// import React, { createContext, useState } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'

// export const DataContext = createContext(null);

// const App = () => {
//   const [data, setdata] = useState("API context data");


//   return <DataContext.Provider value={[data, setdata]}>
//       <>
//         <h1>App Component</h1>
//         <Comp1 />
//         <Comp2 />
//       </>
//       </DataContext.Provider>
// }

//       export default App

//eight class = context api - 2st.

// import Comp1 from './components/Comp1'
// 
import React from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <nav >
        <NavLink to="" className={({ isActive }) => isActive ? "bg-red-600" : "bg-red-200"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "bg-red-600" : "bg-red-200"}>About</NavLink>
        <NavLink to="/product"className={({ isActive }) => isActive ? "bg-red-600" : "bg-red-200"}>Product</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
