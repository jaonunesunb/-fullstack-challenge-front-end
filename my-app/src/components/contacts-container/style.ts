import styled from "styled-components";

export const StyledContactsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 0 10px;
	margin-top: 20px;
	.title {
		margin: 0;
	}
	.btn-open-modal {
		background-color: transparent;
		border: none;
		font-size: 2em;
		color: #fff5ff;
		cursor: pointer;
		transition: 0.2s;
	}
	
	.contact-cards-container {
		gap: 10px;
		display: flex;
		flex-direction: column;
	}
	@media only screen and (min-width: 900px) {
		.contact-cards-container {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
`;
