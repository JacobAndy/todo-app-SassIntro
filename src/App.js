import React, { Component } from "react";
import "./App.css";
import Daily from "./Daily/Daily";

class App extends Component {
  render() {
    return (
      <main>
        <Daily name="Important" />
        <Daily name="Daily" />
        <Daily name="Weekly" />
        <Daily name="Monthly" />
        <Daily name="Yearly" />
      </main>
    );
  }
}

export default App;
