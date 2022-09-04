import React, { useState, useEffect, CSSProperties } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader';
import { Card, Container } from '../../components/Components';

const override: CSSProperties = {
	margin: '2rem auto',
};

const Tour = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://server-pariwisata-anisa.herokuapp.com/api/getAll')
			.then((res) => {
				if(res.data.length === 0){
					setError('Gagal memuat data!')
				}
				setLoading(false);
				setData(res.data);
			})
			.catch((err) => setError('Gagal memuat data!'));
	}, [setLoading]);

	return (
		<Container margin="2rem auto">
			<div>
				<h2 className="text-center mb-1 text-capitalize">
					Tempat wisata di Mandina
				</h2>

				<p
					className="text-center mb-1"
					style={{ maxWidth: '900px', margin: '0 auto' }}
				>
					berikut merupakan Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Praesentium tempora aspernatur minima hic id excepturi totam
					tenetur labore culpa deserunt maxime voluptate neque nam reprehenderit
					laudantium ea, magnam sed ad?
				</p>

				{loading && <HashLoader size={120} cssOverride={override} />}

				{error ? (
					<h3 className="text-center" style={{ color: 'red', margin: '1rem 0'}}>{error}</h3>
				) : (
					<Gridbox>
						{data.map((tour, index) => (
							<Card
								key={index}
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
	);
};

export default Tour;

export const Gridbox = styled.div`
	@media (min-width: 1000px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;
