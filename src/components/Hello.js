import React from "react";

const Hello = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name}, from Hello.js a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Hello;
