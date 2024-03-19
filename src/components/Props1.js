import React from 'react';
const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};
const Props1 = () => {
  return (
    <div>
      {/* Passing the "name" prop to Greeting component */}
      <Greeting name="Sandhya" />
      <Greeting name="Sai" />
      <Greeting name="Om" />
    </div>
  );
};

export default Props1;
