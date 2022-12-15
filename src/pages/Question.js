import React from 'react';
import styled from 'styled-components';
import { Button, ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
    return (
        <Wrapper>
            <ProgressBar striped variant="info" now={20} style={ {marginTop: "20px"}} />
            <Contents>
                <Title>{QuestionData[0].title}</Title>
                <ButtonGroup>
                    <Button style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>
                        {QuestionData[0].answera}
                    </Button>
                    <Button style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }} >
                        {QuestionData[0].answerb}
                    </Button>                   
                </ButtonGroup>

            </Contents>
        </Wrapper>
    );
};

export default Question;

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
const Title = styled.div`
    padding: 25px;
    font-size: 24pt;
    font-family: "nanumsquareroundr";
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`