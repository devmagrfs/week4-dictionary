import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateWordFB } from './redux/modules/word';

const Modify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { index } = useParams();
    const { id, word, content, explain } = useSelector(state => state.word.list[index])

    const inputWord = React.useRef(null);
    const inputContent = React.useRef(null);
    const inputExplain = React.useRef(null);

    const ModifyWordList = () => {
        dispatch(updateWordFB({
            id: id,
            word: inputWord.current.value,
            content: inputContent.current.value,
            explain: inputExplain.current.value,
        }))

        window.alert("단어를 수정했습니다.");
        navigate("/");
    }


    return (
        <>
            <ModifyStyled>
                <span>단어</span>
                <input className="word" ref={inputWord} defaultValue={word}></input>
                <span>설명</span>
                <input className="content" ref={inputContent} defaultValue={content}></input>
                <span>예문</span>
                <input className="explain" ref={inputExplain} defaultValue={explain}></input>
                <button onClick={ModifyWordList}>수정하기</button>
            </ModifyStyled>
        </>
    )
}

const ModifyStyled = styled.div`
text-align: center;
    background-color: ivory;
    margin: 0 auto;
    width: 50%;
    padding: 20px;

    span {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    input {
        font-size: 20px;
        margin-bottom: 10px;
    }

    button {
        display: block;
        margin: 10px auto;
    }
`;

export default Modify;