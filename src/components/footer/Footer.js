import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return <Container>&copy; Copyright 2022</Container>;
};

export default Footer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 10vh;
	background: #000;
	color: #fff;
`;
