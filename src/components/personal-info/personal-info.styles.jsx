import styled from "styled-components";

export const PersonalInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	row-gap: 20px;
	column-gap: 50px;
	flex-wrap: wrap;
`;

export const ProfilePic = styled.img`
	border-radius: 50%;
	-webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
`;

export const BioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BioContent = styled.p`
	max-width: 600px;
	line-height: 2rem;
	font-size: 1.5rem;
	color: $black;
	font-weight: bold;
	text-align: center;
	padding-inline: 20px;
`;
