import React from "react"
import { Nav, Logo, NavLinks, LogoContainer, LogoImage } from "../styles/HeaderNav.styles"

const HeaderNav = () => {
    return (
        <Nav>
            <LogoContainer>
                <LogoImage src="/icons/logo.png" alt="Logo" />
                <Logo>TEST SMITH - AI</Logo>
            </LogoContainer>
            <NavLinks>
                <a href="/">Home</a>
            </NavLinks>
        </Nav>
    )
}

export default HeaderNav