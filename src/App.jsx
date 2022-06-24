import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from "./components/header";
import Content from "./components/content";
import Competition from "./pages/competition/competition";

function App() {
  return (
    <div>
        <Header />
        <Content>
            <Competition />
        </Content>
    </div>
  )
}

export default App
