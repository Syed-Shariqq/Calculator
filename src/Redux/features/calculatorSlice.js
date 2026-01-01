import { createSlice } from "@reduxjs/toolkit";



export const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        expression: "",
        result: "",
        justCalculated: false,
    },
    reducers: {
        setExpression: (state,action) => {
            if(state.justCalculated){
                state.expression = state.result + action.payload;
                state.justCalculated = false;
            }else{
                state.expression += action.payload;
            }
        },
        clearExpression: (state) => {
            state.expression = "";
            state.result = "";
            state.justCalculated = false;
        },
        calculateResult: (state) => {
            try{
                state.result = eval(state.expression).toString();
                state.justCalculated = true;
            }catch(err){
                state.result = "Error";
                state.justCalculated = true;
            }
    },
    deleteOne: (state) => {
        state.expression = state.expression.slice(0, -1);
    }
}})

export const { setExpression, clearExpression, calculateResult, deleteOne } = calculatorSlice.actions;
export default calculatorSlice.reducer;