import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	max-width: 370px;
	gap: 20px;
	background-color: var(--grey3);
	color: var(--fontDefault);
	padding: 20px;
	border-radius: 5px;
	input {
		outline: transparent;
		background-color: var(--grey2);
		border: 1px solid var(--grey1);
		border-radius: 5px;
		padding: 10px;
		color: var(--fontDefault);
	}
	input:focus {
		border: 1px solid var(--whiteFixed);
	}
	.form-title {
		text-align: center;
	}
	.to-register-window {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	i {
		font-size: 0.8em;
		color: var(--grey1);
	}
`;
