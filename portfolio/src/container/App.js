import React, { Component } from "react";
import "./App.css";

import IntroPage from './IntroPage/IntroPage';
import Navbar from "../Components/Navbar/Navbar";
import Body from "../Components/Body/Body";
import Footer from "../Components/Footer/Footer";

class App extends Component {
  state = {
    user: [
      { id: "1", name: "Ryuichi", age: "29" },
      { id: "2", name: "Jessica", age: "29" },
      { id: "3", name: "Chelsea", age: "Unknown" }
    ],
    intro: true
  }

  toggle = () => {
    const show = this.state.intro;
    
    setTimeout(() => {
      this.setState({
        intro: !show
      });
    }, 1500);

  }

  render() {
    console.log(this.state.user);
    if (this.state.intro) {
      return (
        <IntroPage clicked={this.toggle} />
      )
    } else {
      return (<div >
        <Navbar name={this.state.user} />
        <Body />
        <Footer />
      </div >)
    }
  }
}
export default App;