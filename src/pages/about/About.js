/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { AirTerjun, IconEmail, IconMaps, IconPhone } from '../../assets/Assets';
import { Container, Flexbox } from '../../components/Components';

const About = () => {
	const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021298.615826836!2d98.82825224259385!3d0.7809414405324326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302bcf1af5e053a7%3A0x3039d80b220ce60!2sKabupaten%20Mandailing%20Natal%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1662223564719!5m2!1sid!2sid" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

	function Iframe(props) {
		return (
			<div
				dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
			/>
		);
	}

	return (
		<Container margin="0 auto">
			<Box>
				<div className="m-1 info">
					<h2 className="mb-1">Tentang Mandailing Natal / Madina</h2>
					<img className="mb-1" src={AirTerjun} alt="" />
					<p className="mb-1">
						Mandailing Natal (disingkat Madina) adalah sebuah kabupaten yang
						berada di provinsi Sumatra Utara, Indonesia. Kabupaten Mandailing
						Natal berbatasan langsung dengan provinsi Sumatra Barat. Pada tahun
						2021, penduduk kabupaten ini berjumlah 489.569 jiwa, dengan
						kepadatan 80 jiwa/km<sup>2</sup>. Kabupaten Mandailing Natal
						merupakan pemekaran dari Kabupaten Tapanuli Selatan pada tahun 1998.
					</p>
				</div>

				<div className="m-1 address">
					<h2 className="mb-1half">Kontak & lokasi</h2>

					<Iframe iframe={iframe} />
					<div className="mb-1half"></div>
					<Flexbox className="mb-1half">
						<img className="icon mr-1" src={IconMaps} alt="location" />
						<a
							href="https://goo.gl/maps/iZTDziVzrBgQTSLn9"
							target="_blank"
							rel="noreferrer"
						>
							Sumatra Utara, Indonesia
						</a>
					</Flexbox>
					<Flexbox className="mb-1half">
						<img className="icon mr-1" src={IconPhone} alt="phone" />
						<a
							href="https://wa.me/6282361628105"
							target="_blank"
							rel="noreferrer"
						>
							Whatsapp
						</a>
					</Flexbox>
					<Flexbox className="mb-1half">
						<img className="icon mr-1" src={IconEmail} alt="email" />
						<p>pariwisataanisa@gmail.com</p>
					</Flexbox>
				</div>
			</Box>
		</Container>
	);
};

export default About;

const Box = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;

	.address {
		/* order: 1; */
		flex: 1;
	}

	.info {
		/* order: 2; */
		flex: 2;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

// hujan tanda tanya
// berilmu

