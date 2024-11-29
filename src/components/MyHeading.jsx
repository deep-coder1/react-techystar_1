// const MyHeading = () => <h1>My Heading</h1>;

// export default MyHeading;


// rafce 

import React from 'react'

// const MyHeading = () => {
// const MyHeading = (props) => {
// const MyHeading = ({name, text, price}) => {
const MyHeading = ({name, text, price = 200}) => {
  // const text = props.text;

  // const obj = {
  //   name: "Sandeep",
  //   age: 23,
  // }

  // const {name,age} = obj;

  alert(price);

  return (
    <>
      <div>MyHeading Def</div>
      {/* <h2>{props.name}</h2>
      <h2>{text}</h2> */}

      {/* <h3>{obj.name}</h3>
      <h3>{age}</h3>
      <h3>{name}</h3> */}

      <h2>{name}</h2>
      <h2>{text}</h2>
      <MyHeadingTitle1 value={price} />

      <main>This is main</main>
      <footer>This is footer</footer>
    </>
  )
};

// const MyHeadingTitle1 = () => <h3>My Heading Title 1</h3>;
const MyHeadingTitle1 = ({value}) => <h3>{value}</h3>;
const MyHeadingTitle2 = () => <h4>My Heading Title 2</h4>;
const MyHeadingTitle3 = () => <h5>My Heading Title 3</h5>;

export default MyHeading;

export { MyHeadingTitle1, MyHeadingTitle2, MyHeadingTitle3 };