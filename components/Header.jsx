import { useContext, useState } from "react";
import {NavActionBox, NavBody, LoginNavLinkBtn, NavLinkBtn, NavLogo, NavLogoBox, NavMobileBox, NavPlaceholder, NavSideBox, ImposterNavLinkBtn, LoginNavBtn} from "../styles/HeaderStyle";
import LoginForm from "./Login";
import "./Header.css"
import { LoginContext } from "../src/ContextRoot";
import SettingsNavBar from "./SettingsNav";

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
	const [showAdminSettings, setShowAdminSettings] = useState(false);

	const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

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
					{
						isLoggedIn && (
							<LoginNavLinkBtn onClick={() => setShowAdminSettings(!showAdminSettings)} >
								<span className="material-symbols-outlined">settings</span>
							</LoginNavLinkBtn>
						)
					}
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
        {showAdminSettings && 
        <SettingsNavBar/>
        
        }
            </div>

	);
}

export default Header;
