import React from 'react';

const Answers = ({answers, dispatch, navigate}) => {
    const styles = {
        button: {
            display: 'block',
            marginBotton: '20px'
        }
    }

    const handleClick = (questionId) => {
        dispatch(questionId);
    }

    return (
        <div className="answers">
            {answers ? answers.map(answer => (
                <button key={answer.id} style={styles.button} onClick={() => handleClick(answer.id)}>{answer.text}</button>
            )): null}
        </div>
    )
}

export default Answers