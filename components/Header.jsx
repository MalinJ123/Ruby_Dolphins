import { useState } from "react";
import {NavActionBox, NavBody, NavLinkBtn, NavLogo, NavLogoBox, NavMobileBox, NavPlaceholder, NavSideBox, ImposterNavLinkBtn, LoginNavBtn} from "../styles/HeaderStyle";

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
