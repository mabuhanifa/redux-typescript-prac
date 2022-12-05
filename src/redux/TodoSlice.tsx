import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./store";

const todoSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.length,
                    text: action.payload,
                    done: false

                }
            ];
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload);

        }

    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;