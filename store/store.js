import {
    createStore,
    applyMiddleware,
    compose,
     combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import {
    initialState,initialState2
} from './state'

const reducers = (state = initialState, action) => {
     if (action.type == 'get') {
        return {
            ...state,
            users: action.users
        }

    } else if (action.type == 'remove') {

        let index = state.users.findIndex(x => action.users == x.id)
        state.users.splice(index, 1);
        return {
            ...state,
            users: [...state.users]
        }

    } else if (action.type == 'upd') {

        let index = state.users.findIndex(x => action.users == x.id)
        state.users.splice(index, 1, action.news);
        return {
            ...state,
            users: [...state.users]
        }

    } else if (action.type == 'one') {
        return {
            ...state,
            update: {
                ...action.users
            }
        }

    } else {
        return state
    }

}
const reducers2 = (state = initialState2, action) => {
    if (action.type == 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type == 'decrement') {
        if (state.counter == 0) {
            return state

        }
        return {
            ...state,
            counter: state.counter - 1
        }

    } else
{    return state
}

}
const root=combineReducers({
    reducers:reducers,
    reducers2:reducers2
});
export default createStore(root, compose(applyMiddleware(thunk)))