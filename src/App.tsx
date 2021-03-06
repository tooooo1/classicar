import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { Nav, Footer } from "../src/components"
import { Main } from "./pages"
import React from "react"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
`

const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Nav />
        {/* <Logo /> */}
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default App
