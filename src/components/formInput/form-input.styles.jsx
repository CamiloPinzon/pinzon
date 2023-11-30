import styled, { css } from "styled-components";

const inputStyles = css`
	background: none;
	background-color: #fff;
	font-size: 18px;
	padding: 10px 0;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;

	border-bottom: 1px solid #a39b8b;
	margin: 25px 0;

	&:focus {
		outline: none;
	}
`;

export const LabelContainer = styled.label`
	font-size: 0.9 rem;
	position: relative;
	bottom: -20px;
`;

export const TextAreaField = styled.textarea`
	${inputStyles}
`;

export const InputField = styled.input`
	${inputStyles}
`;
