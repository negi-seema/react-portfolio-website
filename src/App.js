import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./CommonComponent/Footer";
import Navbar from "./CommonComponent/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Success from "./Component/Success";
import Services from "./Component/Services";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
function App() {
  const theme = {
    color: {
      shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      headerbg: "#F5F5F5",
      blacktxt: "#3C4048",
      darkblue: "#1C3879",
      whitetxt: "#F2F2F2",
      footerbg: "#231955",
      lightgrey: "#CFD2CF",
      hoverbg: '#23195547',
    },
    media: {
      mobile: "768px",
      tab: "992px",
    },
  };
  return (
    <>
      <Wrapper className="main-wrapper">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          <Route  path='/success' element={<Success/>} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
display: flex;
height:100vh;
overflow-x:hidden;
flex-direction:column;
`
export default App;
