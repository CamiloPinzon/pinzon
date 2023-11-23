import styled from "styled-components";

import { black, aero } from "../../colors";

export const ButtonContainer = styled.div`
	background-color: ${aero};
	color: ${black};
	cursor: pointer;
	font-size: 1.6rem;
	padding: 20px 50px;
	transition: all 0.2s ease-in;
	border: none;
	font-weight: bold;

	&hover {
		transform: scale(1.01);
		-webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
	}
`;
