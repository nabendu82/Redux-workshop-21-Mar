import { BUY_CHICKEN } from './chickenTypes';

const initialState = {
    numOfChickens: 10
}

const chickenReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numOfChickens: state.numOfChickens - 1
            };
        default:
            return state;
    }
}

export default chickenReducer;