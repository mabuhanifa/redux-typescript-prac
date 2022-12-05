import { configureStore } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
}

const store = configureStore({
    reducer: {

    }
}) 