import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {  
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-800">
        <div className="w-[250px] h-[100px] flex-wrap border-[1px] border-yellow-500 rounded flex flex-col items-center">
            <div className="w-full text-center h-[40%] flex items-center justify-center text-2xl text-black font-semibold bg-[#f2eecb] rounded-t">{counter}</div>
            <div className="w-full px-5 flex flex-row items-center justify-between h-[60%] rounded-b bg-black/50">
              <button onClick={() => dispatch({type: "+"})} className="py-2 w-[20%] bg-green-800 rounded-full hover:scale-95 hover:opacity-95 transition-all text-base duration-75">+</button>
              <button onClick={() => dispatch({type: "RESET"})} className="py-2 w-[30%] bg-black text-white rounded-full hover:scale-95 transition-all text-base duration-75">Reset</button>
              <button onClick={() => {
                if(counter !== 0) {
                    dispatch({type: "-"})
                }
              }} className="py-2 w-[20%] bg-red-800 rounded-full hover:scale-95 hover:opacity-95 transition-all text-base duration-75">-</button>
            </div>
        </div>
    </div>
  )
}

export default Counter