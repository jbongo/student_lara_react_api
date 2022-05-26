import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditStudent from './pages/EditStudent';

const Routeur = () => {
    
    return (
    
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Student/>}/>
                <Route path="/add-student"  element={<AddStudent/>}/>
                <Route path="/update-student/:id"  element={<EditStudent/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/register"  element={<Register/>}/>
            </Routes>
        
        </BrowserRouter>
    )
    
}


export default Routeur;