import {Navigate, Route, redirect, Routes } from "react-router-dom"
import NavBar from "./UI/NavBar"
import './BaseApp.scss'
import HeoresIndex from "./HeroesApp/HeroesIndex"
import Footer from "./UI/Footer"

redirect("/app")

const BaseApp = ()=> {

    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="app" element={<HeoresIndex />}
                    />
                
                    <Route path="about" element={<HeoresIndex />}
                    />

                    <Route path="*" element={<Navigate to="app" replace />}
                    />
                </Routes>
            <Footer />
        </>
    )
}
export default BaseApp