import './App.css';

import React, {useState, useReducer, useEffect} from 'react'

import reducer from './machine/reducer';

import data from './data';
import Question from './components/Question';
import Answers from './components/Answers'


const getQuestion = (id) => data.questions.find(q => q.id === id);
const getAnswers = (questionId) => data.answers.filter(a => a.questionId === questionId);

function App() {
  const [state, dispatch] = useReducer(reducer, "question1")
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();

  useEffect(() => {
    setQuestion(getQuestion(state));
    setAnswers(getAnswers(state));
  }, [state])

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
          <Answers answers={answers} dispatch={dispatch} />
        </>
      )}
    </div>
  );
}

export default App;
