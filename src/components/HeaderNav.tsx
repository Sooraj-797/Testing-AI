import React from "react"
import { Nav, Logo, NavLinks, LogoContainer, LogoImage, RightSection, NotificationIcon, NotificationBadge, ProfileButton, ProfileSection, ProfileInfo, ProfileName, ProfileRole, ProfileImage, OnlineStatus, SearchBar, SearchIcon, SearchInput, SearchShortcut } from "../styles/HeaderNav.styles"
import { Link, useLocation } from "react-router-dom"
import { HeaderLogo } from "../styles/LoginPage.styles";
import { Bell, User, Search } from "lucide-react";
import type { User as UserType } from "../types/conversation.types";

interface HeaderNavProps {
    user?: UserType | null;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ user }) => {
    const location = useLocation();
    
    // Determine role from user data
    const isAdmin = user?.role === 'admin';
    const displayRole = user?.role === 'admin' ? 'ADMIN LEVEL' : user?.role === 'tester' ? 'TESTER LEVEL' : 'GUEST';
    const displayName = user?.username?.toUpperCase() || 'GUEST';
    
    return (
        <Nav>
            <HeaderLogo>
                <img src="/icons/logo.png" alt="TestForge AI Logo" style={{width: "95px",height: "75px",transform: "scale(1.5)",transformOrigin: "center",display: "block", margin: "0 auto",}}/>
                <span style={{marginLeft: "-60px"}}>TestForge AI</span>
            </HeaderLogo>
            <NavLinks>
                {isAdmin ? (
                    <>
                        <Link to="/agentchat" style={{ color: location.pathname === "/agentchat" ? "#00c3ff" : "#fff" }}>Admin Dashboard</Link>
                        <Link to="/truthlens" style={{ color: location.pathname === "/truthlens" ? "#00c3ff" : "#fff" }}>User Directory</Link>
                        <Link to="/scriptsmith" style={{ color: location.pathname === "/scriptsmith" ? "#00c3ff" : "#fff" }}>Role Governance</Link>
                    </>
                ) : (
                    <>
                        <Link to="/control" style={{ color: location.pathname === "/control" ? "#00c3ff" : "#fff" }}>CONTROL</Link>
                        <Link to="/modules" style={{ color: location.pathname === "/modules" ? "#00c3ff" : "#fff" }}>MODULES</Link>
                        <Link to="/history" style={{ color: location.pathname === "/history" ? "#00c3ff" : "#fff" }}>HISTORY</Link>
                        <Link to="/network" style={{ color: location.pathname === "/network" ? "#00c3ff" : "#fff" }}>NETWORK</Link>
                    </>
                )}
            </NavLinks>
            <RightSection>
                {!isAdmin && (
                    <SearchBar>
                        <SearchIcon>
                            <Search size={16} />
                        </SearchIcon>
                        <SearchInput type="text" placeholder="System search..." />
                        <SearchShortcut>⌘K</SearchShortcut>
                    </SearchBar>
                )}
                <NotificationIcon>
                    <Bell />
                    <NotificationBadge />
                </NotificationIcon>
                <ProfileSection>
                    <ProfileInfo>
                        <ProfileName>{displayName}</ProfileName>
                        <ProfileRole>{displayRole}</ProfileRole>
                    </ProfileInfo>
                    <ProfileButton>
                        <ProfileImage>
                            <User />
                            <OnlineStatus />
                        </ProfileImage>
                    </ProfileButton>
                </ProfileSection>
            </RightSection>
        </Nav>
    )
}

export default HeaderNav