import axios from 'axios';

export const todoAPI = () => async (dispatch) => {
    dispatch({
        type: "TODOGETLOADING",
    })
    try {
        let res = await axios.get("http://localhost:8080/todo");
        dispatch({
            type: "TODOGET",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "TODOGETERROR",
        })
    }
}

export const todoINPUT = (todo) => async (dispatch) => {
    try {
        let res = await axios.post("http://localhost:8080/todo",
            {
                todo: todo,
                status: false
            });
        dispatch({
            type: "TODOINPUT",
            payload: res.data
        })
    } catch (e) {
    }
}

export const todoDELETEAC = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`http://localhost:8080/todo/${id}`)

        dispatch({
            type: "TODODELETE",
            payload: id
        })
    } catch (e) {
    }
}

export const todoTOGGLEAC = (id, status) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'patch',
            url: `http://localhost:8080/todo/${id}`,
            data: {
                status: status
            }
        });

        dispatch({
            type: "TODOTOGGLE",
            payload: id
        })
    } catch (e) {
    }
}