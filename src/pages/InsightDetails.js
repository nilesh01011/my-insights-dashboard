import React, { useState } from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import { HiOutlinePlus } from 'react-icons/hi';

function InsightDetails() {
    const navigate = useNavigate();
    const [isActiveTab, setIsActiveTab] = useState(2);

    const [addObservation, setAddObservation] = useState(true);

    const [collapseTwo, setCollapseTwo] = useState(true);

    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            {/* my insights lists */}
            <div className='w-full p-[19px_16px] pb-[6rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[17px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        New Insights
                    </h1>
                    {/* filter icons */}
                    <h6 onClick={() => navigate('/')} className='font-bold cursor-pointer text-[#FF3E5B]'>
                        Close
                    </h6>
                </div>
                {/* stepper steps */}
                <div className='mb-[17px]'>
                    <Stepper steps={2} />
                </div>


                {/* Additional Details */}
                <div className='w-full h-full bg-white rounded-[10px] my-[20px]'>
                    {/* header */}
                    <div className={`w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Insight Statement</h2>
                    </div>

                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px] p-[16px] pt-0'>
                        {/* title */}
                        <h6>Please write down statement</h6>
                        {/* input fields */}
                        <textarea placeholder='Type here...' className='focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                    </div>
                </div>

                {/* Supporting Observation 1 */}
                <div className='w-full h-full bg-white rounded-[10px] my-[20px]'>
                    {/* header */}
                    <div className={`w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Supporting Observation 1</h2>
                    </div>

                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px] p-[16px] pt-0'>
                        {/* title */}
                        <h6>Write down your observation<span className='text-red-500'>*</span></h6>
                        {/* input fields */}
                        <div className='relative'>
                            <textarea placeholder='Type here...' className='w-full focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                            <span className='absolute right-[10px] top-[20%]'>
                                <img src='./images/speakIcons.svg' alt='speakIcons' className='' />
                            </span>
                        </div>
                    </div>
                </div>

                {/* + Add observations */}
                <div onClick={() => setAddObservation(!addObservation)} className='w-full my-[12px] flex items-center gap-[8px] cursor-pointer'>
                    <span className='w-[24px] h-[24px] rounded-full bg-[#FF3E5B] flex items-center justify-center'>
                        <HiOutlinePlus size={14} className='text-white' />
                    </span>
                    <p className='font-bold text-[#FF3E5B] text-[14px]'>Add Observation</p>
                </div>

                {
                    addObservation === true &&
                    <>
                        {/* Additional Details */}
                        <div className='w-full h-full bg-white rounded-[10px] mt-[20px]'>
                            {/* header */}
                            <div onClick={() => setCollapseTwo(!collapseTwo)} className={`${collapseTwo === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                                {/* title */}
                                <h2 className='font-bold'>Additional Details</h2>
                                {/* arrow icons */}
                                <span className={`${collapseTwo === true && 'rotate-180'} transition-all duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="icon/chevron-arrow-down">
                                            <path id="Vector" d="M19.92 16.0475L13.4 9.52751C12.63 8.75751 11.37 8.75751 10.6 9.52751L4.08002 16.0475" stroke="#0B0B0C" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </span>
                            </div>

                            {/* contents */}
                            {
                                collapseTwo === true &&
                                <div className='flex flex-col gap-[16px] bg-white divide-y-[1px] divide-[#DEDEDE] p-[16px] rounded-[10px]'>
                                    {/* Additional Details */}
                                    <div className='w-full h-full'>
                                        {/* Supporting Proof */}
                                        <div className='flex w-fill flex-col gap-[5px]'>
                                            {/* title */}
                                            <h6 className='my-[12px]'>Supporting Proof</h6>
                                            {/* input fields */}
                                            <form onClick={() => document.querySelector('#input-fieldsOne').click()} className='w-full flex items-center relative justify-center p-[14px] rounded-[10px] border-[1px] border-dashed border-[#707070] cursor-pointer'>
                                                <input type="file" id="input-fieldsOne" className="w-full text-slate-500 file:hidden appearance-none hidden" hidden />

                                                <p className='w-full flex items-center justify-center flex-col gap-[8px]'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.50001 8.33333C8.42049 8.33333 9.16668 7.58714 9.16668 6.66667C9.16668 5.74619 8.42049 5 7.50001 5C6.57954 5 5.83334 5.74619 5.83334 6.66667C5.83334 7.58714 6.57954 8.33333 7.50001 8.33333Z" stroke="#FF3E5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10.8333 1.66667H7.49999C3.33332 1.66667 1.66666 3.33333 1.66666 7.5V12.5C1.66666 16.6667 3.33332 18.3333 7.49999 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5V8.33333" stroke="#FF3E5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.125 4.16667H17.7083" stroke="#FF3E5B" strokeWidth="1.2" strokeLinecap="round" />
                                                            <path d="M15.4167 6.45833V1.875" stroke="#FF3E5B" strokeWidth="1.2" strokeLinecap="round" />
                                                            <path d="M2.22501 15.7917L6.33334 13.0333C6.99167 12.5917 7.94167 12.6417 8.53334 13.15L8.80834 13.3917C9.45834 13.95 10.5083 13.95 11.1583 13.3917L14.625 10.4167C15.275 9.85833 16.325 9.85833 16.975 10.4167L18.3333 11.5833" stroke="#FF3E5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className='text-[14px] text-[#FF3E5B]'>Upload Image/ Video/ Audio</span>
                                                </p>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Tag Business Function* */}
                                    <div>
                                        {/* title */}
                                        <h6 className='my-[12px]'>Tag Business Function<span className='text-[#FF3E5B]'>*</span></h6>

                                        <div className='w-full flex gap-[12px] flex-wrap'>
                                            <span className='border-[1px] border-[#FF3E5B] bg-transparent p-[8px_18px] rounded-full text-[#FF3E5B] font-[600]'>Product</span>
                                            <span className='border-[1px] border-[#FF3E5B] bg-transparent p-[8px_18px] rounded-full text-[#FF3E5B] font-[600]'>Sales</span>
                                            <span className='border-[1px] border-[#FF3E5B] bg-transparent p-[8px_18px] rounded-full text-[#FF3E5B] font-[600]'>Marketing</span>
                                            <span className='border-[1px] border-[#8E8585] bg-transparent p-[8px_18px] rounded-full text-[#8E8585] font-[600]'>Pre Sales</span>
                                            <span className='border-[1px] border-[#8E8585] bg-transparent p-[8px_18px] rounded-full text-[#8E8585] font-[600]'>After Sales</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </>
                }
            </div>

            {/* fixed button in button */}
            <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>

                <div className='xs:w-[328px] w-full flex h-full items-center gap-[10px]'>
                    {/* back button */}
                    <button type='button' onClick={() => navigate('/interaction-details')} className='w-full h-full p-[15px_30px] bg-transparent border-[1px] border-[#FF3E5B] text-[#FF3E5B] font-semibold rounded-[5px] flex items-center justify-center'>
                        Back
                    </button>

                    {/* back button */}
                    <button type='button' onClick={() => navigate('/insight-details-submit')} className='w-full h-full p-[15px_30px] bg-[#FF3E5B] text-white font-semibold rounded-[5px] flex items-center justify-center'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    )
}

export default InsightDetails