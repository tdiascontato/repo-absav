import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Routes from "./routes";

import { GlobalStyle, Container } from "./styles/global";

function App() {
  return (
    <div>
      <Container>  
        <BrowserRouter>
          <GlobalStyle />
            <Header/>  
            <Routes />    
        </BrowserRouter>
      </Container>  
    </div>
  );
}

export default App;
