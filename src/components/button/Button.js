import React from 'react';
import styled from 'styled-components';

const Button = ({ title, to }) => {
	return (
		<Btn>{title}</Btn>
	);
};

export default Button;

const Btn = styled.button`
	all: unset;
	padding: 0.8rem 1rem;
	border-radius: 0.3rem;
	cursor: pointer;
	background: #000;
	color: #fff;
`;
