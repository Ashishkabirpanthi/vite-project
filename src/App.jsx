import { useState } from "react";

function App() {
  // const getInfo = () => {
  //   console.log("hello world");
  // }
  // const datainfo = (takeinfo) => {
  //   console.log(takeinfo);
  // };

  let [a, seta] = useState(0);
  const counter = () => {
    seta(a+1);
  };
  console.log(a);
  return (
    // <div>
    //   {/* <h1>Hello From React</h1>
    //   <h2 className="text-red-500">
    //     {import.meta.env.VITE_API_KEY}
    //   // </h2> */}
    //   <button onClick={getInfo}>click me!</button>
    //   <button onClick={() => {datainfo('hello')}}>press</button>
    // </div>
    <div>
      <h1 className="ml-4">{a}</h1>
      <button className="bg-red-500 m-2 p-1" onClick={counter}>add</button>
    </div>
  );
}
export default App;
