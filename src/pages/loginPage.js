import React from "react";
import "./loginPage.css";
import { Card, CardContent, Typography, TextField } from "@material-ui/core";

function loginPage() {
  return (
    <div>
      <div className="head">
        <h1> Login </h1>
      </div>

      <img className="wave" src="./wave.png" />

      <div className="container">
        <div className="img">
          <img src="./bg.svg" style={{ height: "69vh" }} />
        </div>
      </div>
    </div>
  );
}

export default loginPage;
