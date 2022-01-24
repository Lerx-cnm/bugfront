import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bug_reduce  from './reducers/bug_reduce'
import single_bug_reduce from './reducers/single_bug_reduce'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    bugs: bug_reduce,
    single_bug: single_bug_reduce 
});

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;