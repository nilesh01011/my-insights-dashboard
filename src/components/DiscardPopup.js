import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function DiscardPopup({ discardEvent, setDiscardEvent }) {

    const navigate = useNavigate();

    let domNode = useClickOutSide(() => {
        setDiscardEvent(false)
    });
    return (
        <>
            {/* overflow */}
            {
                discardEvent === true &&
                <div onClick={() => setDiscardEvent(false)} className='w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[999998] cursor-pointer'>
                </div>
            }

            {/* contents */}
            <div id='animationShow' className={`fixed top-0 bottom-0 left-0 w-full h-full flex items-center justify-center z-[999999] ${discardEvent === true ? 'animatedShow' : ''}`}>
                <div ref={domNode} className='bg-white rounded-[10px] h-max sm:w-[368px] w-[80%] mx-auto p-[20px_16px]'>
                    {/* head */}
                    <div className='w-full flex items-center justify-between pb-[20px]'>
                        {/* left side */}
                        <div className='flex items-center gap-[5px]'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.60002C7.3608 3.60002 3.59999 7.36083 3.59999 12C3.59999 16.6392 7.3608 20.4 12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36083 16.6392 3.60002 12 3.60002ZM2.39999 12C2.39999 6.69809 6.69806 2.40002 12 2.40002C17.3019 2.40002 21.6 6.69809 21.6 12C21.6 17.302 17.3019 21.6 12 21.6C6.69806 21.6 2.39999 17.302 2.39999 12ZM12 6.81587C12.3314 6.81587 12.6 7.0845 12.6 7.41587V7.50002C12.6 7.8314 12.3314 8.10002 12 8.10002C11.6686 8.10002 11.4 7.8314 11.4 7.50002V7.41587C11.4 7.0845 11.6686 6.81587 12 6.81587ZM12 9.40002C12.3314 9.40002 12.6 9.66865 12.6 10V17C12.6 17.3314 12.3314 17.6 12 17.6C11.6686 17.6 11.4 17.3314 11.4 17V10C11.4 9.66865 11.6686 9.40002 12 9.40002Z" fill="#FF7A00" />
                                </svg>
                            </span>
                            <span className='font-bold'>Discard</span>
                        </div>
                        {/* right side */}
                        <span onClick={() => setDiscardEvent(false)} className='cursor-pointer'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.57576 2.57576C2.81007 2.34145 3.18997 2.34145 3.42429 2.57576L12 11.1515L20.5758 2.57576C20.8101 2.34145 21.19 2.34145 21.4243 2.57576C21.6586 2.81008 21.6586 3.18997 21.4243 3.42429L12.8486 12L21.4243 20.5758C21.6586 20.8101 21.6586 21.19 21.4243 21.4243C21.19 21.6586 20.8101 21.6586 20.5758 21.4243L12 12.8486L3.42429 21.4243C3.18997 21.6586 2.81008 21.6586 2.57576 21.4243C2.34145 21.19 2.34145 20.8101 2.57576 20.5758L11.1515 12L2.57576 3.42429C2.34145 3.18997 2.34145 2.81007 2.57576 2.57576Z" fill="#635D5D" />
                            </svg>
                        </span>
                    </div>
                    {/* line */}
                    <div className='w-full h-[1px] bg-[#DEDEDE]'></div>
                    {/* text */}
                    <p className='my-[15px] text-[14px]'>Are you sure you want to discard this insight?</p>

                    {/* button */}
                    <div className='w-full flex items-center justify-center gap-[10px]'>
                        <button onClick={() => setDiscardEvent(false)} type='button' className='p-[5px_20px] rounded-[5px] border-[1px] border-[#FF3E5B] text-[#FF3E5B] font-[500] text-[14px]'>No</button>

                        <button onClick={() => navigate('/my-insights')} type='button' className='p-[5px_20px] rounded-[5px] bg-[#FF3E5B] text-white font-[500] text-[14px]'>Yes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscardPopup