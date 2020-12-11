// ES6 Module import syntax
// import {} from 'redux';

// ES5 Module import syntax
const redux = require("redux");

const initialState = {
    counter : 0,
    result : []
}

// Reducer function
function rootReducer(state = initialState, action){
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if (action.type === 'DECREMENT'){
        return {
            ...state,
            counter : state.counter - 1
        }
    }else if(action.type === 'ADD_NUMBER'){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }else if(action.type === 'STORE_RESULT'){
        return {
            ...state,
            result : [...state.result, state.counter]
        }
    }
    return state;
}

// Create the store
const store = redux.createStore(rootReducer);

// console.log('[BEFORE DISPATCH]', store.getState());

// Subscribe State
store.subscribe(() => {
    console.log('STATE : ', store.getState());
})


// Dispatch Action
store.dispatch({type : "INCREMENT"});
store.dispatch({type : 'STORE_RESULT'});
// console.log('[AFTER DISPATCH]', store.getState());
store.dispatch({type : "DECREMENT"});
store.dispatch({type : 'STORE_RESULT'});
// console.log('[AFTER DECREMENT DISPATCH]', store.getState());
store.dispatch({type : "ADD_NUMBER", value : 10});
store.dispatch({type : 'STORE_RESULT'});