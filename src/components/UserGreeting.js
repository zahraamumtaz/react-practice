import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return (
      this.state.isLoggedIn && (
        <div>Welcome Vishwas (using short cicuit operator)</div>
      )
    );
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas (using if-else)</div>;
    // } else {
    //   return <div>Welcome Guest (using if-else)</div>;
    // }

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Vishwas (Using element variables)</div>;
    // } else {
    //   message = <div>Hello Guest (Using element variables)</div>;
    // }
    // return <div>{message}</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas (Using ternary operator)</div>
    // ) : (
    //   <div>Welcome Guest (Using ternary operator)</div>
    // );

    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
