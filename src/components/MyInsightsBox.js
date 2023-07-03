import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyInsightsBox({ data }) {

    const navigate = useNavigate();

    const handleLinksRouter = () => {
        navigate(data?.links);
    }

    return (
        <div onClick={() => handleLinksRouter()} className='w-full h-[124px] rounded-[10px] p-[12px_16px] bg-white flex items-center gap-[8ps] cursor-pointer shadow-md'>
            {/* left side */}
            <div className='w-full flex flex-col gap-[8px]'>
                <h1 className='font-bold'>{data.title}</h1>
                {/* text */}
                <p className='text-[12px]'>{data.text}</p>
                <div className='flex items-center gap-[8px] text-[12px]'>
                    <span>{data.date}</span>
                    <span className='w-[4px] h-[4px] bg-[#8E8585] rounded-full'></span>
                    <span>{data.time}</span>
                </div>
            </div>

            {/* right */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g id="icon/chevron-arrow-right">
                        <path id="Vector" d="M8.45124 20.133L14.9712 13.613C15.7412 12.843 15.7412 11.583 14.9712 10.813L8.45124 4.29297" stroke="#FF3E5B" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default MyInsightsBox