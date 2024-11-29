import React from "react";
import vg from "../assets/2.webp"

function Home() {
  return (
    <>
      <div className="home">
        Home
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto asperiores commodi quaerat dolore quod enim? Enim optio deserunt praesentium at reprehenderit, possimus eum quod laborum, laudantium dicta iusto, numquam doloribus!</p>
        </div>
      </div>
    </>
  );
}

export default Home;
