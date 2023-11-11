import React from 'react'
import { RequireAuth } from 'react-auth-kit'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ModPage from './pages/ModPage'
import AuthPage from "./pages/AuthPage";
import AppLayout from "./AppLayout";
import IfAuth from "./IsAuth";
import NotFoundPage from "./pages/NotFoundPage";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="auth"
                    element={
                        <IfAuth otherwise={<AuthPage />}>
                            <Navigate to={'/'} replace />
                        </IfAuth>
                    }
                />
                <Route
                    element={
                        <AppLayout>
                            <Outlet />
                        </AppLayout>
                    }
                >
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/login' } element={<Login/>}/>
                <Route path={'/mod'} element={
                  <RequireAuth loginPath={'/'}>
                    <ModPage/>
                  </RequireAuth>
                }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent
