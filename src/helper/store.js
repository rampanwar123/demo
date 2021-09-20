import { createStore,compose,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import selectedItemReducer from "../screens/listView/selectedItemReducer";

const reducer = combineReducers({
    selectedItemReducer
});

const rootReducer = (state, action) => {
    if(action.tupe === 'CLEAR_SESSION'){
        state = undefined
    }
    return reducer(state,action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    let result = next(action);
    return result;
};

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger,thunk))
);

export default store;
