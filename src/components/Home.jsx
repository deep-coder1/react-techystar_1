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

      <div className="home3">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut harum! Dignissimos dolorem eveniet rem totam praesentium quisquam corporis. Ipsa eaque laudantium sint modi repellat incidunt temporibus? Quaerat iure sit fuga architecto, aspernatur quis voluptatum odit quam ullam nam nisi cupiditate deserunt eius saepe libero, sapiente labore rerum rem deleniti laudantium sed voluptates ducimus dolorem? Deleniti dolor iste dolorem deserunt ipsum, quod quia mollitia quis amet quasi nihil architecto similique!</p>
        </div>
      </div>
    </>
  );
}

export default Home;
