import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { db } from "./firebase";
import { loadWord, loadWordFB } from './redux/modules/word';


const Card = (props) => {
    const dic_list = useSelector((state) => state.word.list);
    const dispatch = useDispatch();
    console.log(dic_list);

    React.useEffect(() => {
        dispatch(loadWordFB());
    }, []);

    return (
        <>
            {
                dic_list.length === 0
                    ?
                    <div>아무것도 없어요</div>
                    :

                    dic_list.map((dic, idx) => {
                        return (
                            <CardStyled key={idx}>
                                <span>단어</span>
                                <p className="word">{dic.word}</p>
                                <span>설명</span>
                                <p className="content">{dic.content}</p>
                                <span>예문</span>
                                <p className="explain">{dic.explain}</p>
                            </CardStyled>
                        )
                    })
            }
            <Link to="/add" style={{ textDecoration: "none" }}> <LinkStyled>단어 추가하기</LinkStyled> </Link>
        </>
    )
}

const CardStyled = styled.div`
    border: 3px solid green;
    width: 28%;
    text-align: left;
    border-radius: 10px;
    padding: 5px;
    margin: 15px;
    background-color: ivory;

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

const LinkStyled = styled.div`
    position: absolute;
    top: 40px;
    right: 55px;
    font-size: 24px;
    border: 2px solid gray;
    background-color: hotpink;
    padding: 2px;
    border-radius: 3px;
`;

export default Card;