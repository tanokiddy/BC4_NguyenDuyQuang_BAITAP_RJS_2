import React, { Component } from "react";

export default class TryGlassesApp_Body extends Component {
  render() {
    let { name, url, desc, id } = this.props.glassesItem;
    if (id > 0) {
      return (
        <div className="">
          <div
            style={{
              background: "no-repeat url(glassesImage/model.jpg)",
              height: "320px",
              width: "20%",
              margin: "auto",
              backgroundSize: "contain",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <img
              src={url}
              style={{
                position: "absolute",
                top: "25%",
                left: "25%",
                width: "135px",
                height: "53px",
                opacity: 0.7,
              }}
            ></img>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                textAlign: "left",
                backgroundColor: "rgba(255, 165, 0,0.5)",
                // opacity: "0",
              }}
              className="p-1"
            >
              <h6 style={{ color: "blue", fontWeight: "Bold", opacity: "1" }}>
                {name}
              </h6>
              <p
                style={{ color: "white", fontSize: "12px", fontWeight: "Bold" }}
              >
                {desc}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <div
            style={{
              background: "no-repeat url(glassesImage/model.jpg)",
              height: "320px",
              width: "20%",
              margin: "auto",
              backgroundSize: "contain",
              backgroundPosition: "center",
              position: "relative",
            }}
          ></div>
        </div>
      );
    }
  }
}
