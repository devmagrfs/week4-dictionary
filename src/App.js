import './App.css';
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from './Card';
import AddWord from './AddWord';
import Modify from './Modify';
import Spinner from './Spinner';

function App() {
	const is_loaded = useSelector(state => state.word.is_loaded);

	return (
		<>
			<TitleStyled>나만의 단어장</TitleStyled>
			<ContainerStyled>
				<Routes>
					<Route path="/" element={<Card />} />
					<Route path="/add" element={<AddWord />} />
					<Route path="/modify/:index" element={<Modify />} />
				</Routes>
			</ContainerStyled>
			{!is_loaded && <Spinner />}
		</>
	);
}

const TitleStyled = styled.h1`
	text-align: center;
`;

const ContainerStyled = styled.div`
	display: flex;
	width: 100%;
	margin: 20px;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: flex-start;
	box-sizing: border-box;
	background-color: #077029;
`;


export default App;
