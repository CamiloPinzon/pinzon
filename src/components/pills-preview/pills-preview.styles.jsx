import styled from "styled-components";
import { khaki, black } from "../../colors";

export const PillsSectionsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 50px;
	justify-content: center;
	padding: 50px;
`;

export const PillSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	color: ${khaki};

	&:hover {
		transform: scale(1.5);
		color: ${black};
	}
`;
