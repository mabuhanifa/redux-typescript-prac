import { configureStore } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
    done: boolean;
}
const store = configureStore({
    reducer: {

    }
}) 