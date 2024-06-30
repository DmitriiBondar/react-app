import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { routes } from "./routes.js"
import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { LoginPage } from "../pages/Login/LoginPage.jsx"
import { RegisterPage } from "../pages/Register/RegisterPage.jsx"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { useState } from "react"

export const AppRoutes = ({changeTheme, setChangeTheme}) => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute isAuth={isAuth} />}>
                    <Route path={routes.main} element={<MainPage setIsAuth={setIsAuth} changeTheme={changeTheme} setChangeTheme={setChangeTheme} />}/>
                </Route>
                <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth} />}/>
                <Route path={routes.register} element={<RegisterPage />}/>
                <Route path={routes.notFound} element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}