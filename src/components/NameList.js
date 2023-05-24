import React from "react";
import Persons from "./Persons";

function NameList() {
  const persons = [
    {
      name: "Bruce",
      age: 32,
      skill: "React.Js",
    },
    {
      name: "Clark",
      age: 30,
      skill: "Angular",
    },
    {
      name: "Diana",
      age: 28,
      skill: "Vue.Js",
    },
  ];
  const personList = persons.map((person) => <Persons person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
