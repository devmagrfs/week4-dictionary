import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadWordFB, completedWordFB } from './redux/modules/word';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';



const Card = () => {
    const dic_list = useSelector((state) => state.word.list);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadWordFB());
    }, [dispatch]);

    const completedWord = async (dic) => {
        await dispatch(completedWordFB(dic))
    }

    return (
        <>
            {
                dic_list.length === 0
                    ?
                    <div></div>
                    :

                    dic_list.map((dic, idx) => {
                        return (
                            dic.completed === true
                                ?
                                <CardStyled key={dic.id}>
                                    <span>단어</span>
                                    <p className="word">{dic.word}</p>
                                    <span>설명</span>
                                    <p className="content">{dic.content}</p>
                                    <span>예문</span>
                                    <p className="explain">{dic.explain}</p>

                                    <Button variant="contained" color="success" onClick={() => {
                                        completedWord(dic)
                                    }}>공부함</Button>

                                    <Link to={`/modify/${idx}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" endIcon={<SendIcon />}>
                                            수정하기
                                        </Button>
                                    </Link>

                                </CardStyled>
                                :
                                <CompletedCardStyled key={dic.id}>
                                    <span>단어</span>
                                    <p className="word">{dic.word}</p>
                                    <span>설명</span>
                                    <p className="content">{dic.content}</p>
                                    <span>예문</span>
                                    <p className="explain">{dic.explain}</p>

                                    <Button variant="contained" onClick={() => {
                                        completedWord(dic)
                                    }}>생각해보니 공부 안함</Button>

                                    <Link to={`/modify/${idx}`} style={{ textDecoration: "none" }}>
                                        <Button variant="contained" endIcon={<SendIcon />} >
                                            수정하기
                                        </Button>
                                    </Link>
                                </CompletedCardStyled>
                        )
                    })
            }
            <Link to="/add" style={{ textDecoration: "none" }}>
                <AddBtnStyled>
                    <Button color="secondary" endIcon={<SaveIcon />} variant="contained">
                        단어 추가하기
                    </Button>
                </AddBtnStyled>
            </Link>
        </>
    )
}

const CardStyled = styled.div`
    border: 3px solid green;
    width: 28%;
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    background-color: ivory;
    word-break:break-all;

    span {
        font-size: 13px;
        margin: 0;
    }

    p {
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 14px;
    }

    .explain {
        color: skyblue;
    }
`;

const CompletedCardStyled = styled.div`
    border: 3px solid green;
    width: 28%;
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    background-color: gray;
    word-break:break-all;

    span {
        font-size: 13px;
        margin: 0;
    }

    p {
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 14px;
    }

    .explain {
        color: skyblue;
    }
`;

const AddBtnStyled = styled.div`
    position: absolute;
    top: 40px;
    right: 55px;
`;

export default Card;