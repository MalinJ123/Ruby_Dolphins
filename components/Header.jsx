import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./Login";
import "./Header.css"

const NavPlaceholder = styled.header`
	width: 100%;
	height: 48px;
	float: left;
`;

const NavBody = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 48px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #f7f8fa;
`;

const NavSideBox = styled.div`
    display: flex;
	flex-flow: row wrap;
	width: calc(25vw - 15px);
	height: 100%;
	margin-left: 15px;

	@media (orientation: portrait) {
        display: none;
    }
`;

const NavActionBox = styled.div`
    display: flex;
	flex-flow: row-reverse wrap;
	align-items: center;
	width: calc(25vw - 15px);
	margin-right: 15px;

	@media (orientation: portrait) {
        width: calc(30vw - 15px);
		margin-right: 15px;
    }
`;

const NavLogoBox = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	height: 100%;

	@media (orientation: portrait) {
        width: calc(70vw - 15px);
		justify-content: left;
		margin-left: 15px;
    }
`;

const NavLogo = styled(NavLink)`
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 800;
	text-decoration: none;
	color: #000;
	height: 48px;
	display: grid;
	align-items: center;

	@media (orientation: portrait) {
        font-size: 20px;
		font-weight: 600;
    }
`;

const NavLinkBtn = styled(NavLink)`
	padding: 0px 8px;
	border-radius: 6.75px;
	height: 48px;
	text-decoration: none;
	font-weight: 600;
	font-size: 18px;
	display: grid;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	
	color: #000;
	&:hover {
		color: #fff;
		background-color: #232323;
	}
`;

const ImposterNavLinkBtn = styled.button`
	padding: 0px 8px;
	border-radius: 6.75px;
	height: 48px;
	text-decoration: none;
	font-weight: 600;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	text-transform: uppercase;
	border: none;
	outline: none;
	cursor: pointer;

    &:hover {
		background-color: #232323;
        color: #fff;
    }
    @media (orientation: portrait) {
        display: grid;
    }
	@media (orientation: landscape) {
        display: none;
    }
`

const LoginNavBtn = styled.button`
	padding: 0px 8px;
	border-radius: 6.75px;
	height: 48px;
	text-decoration: none;
	font-weight: 600;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	text-transform: uppercase;
	border: none;
	outline: none;
	cursor: pointer;

    &:hover {
		background-color: #232323;
        color: #fff;
    }
`;

const NavMobileBox = styled.div`
	height: calc(100vh - 48px);
	margin-top: 48px;
	width: 100%;
	background-color: #f7f8fa;

	@media (orientation: landscape) {
        display: none;
    }
`

function NavLinks() {
	return (
		<>
			<NavLinkBtn to="/">Hem</NavLinkBtn>
			<NavLinkBtn to="/products">Produkter</NavLinkBtn>
		</>
	)
}


function Header() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	return (
        <div className="header-div">
		<NavPlaceholder>
			<NavBody>
				<NavSideBox>
					<NavLinks />
				</NavSideBox>
				<NavLogoBox>
					<NavLogo to="/">Oceanen</NavLogo>
				</NavLogoBox>
				<NavActionBox>
					<ImposterNavLinkBtn  onClick={() => setShowMobileNav(!showMobileNav)} title="Meny"><span className="material-symbols-outlined">menu</span></ImposterNavLinkBtn>
					<LoginNavBtn onClick={() => setShowLoginForm(!showLoginForm)}  ><span className="material-symbols-outlined">login</span></LoginNavBtn>
				</NavActionBox>
			</NavBody>
			{
                showMobileNav &&(
                    <NavMobileBox>
						<NavLinks />
					</NavMobileBox>
				)
			}
		</NavPlaceholder>
        
        {showLoginForm && 
        <LoginForm/>
        
        }
            </div>

	);
}

export default Header;
