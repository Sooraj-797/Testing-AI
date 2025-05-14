import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    padding: 0.75rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1c1c22;
    color: white;
    border-bottom: 1px solid #333;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoImage = styled.img`
    width: 40px;
    height: 60px;
    object-fit: contain;
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    position: absolute;
    right: 2rem;

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        display: block;

        &:hover {
            color: #00c3ff;
        }
    }
`;
