import React from 'react';
import { useNavigate } from "react-router-dom";

function BoxLinks({ data }) {
    const navigate = useNavigate();

    const handleRouterLinks = (links) => {
        navigate(links);
    }

    return (
        <div id="boxBG" onClick={() => handleRouterLinks(data.links)} className='w-full h-[148px] cursor-pointer p-[18px] bg-white rounded-[10px] relative flex flex-col justify-between' style={{ boxShadow: "0px 0px 8px 0px rgba(78, 78, 78, 0.25)" }}>
            {/* icons */}
            <span className='absolute sm:right-[8px] right-[4px] sm:top-[8px] top-[4px]'>
                {data.icons}
            </span>

            {/* title */}
            <h3 className='mt-auto font-bold text-[18px] xs:w-full w-[92px]'>{data.title}</h3>
        </div>
    )
}

export default BoxLinks