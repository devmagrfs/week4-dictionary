import React from 'react';
import styled from 'styled-components';
import { createWordFB } from './redux/modules/word';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const AddWord = () => {
    const dispatch = useDispatch();
    const inputWord = React.useRef(null);
    const inputContent = React.useRef(null);
    const inputExplain = React.useRef(null);
    const navigate = useNavigate();


    const addWordList = () => {
        dispatch(createWordFB(
            {
                word: inputWord.current.value,
                content: inputContent.current.value,
                explain: inputExplain.current.value,
                completed: false,
            }
        ));

        window.alert("단어가 추가되었습니다.");
        navigate("/");
    }

    return (
        <>
            <AddWordStyled>
                <span>단어</span>
                <input className="word" ref={inputWord}></input>
                <span>설명</span>
                <input className="content" ref={inputContent}></input>
                <span>예문</span>
                <input className="explain" ref={inputExplain}></input>
                <button onClick={addWordList}>추가하기</button>
            </AddWordStyled>
        </>
    )
}

const AddWordStyled = styled.div`
    margin: 20px auto;
    width: 780px;
    text-align: center;
    border: 2px solid red;
    padding: 20px;
    background-color: ivory;
    
    span {
        display: block;
        font-size: 20px;
        margin-bottom: 10px;
    }

    input {
        margin-bottom: 10px;
        border: 2px solid red;
        width: 60%;
    }

    button {
        display: block;
        margin: 0 auto;
    }
`;

export default AddWord;