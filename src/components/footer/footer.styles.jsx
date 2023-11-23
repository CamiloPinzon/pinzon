import styled from "styled-components";

import { black, aero } from "../../colors";

export const FooterContainer = styled.div`
	background-color: ${black};
	color: ${aero};
	text-align: center;
	margin: 0;

	&p {
		margin: 0;
		padding: 20px;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 20px;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`;

export const SocialItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
export const FixLeet = styled(SocialItem)`
	margin-top: 10px;
`;
