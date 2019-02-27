import React, { Component } from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";

class App extends Component {
  render() {
    return (
      <Tabs>
        <Tab title="London">London is the capital city of England.</Tab>
        <Tab title="Paris">Paris is the capital of France.</Tab>
        <Tab title="Tokyo">Tokyo is the capital of Japan.</Tab>
      </Tabs>
    );
  }
}

export default App;
