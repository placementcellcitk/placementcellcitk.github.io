// "use client";

// import React, { useRef, useEffect } from "react";

// const placementData = [
//   " Hemanga Das - RDC Concrete",
//   " Anuj Kumar - L&T",
//   " Jwngshar Basumatary - Numaligarh Refinery, Assam",
//   " Pritam Baishya - Amul (GCMMF LTD.)",
//   " New Candidate - Infosys",
//   " Another Selection - Wipro",
// ];

// const PlacementUpdates = () => {
//   const listRef = useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     const list = listRef.current;
//     if (!list) return;

//     let offset = 0;
//     const speed = 1; // px per frame
//     const itemHeight = 60; // match each li height in px
//     let animationId: number;

//     const scroll = () => {
//       offset -= speed;
//       if (Math.abs(offset) >= itemHeight) {
//         // move first item to bottom
//         list.appendChild(list.firstElementChild as Node);
//         offset = 0;
//       }
//       list.style.transform = `translateY(${offset}px)`;
//       animationId = requestAnimationFrame(scroll);
//     };

//     animationId = requestAnimationFrame(scroll);

//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <div className="max-w-md mx-auto p-6 ">
//       <h2 className="text-3xl font-bold text-left text-indigo-800 mb-6">
//         Placement Updates
//       </h2>

//       <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-60 w-100 overflow-hidden relative">
//         <ul
//           ref={listRef}
//           className="absolute w-full space-y-2 text-gray-800"
//         >
//           {placementData.map((detail, i) => (
//             <li
//               key={i}
//               className="h-14 flex items-center bg-indigo-100 text-indigo-900 px-4 rounded-lg shadow-md"
//             >
//               {detail}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PlacementUpdates;
