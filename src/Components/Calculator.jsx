import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateResult, clearExpression, deleteOne, setExpression } from '../Redux/features/calculatorSlice';


const Calculator = () => {

    const buttons = [
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
         }else{
            dispatch(setExpression(value))
         }
    }

  return (
    <div className='h-full w-full gap-10 flex flex-col  items-center justify-center'>
        <h1 className='text-5xl bg-linear-150 from-gray-200 to-gray-700 text-transparent bg-clip-text'>Calculator</h1>
        <div className='h-[70vh] w-[20vw] p-7 border-2 border-white/30 shadow-[inset_0_0_8px] bg-[#2d3238] rounded-3xl flex flex-col '>
            <div className='h-[20vh] flex items-end flex-col justify-center bg-[#282a2d] border-white/30 p-3 border-2 rounded-2xl'>
                <div className='text-2xl text-gray-200 opacity-70'>{expression}</div>
                <div className='text-4xl text-gray-200 font-bold'>{result}</div>
            </div>
            <div className='h-[15vh] flex items-center justify-center gap-20'>
                <button 
            onClick={() => {
                dispatch(clearExpression())
            }}
            className='px-7 cursor-pointer transition duration-300 hover:bg-[#323437] bg-[#282a2d] text-3xl py-4 shadow-black shadow-2xl rounded-xl'>
                AC
            </button>
            <button 
            onClick={() => {
                dispatch(deleteOne())
            }}
            className='px-7 cursor-pointer transition duration-300 hover:bg-[#323437] bg-[#282a2d] text-3xl py-4 shadow-black shadow-2xl rounded-xl'>
                C
            </button>
            </div>
            <div className='h-full text-5xl grid grid-cols-4 '>
               {buttons.map((btn) => (
                <button key={btn} 
                onClick={() => {
                    handleClick(btn)
                }}
                className={`${btn === "=" ? "bg-linear-150 from-gray-200 via-gray-600 to-gray-200 hover:brightness-110 transition-all duration-300 " : "bg-[#282a2d]"} cursor-pointer transition duration-300 hover:bg-[#323437] shadow-black shadow-2xl pb-2 h-[8vh] w-[4vw]  rounded-full`}
                >{btn}</button>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Calculator