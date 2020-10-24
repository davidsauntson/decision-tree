import Data from '../data';

const {tree} =  Data 

const reducer = (state, action) => {
    const nextState = tree[state][action];
    return nextState !== undefined ? nextState : state;
}

export default reducer;