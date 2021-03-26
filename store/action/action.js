import axios from 'axios'

const Types = {
    increment: 'increment',
    decrement: 'decrement',
    get: 'get',
    create: 'create',
    remove: 'remove',
    one: 'one',
    upd: 'upd'
}

export const increment = () => {
    return {
        type: Types.increment
    }
}

export const decrement = () => {
    return {
        type: Types.decrement
    }
}

export const getData = (users) => {
    return {
        type: Types.get,
        payload: users
    }
}
export const getUser = () => {
    return (dispatch) => {
        axios.get("http://5ad4038b33667e001462443f.mockapi.io/api/v1/users").then(res => {
            const users = res.data;
            dispatch({
                type: Types.get,
                users: users
            })

        }).catch(err => {
            console.log(err)
        })

    }
}

export const createUser = (data) => {
    return (dispatch) => {
        axios.post("http://5ad4038b33667e001462443f.mockapi.io/api/v1/users", data).then(res => {
            const users = res.data;
            dispatch({
                type: Types.create,
                users: users
            })

        }).catch(err => {
            console.log(err)
        })

    }
}
export const remove = (id) => {
    return (dispatch) => {
        axios.delete(`http://5ad4038b33667e001462443f.mockapi.io/api/v1/users/${id}`).then(res => {
            dispatch({
                type: Types.remove,
                users: id
            })

        }).catch(err => {
            console.log(err)
        })

    }
}

export const oneUser = (user) => {
    return (dispatch) => {

        dispatch({
            type: Types.one,
            users: user
        })
    }
}
export const upd = (data, id) => {
    return (dispatch) => {
        axios.put(`http://5ad4038b33667e001462443f.mockapi.io/api/v1/users/${id}`, data).then(res => {
            const news = res.data;
            dispatch({
                type: Types.upd,
                users: id,
                news: news
            })

        }).catch(err => {
            console.log(err)
        })

    }
}