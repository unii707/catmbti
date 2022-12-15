import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/logo_cat.png';
import Button  from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Wrapper>
            <Header>예비집사  <span style={{ color: '#232272', padding: '15px' }}>MBTI TEST</span></Header>
            <Contents>
                <Title>나에게 맞는 주인님은?</Title>
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width={350} height={350}  />
                </LogoImage>
                <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
                <Button>TEST START</Button>
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
    font-size: 34pt;
    background-color : #28d1e0;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items : center;

`
const Title = styled.div`
    padding: 25px;
    font-size: 24pt;
`

const LogoImage = styled.div`

`

const Desc = styled.div`
    padding: 25px;
`

