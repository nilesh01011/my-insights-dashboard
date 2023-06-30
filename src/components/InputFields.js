import React from 'react'

function InputFields({ setInterationInput, placeholder, value, disable }) {
    return (
        <input type='text' disabled={disable === true} onChange={(e) => setInterationInput(e.target.value)} value={value && value} className={`p-[10px] h-max w-full border-[1px] border-[#DEDEDE] rounded-[5px] focus:outline-none placeholder:text-[#8E8585] ${disable === true ? 'bg-[#F4F4F4] cursor-not-allowed' : 'bg-white'}`} placeholder={placeholder} />
    )
}

export default InputFields