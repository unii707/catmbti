import React from 'react';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Button, ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import Badge from 'react-bootstrap/Badge';



const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        { id: "EI", score: 0 },
        { id: "SN", score: 0 },
        { id: "TF", score: 0 },
        { id: "JP", score: 0 },
    ])
    const navigate = useNavigate();


    const handleClickButton = (no, type) => {

        const newScore = totalScore.map((s) =>
            s.id === type ? { id: s.id, score: s.score + no } : s
        );
        
        setTotalScore(newScore);

        if (QuestionData.length !== questionNo + 1) {
            setQuestionNo(questionNo + 1);
        } else {

            const mbti = newScore.reduce(
                (acc, curr) =>
                    acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
                ""
            );

            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                  mbti: mbti,
                })}`
              });
        }
 

    }

    return (
        <Wrapper>

            <ProgressBar variant="info" now={(questionNo / QuestionData.length) * 100} style={{ marginTop: "30px", marginLeft:"40px", marginRight:"40px"}} /> 



            <Title>
                <Badge bg="info"><span className="rounded-circle" style={{  fontWeight:"600", fontSize:"16pt" }}>Q </span></Badge>
                            &nbsp;&nbsp;<span>{QuestionData[questionNo].title}</span>
            </Title>


            <Contents> 

                <ButtonGroup>
                    <Button variant="light"
                        onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
                        style={{ width: "40%", minHeight: "200px", fontSize: "14pt", flex: "none" }}>
                        A01 : {QuestionData[questionNo].answera}
                    </Button>
                    <Button variant="light" onClick= {()=>handleClickButton(0, QuestionData[questionNo].type) }style={{ width: "40%", minHeight: "200px", fontSize: "14pt", marginLeft: "20px", flex: "none" }} >
                    A02 : {QuestionData[questionNo].answerb}
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
    margin: 0 20px;
`
const Contents = styled.div`
    display: flex;
    flex-basis:0;
    justify-content: center;
    align-items : center;
    flex-direction: column;
`
const Title = styled.div`

    font-size: 14pt;
    font-family: "nanumsquareroundr";
    padding: 25px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`
