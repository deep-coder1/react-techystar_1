<<<<<<< HEAD
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
=======
import React from 'react'
import Product from './Product';

function Home() {
    const arr=[1, 2, 3, 4];

  return (
    <div>
        {/* <Product value={1} />
        <Product value={2} />
        <Product value={3} />
        <Product value={4} /> */}

        {
            arr.map(i=>(
                <Product value={i} key={i} />
            ))
        }
    </div>
  )
}

export default Home
>>>>>>> 1457b1129999546ad6fcbb0313136ec428bc85ce
