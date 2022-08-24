import React, { Component } from "react";

export default class extends Component {
  render() {
    let { url } = this.props.glassesItem;
    return (
      <div className="col-2 my-4">
        <button
          onClick={() => {
            this.props.handleAddGlasses(this.props.glassesItem);
          }}
          className="btn btn-link border-white"
        >
          <img style={{ width: "100%", height: "100%" }} src={url}></img>
        </button>
      </div>
    );
  }
}
