import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoState {
    todos: Todo[];
}

type RootState = ReturnType<typeof store.getState>;




export const store = configureStore({
    reducer: {
        todos: todoReducer.reducer,

    }
})

export const selectTodo = (state: RootState) => state.todos.todos;