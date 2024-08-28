import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NameBar from './components/NameBar/NameBar';
import StickyCard from './components/StickyCard/StickyCard';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            {/* <NameBar/> */}
            <Routes>
                <Route path="/" element={<MainPage name="Kayla"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
