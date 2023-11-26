import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { black, aero } from "../../colors";

export const NavigationContainer = styled.div`
	background-color: ${black};
	padding: 30px 50px;
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
	font-size: 1.2rem;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;
export const LinkItem = styled(NavLink)`
	margin-inline: 10px;
	text-decoration: none;
	font-weight: bold;
	color: white;
	padding-bottom: 5px;
	transition: all 0.2s ease-in;

	&.active {
		color: ${aero};
		border-bottom: 3px solid ${aero};
	}
`;

export const Logo = styled.div`
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
		color: white;
		font-weight: bold;
		font-size: 1.5rem;
	}
`;

export const LogoIcon = styled.div`
	color: ${aero};
	display: flex;
	flex-direction: row;
	align-items: center;
`;
