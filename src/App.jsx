import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card.jsx';
import CardContainer from './components/CardContainer.jsx';
import Header from './components/Header.jsx';

function App() {
    return (
        <>
            <Header />
            <h1>Vietnam MICHELIN Guide</h1>

            <CardContainer />
            
        </>
    )
}

export default App
