import React, { Component } from "react";
import { dataGlassesArr } from "./dataGlasses";
import TryGlassesApp_Header from "./TryGlassesApp_Header";
import TryGlassesApp_Body from "./TryGlassesApp_Body";
import TryGlassesApp_Footer from "./TryGlassesApp_Footer";

export default class TryGlassesApp extends Component {
  state = {
    glassesArr: dataGlassesArr,
    glassesItem: {},
  };
  handleAddGlasses = (glasses) => {
    let index = this.state.glassesArr.findIndex((item) => {
      return item.id == glasses.id;
    });
    index != -1 && this.setState({ glassesItem: this.state.glassesArr[index] });
  };
  render() {
    return (
      <div style={{ backgroundColor: "rgba(0,0,0,0.1" }}>
        <TryGlassesApp_Header />
        <TryGlassesApp_Body glassesItem={this.state.glassesItem} />
        <TryGlassesApp_Footer
          glassesArr={this.state.glassesArr}
          handleAddGlasses={this.handleAddGlasses}
        />
      </div>
    );
  }
}
