import styled from "styled-components";
import { black, khaki } from "../../colors";

export const SkillsInfoContainer = styled.section`
	margin-block: 50px;
	display: flex;
	flex-direction: column;
`;

export const GroupSkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	&h2 {
		font-size: 2.5rem;
		color: $black;
	}
`;

export const SkillsIconsContainer = styled.div`
	margin-block: 20px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	column-gap: 50px;
	row-gap: 50px;
	padding-inline: 20px;
`;

export const IconContainer = styled.div`
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&p {
		text-align: center;
		color: ${khaki};
	}

	&hover {
		transform: scale(1.5);

		p {
			color: ${black};
		}
	}
`;
