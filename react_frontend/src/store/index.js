import { createStore, combineReducers, applyMiddleware } from 'redux';


const initialState = {
    stuff: true
}

const reducer = (state = initialState, action) {
    console.log("Reducer Running", action)

    switch (action.type) {
        case 'CHANGESTUFF':
            return Object.assign({}, state, { stuff: !state.stuff })
    }
    return state
}

const store = createStore(reducer)

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import cardListReducer from './allCards/reducer';
// import createUserReducer from './user/reducer';
// import thunk from 'redux-thunk';
// import readingReducer from "./readings/reducer";



// const middleWare = applyMiddleware(thunk)

// const reducers = combineReducers({
//     cards: cardListReducer,
//     user: createUserReducer,
//     reading: readingReducer
// })
// const store = createStore(reducers, middleWare)


// window.store = store
// window.cardListReducer = cardListReducer

// export default store
