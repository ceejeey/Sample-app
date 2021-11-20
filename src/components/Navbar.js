// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useRef } from "react";
// import { fetchWeathera } from "./Weather";

// const Navbar = () => {
//   const [search, setSearch] = useState("bengaluru");
//   const CityInputRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const enteredTitle = CityInputRef.current.value;
//     setSearch(enteredTitle);
//     fetchWeathera(search);
//   };

//   return (
//     <Container>
//       {data && (
//         <>
//           <Formcontrol>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 <input
//                   type="text"
//                   placeholder="Another"
//                   name="search"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   required
//                 />
//               </label>
//               <button type="submit">
//                 <i class="fas fa-search"></i>
//               </button>
//             </form>
//           </Formcontrol>
//           <Line></Line>
//           <h5>Weather Details</h5>
//           <Deather>
//             <Details>
//               <p>Cloudy</p>
//               <p>Humidity</p>
//               <p>Wind</p>
//               <p>Min|Max</p>
//             </Details>
//             <Values>
//               <p></p>
//               <p></p>
//               <p>Weather Details</p>
//               <p>Weather Details</p>
//             </Values>
//           </Deather>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Navbar();

// const Container = styled.div`
//   width: 35vw;
//   margin: auto 0;
//   height: 70vh;
//   background: rgba(81, 79, 79, 0.25);
//   box-shadow: 0 8px 32px 0 rgba(72, 70, 70, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(5.5px);
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   position: relative;

//   h5 {
//     margin-left: 10%;
//     font-size: 20px;
//     font-weight: 100;
//     margin-bottom: 50px;
//     color: rgba(255, 255, 255, 1);
//     letter-spacing: 1.5px;
//   }
// `;

// const Formcontrol = styled.div`
//   width: 98%;
//   display: flex;
//   margin: 50px auto;
//   display: flex;

//   form {
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     flex: 1;

//     label {
//       width: 80%;
//     }

//     input {
//       height: 40px;
//       border: none;
//       margin: 0px 10%;
//       width: 80%;
//       border-bottom: 1px solid rgb(60, 60, 60);
//       font-size: 18px;
//       text-align: center;

//       :focus {
//         outline: none !important;
//         background-color: transparent !important;
//       }
//       ::placeholder {
//         align-item: center
//         color: rgba(40, 40, 40, 0.8);
//         opacity: 1;
//         font-size: 18px;
//       }

//       background-color: transparent;
//     }

//   }

//   button {
//     position: absolute;
//     top: 0;
//     right: 0;
//     height: 90px;
//     width: 90px;
//     margin: auto;
//     background-color: #f77f00;
//     border: none;
//     font-size: 30px;
//     color: rgba(40, 40, 40, 0.8);
//     font-weight: 100;
//   }
// `;

// const Line = styled.div`
//   width: 80%;
//   margin: 40% 10% 0;

//   height: 1px;
//   background-color: rgba(40, 40, 40, 0.8);
// `;

// const Deather = styled.div`
//   display: flex;
// `;
// const Details = styled.div`
//   width: 50%;
//   margin: 0px 10%;
//   height: calc(50% - 10px);

//   p {
//     font-size: 18px;
//     font-weight: 100;
//     margin-bottom: 20px;
//     color: rgba(237, 237, 237, 0.92);
//   }
// `;

// const Values = styled.div`
//   width: 50%;
//   margin: 0px 10%;
//   height: calc(50% - 10px);

//   p {
//     font-size: 18px;
//     font-weight: 600;
//     margin-bottom: 20px;
//     color: rgba(237, 237, 237, 1);
//   }
// `;
