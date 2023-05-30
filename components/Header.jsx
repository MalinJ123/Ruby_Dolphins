import { NavLink } from "react-router-dom";
import styled from "styled-components";
import login from "../src/assets/login.png";
import { useState } from "react";
import "./header.css";

const Head = styled.header`
    display: flex;
    width: 100%;
    height: 52px;
    float: left;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f7f7f7;
`;

const Link = styled(NavLink)`
    padding: 0px 12px;
    border-radius: 5.75px;

    &:hover {
        color: #fff;
        background-color: #232323;
    }
`;

function Header() {
    return (
        <Head>
            <Nav>
                <Link to="/">Hem</Link> 
                <Link to="/products">Produkter</Link>
                <Link to="/users">Users</Link>
                <img className="login-image" src={login} alt="" />
            </Nav>
        </Head>
    );
}

export default Header;
