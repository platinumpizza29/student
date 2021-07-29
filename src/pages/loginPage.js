import React from "react";
import "./loginPage.css";
import { Card, CardContent, Typography, TextField } from "@material-ui/core";

function loginPage() {
  return (
    <div>
      <div className="loginCard">
        <Card id="materialCard">
          <CardContent>
            <div class="container">
              <div class="row row-cols-2">
                <div class="row">
                  <div className="loginForm">
                    <h1>Student Login</h1>
                    <form>
                      <TextField></TextField>
                    </form>
                  </div>
                </div>
                <div class="col">
                  <img
                    src="./abstractBackground.jpg"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default loginPage;
