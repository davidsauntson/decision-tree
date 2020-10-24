import React, {useState, useReducer, useEffect}  from 'react';
import { useParams } from 'react-router-dom'

import reducer from '../machine/reducer';

import data from '../data';
import Question from './Question';
import Answers from './Answers'


const getQuestion = (id) => data.questions.find(q => q.id === id);
const getAnswers = (questionId) => data.answers.filter(a => a.questionId === questionId);

const Leaf = ({history}) => {
    let { id } = useParams();

    const [state, dispatch] = useReducer(reducer, id)
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState();
  
    useEffect(() => {
      setQuestion(getQuestion(state));
      setAnswers(getAnswers(state));
    }, [state, history])

    useEffect(() => {
        if (question) {
            console.log(question.text)
            document.title = question.text
            history.push(`/${question.id}`)
        }
    }, [question, history])
  
    const styles = {
      app: {
        maxWidth: '800px',
        margin: 'auto 50px'
      }
    }

    return (
        <div className="App" style={styles.app}>
            { state === 'end' ? (
                <h1>You've reached the end, well done.</h1>
            ) : (
                <>
                    <Question question={question} />
                    <Answers answers={answers} dispatch={dispatch}/>
                </>
            )}
        </div>
    )
}

export default Leaf;