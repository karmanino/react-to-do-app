// import React, { useCallback, useState } from "react";
// import "../02-useEffect/effects.css";
// import { ShowIncrement } from "./ShowIncrement";

// export const CallbackHook = () => {
//   const [counter, setcounter] = useState(10);

//   // const increment = () => {
//   //   setcounter(counter + 1);
//   // };

//   const increment = useCallback(() => {
//     setcounter(counter + 1);
//   }, [setcounter]);

//   return (
//     <div>
//       <h1>useCallback Hook: {counter}</h1>
//       <hr />
//       <ShowIncrement increment={increment} />
//     </div>
//   );
// };