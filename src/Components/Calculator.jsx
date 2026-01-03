import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateResult, clearExpression, deleteOne, setExpression } from '../Redux/features/calculatorSlice';


const Calculator = () => {

    const buttons = [
        'C', '(', ')', 'AC',
        '7', '8', '9', '/',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '0', '.', '+', '=',
    ];

    const dispatch = useDispatch();
    const { expression, result } = useSelector((store) => store.calculator)

    const handleClick = (value) => {
         if(value === "="){
            if (!expression) return;
            dispatch(calculateResult());
         }else if(value === "x"){
            dispatch(setExpression("*"));
         }else if(value === "AC"){
            dispatch(clearExpression());
         }else if(value === "C"){
            dispatch(deleteOne());
         }else{
            dispatch(setExpression(value))
         }
    }

  return (
    <div className='h-screen w-screen gap-3 sm:gap-6 lg:gap-10 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-0 overflow-hidden'>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl bg-linear-150 from-gray-200 via-gray-700 to-gray-200 text-transparent bg-clip-text flex-shrink-0'>Calculator</h1>
        <div className='h-auto w-full sm:w-[90vw] lg:h-[70vh] lg:w-[20vw] max-w-[420px] lg:max-w-none p-3 sm:p-5 lg:p-7 border-2 border-white/30 shadow-[inset_0_0_8px] bg-[#2d3238] rounded-3xl flex flex-col flex-shrink-0'>
            <div className='min-h-[60px] sm:min-h-[80px] lg:min-h-[120px] flex items-end flex-col justify-center bg-[#282a2d] border-white/30 p-2 sm:p-3 border-2 rounded-2xl mb-3 sm:mb-4 flex-shrink-0'>
                <div className='text-xs sm:text-base lg:text-2xl text-gray-200 opacity-70 text-right break-words w-full max-h-[20px] sm:max-h-[28px] lg:max-h-[35px] overflow-hidden'>{expression}</div>
                <div className='text-lg sm:text-2xl lg:text-4xl text-gray-200 font-bold text-right max-h-[28px] sm:max-h-[40px] lg:max-h-[50px] overflow-hidden'>{result.length > 15 ? result.slice(0, 15) : result}</div>
            </div>
            <div className='grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 flex-1'>
               {buttons.map((btn) => (
                <button key={btn} 
                onClick={() => {
                    handleClick(btn)
                }}
                className={`${btn === "=" ? "bg-linear-150 from-gray-200 via-gray-600 to-gray-200 hover:brightness-110" : "bg-[#282a2d] hover:bg-[#323437]"} cursor-pointer transition duration-300 shadow-black shadow-2xl aspect-square rounded-full flex items-center justify-center font-semibold text-xl sm:text-sm lg:text-4xl text-gray-200 min-h-10 sm:min-h-12.5 lg:min-h-auto`}
                >{btn}</button>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Calculator