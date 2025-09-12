import React from "react"
import { Nav, Logo, NavLinks, LogoContainer, LogoImage } from "../styles/HeaderNav.styles"
import { Link, useLocation } from "react-router-dom"

const HeaderNav = () => {
    const location = useLocation();
    
    return (
        <Nav>
            <LogoContainer>
                <LogoImage src="/icons/logo.png" alt="Logo" />
                <Logo>TEST SMITH - AI</Logo>
            </LogoContainer>
            <NavLinks>
                <Link to="/agentchat" style={{ color: location.pathname === "/agentchat" ? "#00c3ff" : "#fff" }}>Agent Chat</Link>
                <Link to="/truthlens" style={{ color: location.pathname === "/truthlens" ? "#00c3ff" : "#fff" }}>Truth Lens</Link>
                <Link to="/scriptsmith" style={{ color: location.pathname === "/scriptsmith" ? "#00c3ff" : "#fff" }}>Script Smith</Link>
            </NavLinks>
        </Nav>
    )
}

export default HeaderNav