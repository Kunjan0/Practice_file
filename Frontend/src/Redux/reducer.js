import { data_failure, data_loading, data_success } from "./actionType"



export const initialState = {
    loading: false,
    data: [],
    error: ''
}


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case data_failure:
            return {
                ...state,
                loading: true
            }

        case data_success:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case data_failure:
            return {
                ...state,
                loading: false,
                data:[],
                error: action.payload
            }

        default:
            return state;
    }
}

export default dataReducer;