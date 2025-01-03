import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        items:[],
        counter:1
    },
    reducers:{
        addTodo:(state,action)=>{
            state.items.push({id:state.counter,text:action.payload,completed:false});
            state.counter+=1;
        },
        toggleTodo:(state,action)=>{
            const todo = state.items.find((t)=> t.id === action.payload);
            if(todo) todo.completed = !todo.completed;
        },
        deleteTodo:(state,action)=>{
            state.items = state.items.filter((t)=>t.id !== action.payload);
        },
    },
});

export const {addTodo,toggleTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;