import React from 'react';
import { useNavigate } from "react-router-dom";

function BoxLinks({ data }) {
    const navigate = useNavigate();

    const handleRouterLinks = (links) => {
        navigate(links);
    }

    return (
        <div id="boxBG" onClick={() => handleRouterLinks(data.links)} className='w-full h-[148px] group cursor-pointer p-[18px] bg-white rounded-[10px] relative flex flex-col justify-between' style={{ boxShadow: "0px 0px 8px 0px rgba(78, 78, 78, 0.25)" }}>
            {/* icons */}
            <span className='absolute sm:right-[8px] right-[4px] sm:top-[8px] top-[4px]'>
                {data.icons}
            </span>

            {/* title */}
            <h3 className='mt-auto font-bold text-[18px] xs:w-full w-[92px]'>{data.title}</h3>
            {
                data.tooltip &&
                <div className='group-hover:block hidden w-max h-max p-[0.5rem_1.2rem] shadow-lg bg-white rounded-[10px] text-[#FF3E5B] absolute md:-right-[55%] -right-[65%] bottom-[36%]'>
                    Coming Soon...

                    <span className='absolute border-[9px] inner-block top-1/2 right-[99%] -translate-y-1/2 border-t-transparent border-b-transparent border-l-0 border-r-white shadow-2xl'></span>
                </div>
            }
        </div>
    )
}

export default BoxLinks