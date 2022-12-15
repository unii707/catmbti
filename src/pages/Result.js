import React from 'react';
//css-in-js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

import { ResultData } from '../assets/data/resultdata';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');

    const [resultData, setResultData] = React.useState({});

    React.useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti])

    return (
        <Wrapper>
            <Header>예비집사  <span style={{ color: '#232272', padding: '15px' }}>MBTI TEST</span></Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage>
                    <img src={resultData.image} className="rounded-circle" width={300} height={300}  alt="결과 이미지" />
                </LogoImage>
                
                <Desc>
                    <Row>
                        <Col sm={6} md={3}>
                            <Textmbti>
                            {resultData.best}
                            </Textmbti>
                        </Col>
                        <Col sm={6} md={9}>
                            <Textscript>
                            예비 집사님과 잘 맞는 고양이는 <br /> 
                            <span style={{ color: '#232272', fontWeight: '600' }}> {resultData.name} </span>입니다. 
                            </Textscript>
                        </Col>
                    </Row>
                </Desc>
                
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Textguide>
                                {resultData.desc}
                        </Textguide>
                    </Col>
                </Row>
                <Button
                    style={{ backgroundColor: '#232272', borderColor: '#232272', borderRadius: '30px', width: '350px',fontSize:'18pt' }}
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
    font-size: 24pt;
    background-color : #28d1e0;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items : center;
    font-family: "nanumsquareroundb";

`
const Title = styled.div`
    padding: 22px;
    font-size: 24pt;
    font-family: "nanumsquareroundr";
`

const LogoImage = styled.div`

`

const Desc = styled.div`
    font-size: 18pt;
    padding: 10px;
border: 1px solid red;
display: flex;
justify-content: center;
align-items : center;
align-content: center;
    font-family: "nanumsquareroundr";
`
const Textmbti = styled.div`

border: 1px solid pink;
    font-size: 28pt;
    padding: 10px;
    text-align: center;
    font-weight:600;
    font-family: "nanumsquareroundr";

    color: #6633ff;
    align-self: center;
`
const Textscript = styled.div`
border: 1px solid blue;
    font-size: 17pt;
    padding: 25px;
    text-align: center;
    font-family: "nanumsquareroundr";

`
const Textguide = styled.div`
    font-size: 14pt;
    padding: 34px;

    border-top: 1px dotted #666;
    font-family: "nanumsquareroundr";
    
`

