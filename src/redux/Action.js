import axios from "axios";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype";



export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}
export const geUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}
export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}

export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:202/list').then(res => {
            const userlist = res.data;
            dispatch(geUserList(userlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })


    }
}

export const Removeuser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:202/list/' + id).then(res => {
            dispatch(deleteUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}

export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:202/add', data).then(res => {
            dispatch(addUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })


    }
}

export const FunctionUpdateUser = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:202/list/' + id, data).then(res => {
            dispatch(updateUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })


    }
}


export const FetchUserObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:202/list/' + id).then(res => {
            const userlist = res.data;
            dispatch(getUserObj(userlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}