import React from "react";

export default function Persons({ person }) {
  return (
    <div>
      <h3>
        My name is {person.name}. I'm {person.age} years old. I know skill{" "}
        {person.skill}
      </h3>
    </div>
  );
}
