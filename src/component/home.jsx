import React, {useState} from 'react';
import './home.css'
export default function Home() {
    const [counter, setCounter] = useState(0)

    // increase counter
    const increase = () => {
        setCounter((count) => count + 1);
    };


    // decrease counter
    const decrease = () => {
        setCounter((count) => count - 1);
    };

    // reset counter

    const reset = () => {
        setCounter(0);
    };

    console.log(counter);
  return (
    <div class="center">
        <h1>React counter</h1>
        <h3> {counter}</h3>
        <span>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
        </span>
    </div>
  );
}



// import React from "react";
// import About from "./about";


// export default function Home(props) {
//     // const name = "Tony";
//     return (
//         <>
//          <div>
//             {/* {<About name={props.name}/>} */}
//         <p>The name of the user that logged in is: {props.name}</p>
//         </div>

//         </>
//     );
// }