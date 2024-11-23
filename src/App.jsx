import { Fragment } from "react";
import MyHeading from "./components/MyHeading";

const a = 20;

// function MyHeading() {
//   return <h1>Heading</h1>;
// }

// const MyHeading = () => <h1>Heading</h1>;

function App() {
  return (
    <Fragment>
    <div>

      <MyHeading />

      <h1>Welcome page 1 {a}</h1>
    </div>

    <div>
      <h2>React JS learn</h2>
    </div>
    </Fragment>
  );
}

export default App;
