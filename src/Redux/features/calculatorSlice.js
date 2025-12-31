import { createSlice } from "@reduxjs/toolkit";



export const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        expression: "",
        result: 0,
    },
    reducers: {
        setExpression: (state,action) => {
            state.expression += action.payload;
        },
        clearExpression: (state) => {
            state.expression = "";
            state.result = 0;
        },
        calculateResult: (state) => {
            try{
                state.result = eval(state.expression).toString();
            }catch(err){
                state.result = "Error";
            }
    }
}})

export const { setExpression, clearExpression, calculateResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;