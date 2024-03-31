import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { black, aero } from "../../colors";

export const NavigationContainer = styled.div`
	background-color: ${black};
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
	font-size: 1.2rem;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	height: 80px;
	padding: 30px;
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	row-gap: 10px;
`;

export const LinkItem = styled(NavLink)`
	display: flex;
	flex-direction: row;
	column-gap: 10px;
	margin-inline: 10px;
	text-decoration: none;
	font-weight: bold;
	color: white;
	padding-bottom: 5px;
	transition: all 0.2s ease-in;
	padding-bottom: 3px;

	&::after {
		transition: transform 0.3s ease;
		transform: scaleX(0);
		transform-origin: 0 0;
	}

	&.active,
	&:hover {
		color: ${aero};
		transform: scaleX(1);
	}
`;
