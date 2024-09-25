import { data_failure, data_loading, data_success } from "./actionType";
import axios from 'axios';

export const fetchDataLoading = () => ({
    type: data_loading
})

export const fetchDataSuccess = (data) => ({
    type: data_success,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: data_failure,
    payload: error
})

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataLoading)
        await axios.get(`http://localhost:5000/data`)
            .then(res => dispatch(fetchDataSuccess(res.data)))
            .catch(err => dispatch(fetchDataFailure(err.message)));
    }
}