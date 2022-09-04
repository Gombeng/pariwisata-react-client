import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	IconClose,
	IconMenu,
	LogoKominfo,
	LogoMadina,
} from '../../assets/Assets';
import { Flexbox } from '../Components';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<Box>
			<Navcontainer>
				<Flexbox>
					<img className="logo mr-half" src={LogoMadina} alt="" />
					<img className="logo mr-half" src={LogoKominfo} alt="" />
					<h4>| MADINA</h4>
				</Flexbox>

				<div className="nav-icon" onClick={handleClick}>
					<img src={click ? IconClose : IconMenu} alt="" />
				</div>

				<div className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="/"
					>
						Beranda
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="tour"
					>
						Tempat Wisata
					</NavLink>
					<NavLink className="cta" to="about">
						Tentang Kami
					</NavLink>
				</div>
			</Navcontainer>
		</Box>
	);
};

export default Navbar;

const Box = styled.div`
	background: #000;
	position: sticky;
	top: 0;
	z-index: 99;
`;

const Navcontainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 90%;
	margin: 0 auto;
	min-height: 10vh;
	color: #fff;

	.nav-icon {
		display: none;
	}

	@media (max-width: 1000px) {
		.nav-icon {
			display: block;
		}

		.nav-menu {
			position: absolute;
			top: 10vh;
			left: -100vw;
			width: 100%;
			padding: 1rem;
			text-align: center;
			background: rgb(0, 0, 0);
			border-radius: 0 0 0.3rem 0.3rem;
			transition: 0.6s;
			z-index: -99;

			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;

			&.active {
				top: 10vh;
				left: 0;
			}

			.link:nth-child(2) {
				margin-bottom: 1rem;
			}
		}
	}

	.link {
		color: #b6b6b6;
		padding: 0.8rem 1rem;
		transition: 0.3s;

		&:hover {
			color: #fff;
		}

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.active {
		color: #fff;
		font-weight: 500;
	}

	.cta {
		font-weight: 600;
		border-radius: 0.3rem;
		padding: 0.8rem 1rem;
		color: #000000;
		background: #fff;
		width: fit-content;
	}
`;
