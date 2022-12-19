import React from 'react';

function Input({label, state, setState, type="text"}) {
    return (
       <div>
         <label className="block font-semibold">{label} </label>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type={type}
          placeholder={label}
          className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
       </div>
    );
}

export default Input;