import axios from 'axios';
import React, { useEffect, useState, CSSProperties } from 'react';
import styled from 'styled-components';
import { AirTerjun, LogoMadina } from '../../assets/Assets';
import { Card, Container, Flexbox } from '../../components/Components';
import { Gridbox } from '../tour/Tour';
import HashLoader from 'react-spinners/HashLoader';

const override: CSSProperties = {
	display: 'block',
	margin: '1rem auto',
};

const Home = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios
			.get('https://server-pariwisata-anisa.herokuapp.com/api/getAll')
			.then((res) => {
				setLoading(true)
				if(res.data.length === 0){
				setLoading(false)
				setError('Gagal memuat data!')
				}
				setLoading(false)
				const limitData = res.data.slice(0, 3);
				setData(limitData);
			})
			.catch((err) => setError('Gagal memuat data!'));
	}, [setError, setData]);
	return (
		<div>
			<Backimage>
				<Container margin="0 auto 2rem">
					<div>
						<Flexbox justify="center">
							<img
								style={{ width: '5rem', marginRight: '2rem' }}
								src={LogoMadina}
								alt="logo madina"
							/>
							<div>
								<h1 className="mb-1">
									Selamat Datang di Website <br /> Mandailing Natal
								</h1>
							</div>
						</Flexbox>
					</div>
				</Container>
			</Backimage>
			<Container margin="1rem auto">
				<div>
					<Flexbox justify="center">
						<h2 className="mb-1">Tempat Wisata Populer</h2>
					</Flexbox>
					
				<HashLoader size={120} cssOverride={override} loading={loading} />

					{error ? (
						<h3 className="text-center" style={{ color: 'red' }}>
							{error}
						</h3>
					) : (
						<Gridbox className="mb-1" start>
							{data.map((tour) => (
								<Card
									image={`https://server-pariwisata-anisa.herokuapp.com/${tour.image}`}
									alt={tour.image}
									name={tour.title}
									desc={tour.desc}
									to={`/tour/${tour._id}`}
								/>
							))}
						</Gridbox>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Home;

const Backimage = styled.div`
	color: #fff;
	min-height: 90vh;
	background-image: url(${AirTerjun});
	background-size: cover;
	background-position: bottom;
`;
