import React from 'react';

const Answers = ({answers, dispatch}) => {
    const styles = {
        button: {
            display: 'block',
            marginBotton: '20px'
        }
    }
    return (
        <div className="answers">
            {answers ? answers.map(answer => (
                <button key={answer.id} style={styles.button} onClick={() => dispatch(answer.id)}>{answer.text}</button>
            )): null}
        </div>
    )
}

export default Answers