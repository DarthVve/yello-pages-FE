import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { Landing, SignUp, Login } from '../pages';


const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            {/* <Route path="/" element={< />} />
            <Route path="/" element={< />} /> */}
            <Route path="/register" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />

            
            {/*Protected Routes*/}
            <Route element={<ProtectedRoute/>}>
                {/* <Route path="/userprofile/:id" element={< />} />
                <Route path='/admin/dashboard' element={< />} />
                <Route path="/dashboard/:id" element={< />} /> */}
            </Route>

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
    )
};

export default BaseRoute;