import styled from "styled-components";

import { black, aero } from "../../colors";

export const WorkItemContainer = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 2rem;
		color: ${aero};
		text-align: center;
		margin-bottom: 50px;
	}
`;

export const WorkItemContent = styled.div`
	display: flex;
	flex-flow: row wrap;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 20px;
`;

export const WorkLogosContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1 1 auto;
	gap: 20px;
	flex-wrap: wrap;
	align-items: center;
`;

export const WorkDescriptionContainer = styled.div`
	flex: 1 1 auto;

	p {
		font-size: 1.1rem;
		color: ${black};

		a {
			text-decoration: none;
			text-decoration: underline;
			font-weight: bold;
		}
	}
`;
