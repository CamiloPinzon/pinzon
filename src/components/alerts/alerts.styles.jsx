import styled from "styled-components";

import { success } from "../../colors";

export const AlertContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 55px;
	background: ${success};
	z-index: 2;
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
