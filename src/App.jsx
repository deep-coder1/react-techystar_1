// import { Fragment } from "react";
// // import MyHeading from "./components/MyHeading";
// // import MyHeadingDefault from "./components/MyHeading";
// // import { MyHeadingTitle1 as MyCustomName, MyHeadingTitle2, MyHeadingTitle3 } from "./components/MyHeading"
// // import { MyHeadingTitle1, MyHeadingTitle2, MyHeadingTitle3 } from "./components/MyHeading"
// import MyHeading,{ MyHeadingTitle1, MyHeadingTitle2, MyHeadingTitle3} from "./components/MyHeading";

// const a = 20;

// // function MyHeading() {
// //   return <h1>Heading</h1>;
// // }

// // const MyHeading = () => <h1>Heading</h1>;

// function App() {
//   return (
//     <Fragment>
//       <div>
//         {/* <MyHeadingDefault /> */}
//         {/* <MyCustomName /> */}
//         {/* <MyHeading /> */}
//         <MyHeading name={"Deepak"} text={"Nice one"} price={2420} />
//         <MyHeadingTitle1 />
//         <MyHeadingTitle2 />
//         <MyHeadingTitle3 />

//         <h1>Welcome page 1 {a}</h1>
//       </div>

//       <div>
//         <h2>React JS learn</h2>
//       </div>
//     </Fragment>
//   );
// }

// export default App;

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/product/:id" element={<Product/>} /> */}
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
