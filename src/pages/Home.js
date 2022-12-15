import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/logo_cat.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header>예비집사  <span style={{ color: '#232272', padding: '15px' }}>MBTI TEST</span></Header>
            <Contents>
                <Title>나에게 맞는 주인님은?</Title>
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width={300} height={300}  alt="고양이사진" />
                </LogoImage>
                <Desc>MBTI를 기반으로 하는 <br />나랑 잘 맞는 고양이 찾기!</Desc>
                <Button style={{backgroundColor: "#333", borderColor: "#333", borderRadius: "30px", width: "350px", fontSize:'18pt'} } onClick={handleClickButton}>TEST START</Button>
            </Contents>
        </Wrapper>
    );
};

export default Home;

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
    font-size: 24pt;
    background-color : #28d1e0;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items : center;
    font-family: "nanumsquareroundb";

`
const Title = styled.div`

    font-size: 20pt;
    font-family: "nanumsquareroundr";
    padding: 20px;
`

const LogoImage = styled.div`

`

const Desc = styled.div`
    font-size: 17pt;
    padding: 28px;
    text-align: center;
    font-family: "nanumsquareroundr";
`

