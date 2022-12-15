import React from 'react';
//css-in-js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';


const Result = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header>예비집사  <span style={{ color: '#232272', padding: '15px' }}>MBTI TEST</span></Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage>
                    <img src={ResultData[0].image} className="rounded-circle" width={350} height={350}  />
                </LogoImage>
                <Desc>예비 집사님과 잘 맞는 고양이는 <br />
                    <span style={{ color: '#232272', fontWeight: '600' }}>{ResultData[0].name} </span>입니다.</Desc>
                <Button
                    style={{ backgroundColor: '#232272', borderColor: '#232272', borderRadius: '30px', width: '250px' }}
                    onClick={() => navigate("/")}>TEST Again</Button>
            </Contents>
        </Wrapper>
    );
};

export default Result;

const Wrapper = styled.div`
    background-color : white;
    height: 100vh;
    width: 100%;
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
    flex-direction: column;
`

const Header = styled.div`
    color: white;
    font-size: 34pt;
    background-color : #28d1e0;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items : center;
    font-family: "nanumsquareroundb";

`
const Title = styled.div`
    padding: 25px;
    font-size: 24pt;
    font-family: "nanumsquareroundr";
`

const LogoImage = styled.div`

`

const Desc = styled.div`
    font-size: 20pt;
    padding: 34px;
    text-align: center;
    font-family: "nanumsquareroundr";
`