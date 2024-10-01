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
import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <header className="bg-gray-800">
        <nav className="container mx-auto p-6 flex justify-between">
          <div className="text-white text-2xl font-bold">PROTOFILO.</div>
          <ul className="flex space-x-8 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400">HOME</a></li>
            <li><a href="#" className="hover:text-gray-100">ABOUT</a></li>
            <li><a href="#" className="hover:text-gray-100">WORKS</a></li>
            <li><a href="#" className="hover:text-gray-100">BLOG</a></li>
            <li><a href="#" className="hover:text-gray-100">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="flex items-center justify-center h-screen">
        {/* Text Section (on the left) */}
        <div className="mr-8 text-left">
          <p className="text-gray-200 text-xl mb-4">MY NAME IS</p>
          <h1 className="text-6xl font-bold mb-5 text-white">ABDULRAHMAN</h1>
          <p className="bg-yellow-400 text-gray-900 font-bold text-xl py-2 px-4 inline-block">I'M A UI DEVELOPER</p>
        </div>

        {/* Image Section (on the right) */}
        <div>
          <img src="/images/img.avif" alt="Profile" className="w-md h-screen object-cover grayscale" />
        </div>
      </section>
    </div>
  );
};

export default App;