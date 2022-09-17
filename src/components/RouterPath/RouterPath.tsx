import React from "react";
import { Route,BrowserRouter , Routes } from 'react-router-dom';
import ShopPage from '../../components/shopPage/shopPage'
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";

const RouterPath=()=>{
return(
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="shopPage" element={<ShopPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}
export default RouterPath;