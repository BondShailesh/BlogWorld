
const initState = {
    todo: [],
    isLoading:false,
    isError:false
}

export const totoRedcer = (state = initState, { type, payload }) => {
    switch (type) {

        case "TODOGETLOADING": {
            return {
                ...state,
                isLoading:true
            }
        }

        case "TODOGETERROR": {
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }

        case "TODOGET": {
            return {
                ...state,
                todo: payload,
                isLoading:false
            }
        }

        case "TODOINPUT": {
            return {
                ...state,
                todo: [...state.todo, payload]
            }
        }

        case "TODOTOGGLE": {
            return {
                ...state,
                todo: [...state.todo.map((todo) => {
                    if (todo.id === payload) {
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