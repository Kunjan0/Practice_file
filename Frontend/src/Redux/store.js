import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import dataReducer from "./reducer";

const configureStore = () => {
    const store = createStore(dataReducer, applyMiddleware(thunk))

    return store;
}

export default configureStore;