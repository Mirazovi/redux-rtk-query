
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id:string,
    title: string;
    description: string;
    isCompleted?: boolean;
};

type TInitialState = {
    value: TTodo[];
};

const initialState: TInitialState = {
    value: [],
};

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.value.push({ ...action.payload, isCompleted: false });
        },
        removeTodo:(state,action:PayloadAction<string>) =>{
          state.value =  state.value.filter((item) => item.id !== action.payload)
        }
    },
});

export const { addTodo ,removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
