import './App.css';
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Card from './Card';
import AddWord from './AddWord';


function App() {
	return (
		<>
			<TitleStyled>나만의 단어장</TitleStyled>


			<ContainerStyled>
				<Routes>
					<Route path="/" element={<Card />} />
					<Route path="/add" element={<AddWord />} />
				</Routes>
			</ContainerStyled>
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
