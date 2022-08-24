import React, { Component } from "react";
import TryGlassApp_Items from "./TryGlassApp_Items";

export default class TryGlassesApp_Footer extends Component {
  render() {
    return (
      <div style={{ margin: "0 200px 0" }}>
        <div className="row">
          {this.props.glassesArr.map((item) => {
            return (
              <TryGlassApp_Items
                handleAddGlasses={this.props.handleAddGlasses}
                glassesItem={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
