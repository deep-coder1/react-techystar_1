import React from "react";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home" id="home">
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

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut harum! Dignissimos dolorem eveniet rem totam praesentium quisquam corporis. Ipsa eaque laudantium sint modi repellat incidunt temporibus? Quaerat iure sit fuga architecto, aspernatur quis voluptatum odit quam ullam nam nisi cupiditate deserunt eius saepe libero, sapiente labore rerum rem deleniti laudantium sed voluptates ducimus dolorem? Deleniti dolor iste dolorem deserunt ipsum, quod quia mollitia quis amet quasi nihil architecto similique!</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{
              animationDelay: "1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
