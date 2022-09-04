import React, { useEffect, useState } from 'react';
import { Container } from '../../../components/Components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';
import { IconMaps } from '../../../assets/Assets';

function withRouter(Component) {
	return (props) => <Component {...props} params={useParams()} />;
}

const Detail = (props) => {
	const { id } = props.params;
	const [data, setData] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://server-pariwisata-anisa.herokuapp.com/api/getOne/${id}`)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError('Data tidak dapat ditemukan!');
				setLoading(false);
				console.log(err);
			});
	}, [id, setLoading, setError]);

	return (
		<Container margin="1rem auto">
			{loading && <HashLoader size={120} />}

			{error && (
				<div>
					<h2 style={{ color: 'red', margin: '1rem' }}>{error}</h2>
					<Link style={cta} to="/tour">
						Kembali
					</Link>
				</div>
			)}

			{!error && !loading && (
				<div>
					<Link style={cta} to="/tour">
						Kembali
					</Link>

					<Flexbox>
						<div>
							<img src={`https://server-pariwisata-anisa.herokuapp.com/${data.image}`} alt="sdsds" />
						</div>
						<div>
							<h2 className="mb-1">{data.title}</h2>
							<p className="mb-1">{data.desc}</p>

							<hr className="mb-1" />

							<Box>
								<img className="icon mr-1" src={IconMaps} alt="" />
								<a href={data.address} target="_blank" rel="noreferrer">
									Lihat di Google Maps
								</a>
							</Box>
						</div>
					</Flexbox>
				</div>
			)}
		</Container>
	);
};

export default withRouter(Detail);

const Box = styled.div`
	display: flex;
	align-items: center;
	padding: 0;
`;

const Flexbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;

	& > div {
		flex: 1;
		padding: 1rem;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

const cta = {
	fontWeight: '600',
	borderRadius: '0.3rem',
	padding: '0.8rem 1rem',
	color: '#fff',
	background: '#000000',
	margin: '0 1rem',
	width: 'fit-content',
	display: 'block',
};
