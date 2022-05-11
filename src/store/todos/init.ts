import { ITodo, ITodosSideStore } from '.'

// функции копипаста, лучше не использовать
export const setNewTodoAction = (state: ITodosSideStore, str = ''): ITodosSideStore => {
    return { ...state, newTodo: str }
}

export const addTodoAction = (state: ITodo[], title: string): ITodo[] => {
    return [
        ...state,
        {
            id: Math.max(0, Math.max(...state.map(({ id }) => id))) + 1,
            userId: 123,
            title,
            completed: false,
        },
    ]
}

export const updateTodoAction = (state: ITodo[], payload: { id: number; title: string }): ITodo[] =>
    state.map((todo) => ({
        ...todo,
        title: todo.id === payload.id ? payload.title : todo.title,
    }))

export const removeTodoAction = (state: ITodo[], id: number): ITodo[] =>
    state.filter((todo) => todo.id !== id)

export const toggleTodoAction = (state: ITodo[], id: number): ITodo[] =>
    state.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
    }))
