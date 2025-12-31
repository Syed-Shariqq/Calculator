import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateResult, clearExpression, setExpression } from '../Redux/features/calculatorSlice';


const Calculator = () => {

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '+', '=',
    ];

    const dispatch = useDispatch();
    const { expression, result } = useSelector((store) => store.calculator)

    const handleClick = (value) => {
         if(value === "="){
            if (!expression) return;
            dispatch(calculateResult());
         }else{
            dispatch(setExpression(value));
         }
    }

  return (
    <div className='h-full w-full flex flex-col  items-center justify-center'>
        Calculator
        <div className='h-[90vh] w-[30vw] bg-emerald-900 rounded-lg flex flex-col '>
            <div className='h-[20vh] bg-amber-100'>
                <div className='text-lg text-black opacity-70'>{expression}</div>
                <div className='text-3xl text-black font-bold'>{result}</div>
            </div>
            <button 
            onClick={() => {
                dispatch(clearExpression())
            }}
            className='h-[10vh]'>
                Clear
            </button>
            <div className='h-full text-5xl grid grid-cols-4 bg-amber-400'>
               {buttons.map((btn) => (
                <button key={btn} 
                onClick={() => {
                    handleClick(btn)
                }}
                className='m-2 p-4 bg-emerald-600 rounded-lg'
                >{btn}</button>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Calculator