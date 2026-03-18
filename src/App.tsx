import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/apps/HomePage';
import AdminHomePage from './pages/apps/AdminHomePage';
import TruthLensPage from './pages/apps/TruthLensPage';
import AgentChatPage from './pages/apps/AgentChatPage';
import BenchmarkPage from './pages/apps/BenchmarkPage';
import HeaderNav from './components/HeaderNav';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const MainLayout = () => {
    const { user } = useAuth();
    
    return (
        <>
            <HeaderNav user={user} />
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
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route element={<MainLayout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/admin-home" element={<AdminHomePage />} />
                        <Route path="/agentchat" element={<AgentChatPage/>} />
                        <Route path="/truthlens" element={<TruthLensPage />} />
                        <Route path="/scriptsmith" element={<div>Script Smith Page</div>} />
                        <Route path="/benchmark" element={<BenchmarkPage />} />
                        <Route path="/flowsmith" element={<div>Flow Smith Page</div>} />
                    </Route>
                </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App;