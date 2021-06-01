import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./about/Main";
import {Skills} from "./skills/Skills";
import {Work} from "./work/Work";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Work />
        </div>
    );
}

export default App;
