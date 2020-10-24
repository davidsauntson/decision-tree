import React from 'react';

const Question = ({question}) => {
    if (question) {
        return (
            <h1>{question.text}</h1>
        )
    }

    return null;
}

export default Question