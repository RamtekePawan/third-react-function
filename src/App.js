import { useState } from "react";

function App() {

  return (
    <>
      <h1>Counter APP</h1>
      <LikeCounter />
    </>
  );
}

export default App;

function LikeCounter() {

  //let count = 1; //State Less member
  let [count, setCount] = useState(0);

  let likeButton = () => {
    count = count + 1;
    setCount(count);
    console.log(count);
  }

  return (

    <><h1>{count}</h1>
      <button type="Like" onClick={likeButton} >LikeME!!!!</button>
    </>
  )
}