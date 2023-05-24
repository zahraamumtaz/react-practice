import React from "react";
import Persons from "./Persons";

function NameList() {
  const names = ["Clark", "Diana", "Bruce"];
  const personList = names.map((name, index) => (
    <h1 key={index}>
      {index}: {name}
    </h1>
  ));
  return <div>{personList}</div>;
  //   const persons = [
  //     {
  //       id: "1",
  //       name: "Bruce",
  //       age: 32,
  //       skill: "React.Js",
  //     },
  //     {
  //       id: "2",
  //       name: "Clark",
  //       age: 30,
  //       skill: "Angular",
  //     },
  //     {
  //       id: "3",
  //       name: "Diana",
  //       age: 28,
  //       skill: "Vue.Js",
  //     },
  //   ];
  //   const personList = persons.map((person) => (
  //     <Persons key={person.id} person={person} />
  //   ));
  //   return <div>{personList}</div>;
}

export default NameList;
