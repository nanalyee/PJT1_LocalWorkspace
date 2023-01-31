import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import CustomMuiTheme from "./theme";
import Home from "../features/home/Home";
import Game from "../features/game/openVidu/test";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomMuiTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
      {/* <Game /> */}
    </div>
  );
}

export default App;
