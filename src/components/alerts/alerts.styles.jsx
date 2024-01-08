import styled from "styled-components";

import { success } from "../../colors";

export const AlertContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 55px;
	background: ${success};
	& > * {
		width: calc(100% / 3);
	}
`;

export const AlertMessage = styled.p`
	font-weight: bold;
	text-align: center;
`;

export const AlertCloseButton = styled.button`
	background: none;
	border: none;
	font-weight: bold;
	cursor: pointer;
	text-align: right;
	padding-right: 20px;
`;
