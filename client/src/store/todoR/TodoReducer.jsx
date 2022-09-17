
const initState = {
    todo: [{ id: 1, todo: "Wakeup Early", status:false}]
}

export const totoRedcer1 = (state = initState, { type, payload }) => {
    switch (type) {
        case "TODOINPUT": {
            return {
                ...state,
                todo: [...state.todo, { todo: payload.todo, id: state.todo.length + 1, status: false }]
            }
        }
        case "TODOTOGGLE": {
            return {
                ...state,
                todo: [...state.todo.map((todo) => {
                    if (todo.id === payload.id) {
                        return { ...todo, status: !todo.status }
                    } else {
                        return todo
                    }
                })]
            }
        }
        case "TODODELETE": {
            return {
                ...state,
                todo: [...state.todo.filter((todo) => todo.id !== payload)]
            }
        }

        default:
            return state
    }
}