import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard.jsx";
import MessageDashboard from "./MessageDashboard/MessageDashboard.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/messages" exact element={<MessageDashboard/>} />
                <Route path="/" exact element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;