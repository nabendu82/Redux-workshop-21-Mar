const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const BUY_EGG = 'BUY_EGG';
const BUY_CHICKEN = 'BUY_CHICKEN';

function buyEgg() {
    return {
        type: BUY_EGG,
        info: 'Buying Egg'
    };
}

function buyChicken() {
    return {
        type: BUY_CHICKEN,
        info: 'Buying Chicken'
    };
}

const initialEggState = {
    numOfEggs: 100,
};

const initialChickenState = {
    numsOfChickens: 10
};

const eggReducer = (state = initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            };
        default:
            return state;
    }
}

const chickenReducer = (state = initialChickenState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numsOfChickens: state.numsOfChickens - 1
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyChicken());
unsubscribe();