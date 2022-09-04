import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ image, alt, name, desc, to, ...rest }) => {
	return (
		<Cardcontainer {...rest}>
			<img
				style={{ maxHeight: '200px', width: '100%' }}
				className="mb-1"
				src={image}
				alt={alt}
			/>
			<h3 className="mb-half">{name}</h3>
			<p className="mb-1 ">{desc}</p>
			<div style={btnStyle}>
				<Link style={linkStyle} to={`${to}`}>
					Selengkapnya
				</Link>
			</div>
		</Cardcontainer>
	);
};

export default Card;

const linkStyle = {
	color: '#fff',
};

const btnStyle = {
	padding: '0.8rem 1rem',
	maxWidth: 'fit-content',
	borderRadius: '0.3rem',
	cursor: 'pointer',
	background: '#000',
	color: '#fff',
};

const Cardcontainer = styled.div`
	padding: 1rem;
	margin: 1rem;
	width: 300px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
		rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	border-radius: 0.3rem;

	p {
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space:nowrap;
	}

	@media (max-width: 1000px) {
		margin: 1rem auto;
	}

`;
