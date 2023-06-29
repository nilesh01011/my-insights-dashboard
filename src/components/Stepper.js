import React from 'react'

function Stepper({ steps }) {
    return (
        <div className='max-w-[350px] mx-auto w-full flex items-center justify-between relative'>
            {/* line */}
            <div className='xs:w-[74%] w-[76%] mx-auto h-[1px] bg-black absolute xs:top-[27%] top-[23%] left-0 right-0'></div>
            {/* steps */}
            <p className={`z-50 xs:w-full w-[60px] text-[12px] font-[500] flex items-center text-center flex-col gap-[4px] ${steps === 1 ? 'text-[#FF3E5B]' : 'text-[#8E8585]'}`}>
                <span className={`w-[28px] h-[28px] rounded-full text-white flex items-center justify-center ${steps === 1 ? 'bg-[#FF3E5B]' : 'bg-[#8E8585]'}`}>1</span>
                Interaction Details
            </p>
            <p className={`z-50 xs:w-full w-[60px] text-[12px] font-[500] flex items-center text-center flex-col gap-[4px] ${steps === 2 ? 'text-[#FF3E5B]' : 'text-[#8E8585]'}`}>
                <span className={`w-[28px] h-[28px] rounded-full text-white flex items-center justify-center ${steps === 2 ? 'bg-[#FF3E5B]' : 'bg-[#8E8585]'}`}>2</span>
                Insight Details
            </p>
            <p className={`z-50 xs:w-full w-[60px] text-[12px] font-[500] flex items-center text-center flex-col gap-[4px] ${steps === 3 ? 'text-[#FF3E5B]' : 'text-[#8E8585]'}`}>
                <span className={`w-[28px] h-[28px] rounded-full text-white flex items-center justify-center ${steps === 3 ? 'bg-[#FF3E5B]' : 'bg-[#8E8585]'}`}>3</span>
                Preview & Submit
            </p>
        </div>
    )
}

export default Stepper