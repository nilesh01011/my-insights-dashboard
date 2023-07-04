import React, { useEffect, useRef, useState } from 'react'
import DropdownSelectTwo from './DropdownSelectTwo';
import Datepicker from './Datepicker';

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

function DownloadModelShow({ downloadModelShow, setDownloadModelShow, }) {
    const businessDetails = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Domain 2"
        },
        {
            id: 3,
            name: "Domain 3"
        },
    ];

    const [businessDetailsValue, setBusinessDetailsValue] = useState('')

    const businessModel = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Model 2"
        },
        {
            id: 3,
            name: "Model 3"
        },
    ];

    const [businessModelValue, setBusinessModelValue] = useState('')

    const location = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "location 2"
        },
        {
            id: 3,
            name: "location 3"
        },
    ];

    const [locationValue, setLocationValue] = useState('');

    const resetButtonHandle = () => {
        setLocationValue('All')
        setBusinessModelValue('All')
        setBusinessDetailsValue('All')
    }

    let domNode = useClickOutSide(() => {
        setDownloadModelShow(false)
    });

    return (
        <>
            {/* sidebar contents */}
            <div ref={domNode} id='animateScroll' className={`bg-white ${downloadModelShow === true && 'animateScroll'} z-[9999] p-[12px_20px] shadow-2xl`} style={{ transition: 'all 0.4s cubic-bezier(0.18, 0.89, 0.43, 1.19)' }}>
                {/* head */}
                <div className='w-full flex items-center justify-between pb-[20px]'>
                    {/* title */}
                    <h1 className='text-[20px] font-bold'>Download Insights</h1>
                    {/* icons */}
                    <button onClick={() => setDownloadModelShow(false)} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18" stroke="#342C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#342C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* contents */}
                <div id='overflowHidden' className='w-full h-full flex flex-col gap-[13px] overflow-scroll pb-[134px]'>
                    {/* from to date */}
                    <div className='w-full h-auto flex flex-col gap-[6px]'>
                        {/* title */}
                        <p className='text-[14px] text-[#545454]'>From Date</p>
                        {/* input type */}
                        <Datepicker />
                    </div>

                    {/* to date */}
                    <div className='w-full h-auto flex flex-col gap-[6px]'>
                        {/* title */}
                        <p className='text-[14px] text-[#545454]'>To Date</p>
                        {/* input type */}
                        <Datepicker />
                    </div>

                    {/* Business Domain */}
                    <div className='w-full h-auto flex flex-col gap-[6px]'>
                        {/* title */}
                        <p className='text-[14px] text-[#545454]'>Business Domain</p>
                        {/* input type */}
                        <DropdownSelectTwo position='bottom' placeholder='All' setChangeInput={setBusinessDetailsValue} activeInput={businessDetailsValue} disable={false} items={businessDetails} mandatory="" />
                    </div>


                    {/* Business Domain */}
                    <div className='w-full h-auto flex flex-col gap-[6px]'>
                        {/* title */}
                        <p className='text-[14px] text-[#545454]'>Brand Model</p>
                        {/* input type */}
                        <DropdownSelectTwo placeholder='All' setChangeInput={setBusinessModelValue} activeInput={businessModelValue} disable={false} items={businessModel} mandatory="" />
                    </div>

                    {/* Business Domain */}
                    <div className='w-full h-auto flex flex-col gap-[6px]'>
                        {/* title */}
                        <p className='text-[14px] text-[#545454]'>Location</p>
                        {/* input type */}
                        <DropdownSelectTwo placeholder='All' setChangeInput={setLocationValue} activeInput={locationValue} disable={false} items={location} mandatory="" />
                    </div>
                </div>

                {/* footer */}
                <div className='fixed bottom-0 left-0 right-0 w-full h-max flex items-center justify-between p-[16px] bg-white' style={{ boxShadow: '-5px 0px 50px 0px rgba(0, 0, 0, 0.2)' }}>
                    {/* left button */}
                    <button type='button' onClick={() => setDownloadModelShow(false)} className='p-[6px_16px] w-max h-max text-[#FF3E5B] font-[500] text-[14px] hover:bg-[#FF3E5B] hover:text-white rounded-[4px] border-[1px] border-[#FF3E5B]'>Cancel</button>
                    {/* right side button */}
                    <div className='w-max flex items-center gap-[8px]'>
                        <button onClick={resetButtonHandle} type='button' className='p-[6px_16px] w-max h-max text-[#FF3E5B] font-[500] text-[14px] hover:bg-[#FF3E5B] hover:text-white rounded-[4px] border-[1px] border-[#FF3E5B]'>Reset</button>

                        <button onClick={() => setDownloadModelShow(false)} type='button' className='p-[6px_16px] w-max h-max text-white bg-[#FF3E5B] font-[500] text-[14px] rounded-[4px] border-[1px] border-[#FF3E5B]'>Download</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadModelShow