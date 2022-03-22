import { BUY_EGG } from './eggTypes';

const initialState = {
    numOfEggs: 100
}

const eggReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - action.payload
            };
        default:
            return state;
    }
}


export default eggReducer;