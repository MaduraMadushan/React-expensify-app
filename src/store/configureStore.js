import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhamcers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhamcers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

