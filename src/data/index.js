const data = {
    questions: [
      {
        id: 'question1',
        text: 'Which end are you?'
      },
      {
        id: 'question2',
        text: 'Which back-end language are you?'
      },
      {
        id: 'question3',
        text: 'Which front-end language are you?'
      },
      {
        id: 'question4',
        text: 'y tho?'
      }
    ],
    answers: [
      {
        id: 'answer1',
        questionId: 'question1',
        text: 'front'
      },
      {
        id: 'answer2',
        questionId: 'question1',
        text: 'back'
      },
      {
        id: 'answer3',
        questionId: 'question1',
        text: 'rear'
      },
      {
        id: 'answer4',
        questionId: 'question2',
        text: 'ruby'
      },
      {
        id: 'answer5',
        questionId: 'question2',
        text: 'c#'
      },
      {
        id: 'answer6',
        questionId: 'question2',
        text: 'c++'
      },
      {
        id: 'answer7',
        questionId: 'question3',
        text: 'javascript'
      },
      {
        id: 'answer8',
        questionId: 'question3',
        text: 'sass'
      },
      {
        id: 'answer9',
        questionId: 'question3',
        text: 'html'
      },
      {
        id: 'answer10',
        questionId: 'question4',
        text: 'because'
      },
      {
        id: 'answer11',
        questionId: 'question4',
        text: 'I don\'t know'
      }
    ],
    tree: {
        question1: {
            answer1: 'question3',
            answer2: 'question2',
            answer3: 'question4'
        },
        question2: {
            answer4: 'question4',
            answer5: 'end',
            answer6: 'end'
        },
        question3: {
            answer7: 'end',
            answer8: 'end',
            answer9: 'end'
        },
        question4: {
            answer10: 'end',
            answer11: 'end'
        },
        end: {
            reset: 'question1'
        }
    }
}


export default data;