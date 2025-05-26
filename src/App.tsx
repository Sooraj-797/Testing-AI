import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/apps/HomePage';
import TruthLensPage from './pages/apps/TruthLensPage';
import HeaderNav from './components/HeaderNav';
import GlobalStyles from './styles/GlobalStyles';

const MainLayout = () => {
    return (
        <>
            <HeaderNav />
            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
};

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<MainLayout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/agents" element={<div>Agents Page</div>} />
                        <Route path="/truthlens" element={<TruthLensPage />} />
                        <Route path="/scriptsmith" element={<div>Script Smith Page</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;