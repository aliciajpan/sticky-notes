import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NameBar from './components/NameBar/NameBar';
import StickyCard from './components/StickyCard/StickyCard';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import StickyForm from './components/StickyForm/StickyForm';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/person/:idFromParams" element={<MainPage/>}/>
                <Route path="/form" element={<StickyForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
