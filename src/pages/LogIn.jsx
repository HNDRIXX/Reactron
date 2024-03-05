import React from 'react'
import '../utils/styles/Login.css'

import { FaUser, FaKey } from "react-icons/fa6";
import Assets from "../utils/Assets"

function LogIn({ onLogin }) {
  return (
    <main>
        <div className="ctnr">
            <div className="bg-white rounded-xl p-10 w-70 flex flex-col items-center justify-center shadow-xl">
            <div className='items-center py-2'>
                <img src={Assets.Icon} className="w-10 h-full mr-3 inline-block" alt="logo" />
                <img src={Assets.IconWord} className="w-32 bg-contain inline-block" alt="logo" />
            </div>

            <div id="container h-full"></div>

            <React.Fragment>
                <p className="text-1xl text-gray-600 font-bold">Log-in</p>

                <div className='flex flex-row mt-2 items-center justify-center rounded-tr rounded-br bg-gray-300'>
                <FaUser className='mx-2 text-gray-400' />

                <input className="w-full p-1 text-xs border border-gray-300 rounded" type="text" placeholder="Username" />
                </div>

                <div className='flex flex-row mt-2 items-center justify-center rounded-tr rounded-br bg-gray-300'>
                <FaKey className='mx-2 text-gray-400' />
                
                <input className="w-full p-1 text-xs border border-gray-300 rounded" type="password" placeholder="Password" />
                </div>
                
                <button onClick={onLogin} className="w-full p-1 text-xs my-2 font-semibold bg-blue-400 text-white rounded">Log-in</button>
            </React.Fragment>
            </div>
        </div>
    </main>
  )
}

export default LogIn