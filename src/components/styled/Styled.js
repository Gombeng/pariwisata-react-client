import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: ${(props) => (props.start ? 'start' : 'center')};
	min-height: 90vh;
	width: 90%;
	background: ${(props) => (props.bg ? '#000' : '')};
	margin: ${(props) => props.margin};
	/* border: 1px solid black; */
`;

const Flexbox = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* max-height: 270vh; */
	width: ${(props) => props.width};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	align-items: ${(props) => (props.start ? 'start' : 'center')};
	justify-content: ${(props) => props.justify};
	/* background: #000; */

	& > div {
		flex: 1;
	}
`;

export { Container, Flexbox };
