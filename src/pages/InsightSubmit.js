import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Stepper from '../components/Stepper';
import InputFields from '../components/InputFields';
import DropdownSelect from '../components/DropdownSelect';
import DropdownSelectTwo from '../components/DropdownSelectTwo';

function InsightSubmit() {
    const navigate = useNavigate();
    const [isActiveTab, setIsActiveTab] = useState(3);

    const [collapseTwo, setCollapseTwo] = useState(true);

    const [collapseOne, setCollapseOne] = useState(true);

    const handleSubmitMyInsights = () => {
        const tooltip = true;
        localStorage.setItem('showTooltip', tooltip);

        navigate('/my-insights')
    };


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
                    <h6 onClick={() => navigate('/my-insights')} className='font-bold cursor-pointer text-[#FF3E5B]'>
                        Close
                    </h6>
                </div>
                {/* stepper steps */}
                <div className='mb-[17px]'>
                    <Stepper steps={3} />
                </div>

                {/* contents */}

                {/* about interaction */}
                <div className='w-full h-full bg-white rounded-[10px]'>
                    {/* header */}
                    <div onClick={() => setCollapseOne(!collapseOne)} className={`${collapseOne === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>About Interaction</h2>
                        {/* arrow icons */}
                        <span className={`${collapseOne === true ? 'rotate-0' : 'rotate-180'} transition-all duration-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g id="icon/chevron-arrow-down">
                                    <path id="Vector" d="M19.92 16.0475L13.4 9.52751C12.63 8.75751 11.37 8.75751 10.6 9.52751L4.08002 16.0475" stroke="#0B0B0C" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                    </div>

                    {/* contents */}
                    {
                        collapseOne === true &&
                        <div className='p-[16px] flex flex-col gap-[16px]'>
                            {/* Interaction Title */}
                            <div className='flex w-fill flex-col gap-[5px]'>
                                {/* title */}
                                <h6>Interaction Title</h6>
                                {/* input fields */}
                                <InputFields placeholder='Ex. XUV 700 intender' value="Bolero Pick Up" disable={true} />
                            </div>
                            {/* Mode of Interaction */}
                            <div className='flex w-fill flex-col gap-[5px]'>
                                {/* title */}
                                <h6>Mode of Interaction</h6>
                                {/* input fields */}
                                <DropdownSelect items={false} placeholder="Face to Face" disable={true} mandatory="" />
                            </div>
                            {/* Whom did you meet? */}
                            <div className='flex w-fill flex-col gap-[5px]'>
                                {/* title */}
                                <h6>Whom did you meet?</h6>
                                {/* input fields */}
                                <DropdownSelect items={false} disable={true} placeholder="Customer" mandatory="" />
                            </div>

                            {/* Location */}
                            <div className='flex w-fill flex-col gap-[5px]'>
                                {/* title */}
                                <h6>Location</h6>

                                <div className='flex gap-[12px] flex-col'>
                                    <div className='w-full flex items-center gap-[12px]'>
                                        {/* input fields */}
                                        <DropdownSelectTwo items={false} disable={true} placeholder="Zone" mandatory="" />
                                        {/* input fields */}
                                        <DropdownSelectTwo items={false} disable={true} placeholder="Ro" mandatory="" />
                                    </div>
                                    {/* input fields */}
                                    <DropdownSelectTwo items={false} disable={true} placeholder="Place" mandatory="" />
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {/* Business Details */}
                <div className='p-[16px] flex flex-col gap-[16px] bg-white mt-[20px] rounded-[10px]'>
                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px]'>
                        {/* title */}
                        <h6>Business details</h6>
                        {/* input fields */}
                        <DropdownSelectTwo disable={true} items={false} placeholder="CV" mandatory="" />
                    </div>
                    {/* Whom did you meet? */}
                    <div className='flex w-fill flex-col gap-[5px]'>
                        {/* title */}
                        <h6>Brand model</h6>
                        {/* input fields */}
                        <DropdownSelectTwo disable={true} items={false} placeholder="XUV 300" mandatory="" />
                    </div>
                </div>

                {/* Insight Statement */}
                <div className='w-full h-full bg-white rounded-[10px] my-[20px]'>
                    {/* header */}
                    <div className={`w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Insight Statement</h2>
                    </div>

                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px] p-[16px] pt-0'>
                        {/* title */}
                        {/* <h6>Please write down statement</h6> */}
                        {/* input fields */}
                        <textarea placeholder='Type here...' disabled className='focus:outline-none border-[1px] border-[#DEDEDE] bg-[#F4F4F4] cursor-not-allowed p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                    </div>
                </div>

                {/* Observation 1 */}
                <div className='w-full h-full bg-white rounded-[10px] my-[20px]'>
                    {/* header */}
                    <div className={`w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Observation 1</h2>
                    </div>

                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px] p-[16px] pt-0'>
                        {/* title */}
                        {/* <h6>Please write down statement</h6> */}
                        {/* input fields */}
                        <textarea placeholder='Type here...' disabled className='focus:outline-none border-[1px] border-[#DEDEDE] bg-[#F4F4F4] cursor-not-allowed p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                    </div>
                </div>


                {/* Observation 2 */}
                <div className='w-full h-full bg-white rounded-[10px] my-[20px]'>
                    {/* header */}
                    <div className={`w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Observation 2</h2>
                    </div>

                    {/* Mode of Interaction */}
                    <div className='flex w-fill flex-col gap-[5px] p-[16px] pt-0'>
                        {/* title */}
                        {/* <h6>Please write down statement</h6> */}
                        {/* input fields */}
                        <textarea placeholder='Type here...' disabled className='focus:outline-none border-[1px] border-[#DEDEDE] bg-[#F4F4F4] cursor-not-allowed p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                    </div>
                </div>


                {/* Additional Details */}
                <div className='w-full h-full bg-white rounded-[10px] mt-[20px]'>
                    {/* header */}
                    <div onClick={() => setCollapseTwo(!collapseTwo)} className={`${collapseTwo === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>Additional Details</h2>
                        {/* arrow icons */}
                        <span className={`${collapseTwo === true ? 'rotate-0' : 'rotate-180'} transition-all duration-300`}>
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

                                    {/* file text */}

                                    <p className='w-full flex items-center justify-between my-[16px]'>
                                        <span className='underline text-[#366FCA] text-[12px]'>Customer Feedback Form.pdf</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M6.61114 7.88886L9.22225 10.5L6.61114 13.1111C6.34025 13.382 6.21612 13.5061 6.22109 13.6248C6.2253 13.7252 6.32184 13.8218 6.50003 14C6.67823 14.1782 6.77477 14.2747 6.87518 14.2789C6.9939 14.2839 7.11803 14.1598 7.38892 13.8889L10 11.2777L12.6111 13.8889C12.882 14.1598 13.0062 14.2839 13.1249 14.2789C13.2253 14.2747 13.3218 14.1782 13.5 14C13.6782 13.8218 13.7748 13.7252 13.779 13.6248C13.7839 13.5061 13.6598 13.382 13.3889 13.1111L10.7778 10.5L13.3889 7.88886C13.6598 7.61797 13.7839 7.49384 13.779 7.37512C13.7748 7.27471 13.6782 7.17816 13.5 6.99997C13.3218 6.82178 13.2253 6.72523 13.1249 6.72103C13.0062 6.71606 12.882 6.84019 12.6111 7.11108L10 9.72219L7.38892 7.11108C6.88892 6.61108 6.88892 6.61108 6.50003 6.99997C6.11114 7.38886 6.11114 7.38886 6.61114 7.88886Z" fill="#342C2C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5C8.21997 1.5 6.47991 2.02784 4.99987 3.01677C3.51983 4.0057 2.36628 5.41131 1.68509 7.05585C1.0039 8.70038 0.82567 10.51 1.17294 12.2558C1.5202 14.0016 2.37737 15.6053 3.63604 16.864C4.89471 18.1226 6.49836 18.9798 8.24419 19.3271C9.99002 19.6743 11.7996 19.4961 13.4441 18.8149C15.0887 18.1337 16.4943 16.9802 17.4832 15.5001C18.4722 14.0201 19 12.28 19 10.5C19 8.11305 18.0518 5.82386 16.364 4.13604C14.6761 2.44821 12.3869 1.5 10 1.5ZM10 18.375C8.44247 18.375 6.91992 17.9131 5.62489 17.0478C4.32985 16.1825 3.32049 14.9526 2.72445 13.5136C2.12841 12.0747 1.97246 10.4913 2.27632 8.96366C2.58018 7.43606 3.3302 6.03287 4.43154 4.93153C5.53287 3.83019 6.93606 3.08017 8.46366 2.77632C9.99126 2.47246 11.5747 2.62841 13.0136 3.22445C14.4526 3.82049 15.6825 4.82984 16.5478 6.12488C17.4131 7.41992 17.875 8.94247 17.875 10.5C17.875 12.5886 17.0453 14.5916 15.5685 16.0685C14.0916 17.5453 12.0886 18.375 10 18.375Z" fill="#342C2C" />
                                            </svg>
                                        </span>
                                    </p>

                                    <p className='w-full flex items-center justify-between'>
                                        <span className='underline text-[#366FCA] text-[12px]'>Dealer Feedback Form.pdf</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M6.61114 7.88886L9.22225 10.5L6.61114 13.1111C6.34025 13.382 6.21612 13.5061 6.22109 13.6248C6.2253 13.7252 6.32184 13.8218 6.50003 14C6.67823 14.1782 6.77477 14.2747 6.87518 14.2789C6.9939 14.2839 7.11803 14.1598 7.38892 13.8889L10 11.2777L12.6111 13.8889C12.882 14.1598 13.0062 14.2839 13.1249 14.2789C13.2253 14.2747 13.3218 14.1782 13.5 14C13.6782 13.8218 13.7748 13.7252 13.779 13.6248C13.7839 13.5061 13.6598 13.382 13.3889 13.1111L10.7778 10.5L13.3889 7.88886C13.6598 7.61797 13.7839 7.49384 13.779 7.37512C13.7748 7.27471 13.6782 7.17816 13.5 6.99997C13.3218 6.82178 13.2253 6.72523 13.1249 6.72103C13.0062 6.71606 12.882 6.84019 12.6111 7.11108L10 9.72219L7.38892 7.11108C6.88892 6.61108 6.88892 6.61108 6.50003 6.99997C6.11114 7.38886 6.11114 7.38886 6.61114 7.88886Z" fill="#342C2C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5C8.21997 1.5 6.47991 2.02784 4.99987 3.01677C3.51983 4.0057 2.36628 5.41131 1.68509 7.05585C1.0039 8.70038 0.82567 10.51 1.17294 12.2558C1.5202 14.0016 2.37737 15.6053 3.63604 16.864C4.89471 18.1226 6.49836 18.9798 8.24419 19.3271C9.99002 19.6743 11.7996 19.4961 13.4441 18.8149C15.0887 18.1337 16.4943 16.9802 17.4832 15.5001C18.4722 14.0201 19 12.28 19 10.5C19 8.11305 18.0518 5.82386 16.364 4.13604C14.6761 2.44821 12.3869 1.5 10 1.5ZM10 18.375C8.44247 18.375 6.91992 17.9131 5.62489 17.0478C4.32985 16.1825 3.32049 14.9526 2.72445 13.5136C2.12841 12.0747 1.97246 10.4913 2.27632 8.96366C2.58018 7.43606 3.3302 6.03287 4.43154 4.93153C5.53287 3.83019 6.93606 3.08017 8.46366 2.77632C9.99126 2.47246 11.5747 2.62841 13.0136 3.22445C14.4526 3.82049 15.6825 4.82984 16.5478 6.12488C17.4131 7.41992 17.875 8.94247 17.875 10.5C17.875 12.5886 17.0453 14.5916 15.5685 16.0685C14.0916 17.5453 12.0886 18.375 10 18.375Z" fill="#342C2C" />
                                            </svg>
                                        </span>
                                    </p>
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
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>

            {/* fixed button in button */}
            <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>

                <div className='xs:w-[328px] w-full flex h-full items-center gap-[10px]'>
                    {/* back button */}
                    <button type='button' onClick={() => navigate('/insight-details')} className='w-full h-full p-[15px_30px] bg-transparent border-[1px] border-[#FF3E5B] text-[#FF3E5B] font-semibold rounded-[5px] flex items-center justify-center'>
                        Back
                    </button>

                    {/* back button */}
                    <button type='button' onClick={() => handleSubmitMyInsights()} className='w-full h-full p-[15px_30px] bg-[#FF3E5B] text-white font-semibold rounded-[5px] flex items-center justify-center'>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default InsightSubmit