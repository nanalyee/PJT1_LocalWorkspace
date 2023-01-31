import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import "./app.css";

import CustomMuiTheme from "./theme";
import Game from "../features/game/openVidu/test";
import Navbar from "../common/navbar/Navbar";
import Home from "../features/home/Home";
import Tuto from "../features/game/Tuto";

function App() {
  // ThemeProvider로 기본 테마를 적용합니다.
  // CssBaseline로 theme를 전처리해줍니다
  const size = {
    short: {
      navHeight: 80,
      marginBottom: 60,
    },
    long: {
      navHeight: 520,
      marginBottom: 200,
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={CustomMuiTheme}>
        <CssBaseline />
        <Navbar size={size.long} />
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            {/* <Home /> */}
            <Tuto />
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* <Game /> */}
    </div>
  );
}

export default App;
