import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DropdownSelectTwo from '../components/DropdownSelectTwo';
import DropdownSelect from '../components/DropdownSelect';
import InputFields from '../components/InputFields';
import Header from '../components/Header';

function SummaryDetails() {
    const navigate = useNavigate();

    const [collapseTwo, setCollapseTwo] = useState(true);

    const [collapseOne, setCollapseOne] = useState(true);

    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            {/* my insights lists */}
            <div className='w-full p-[19px_16px] max-w-[1260px] mx-auto'>

                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[17px]'>
                    {/* title */}
                    <div className='flex md:items-center gap-[6px] md:flex-row flex-col'>
                        <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                            Bolero Pick Up
                        </h1>
                        <div className='flex items-center gap-[8px] text-[12px]'>
                            <span>12 Nov, 23</span>
                            <span className='w-[4px] h-[4px] bg-[#8E8585] rounded-full'></span>
                            <span>9:30 AM</span>
                        </div>
                    </div>
                    {/* filter icons */}
                    <h6 onClick={() => navigate('/')} className='font-bold cursor-pointer text-[#FF3E5B]'>
                        Close
                    </h6>
                </div>

                {/* line */}
                <div className='w-full h-[1px] bg-[#DEDEDE]'></div>

                {/* contents */}

                {/* about interaction */}
                <div className='w-full h-full bg-white rounded-[10px]'>
                    {/* header */}
                    <div onClick={() => setCollapseOne(!collapseOne)} className={`${collapseOne === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                        {/* title */}
                        <h2 className='font-bold'>About Interaction</h2>
                        {/* arrow icons */}
                        <span className={`${collapseOne === true && 'rotate-180'} transition-all duration-300`}>
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
                                    <h6 className='mt-[12px]'>Supporting Proof</h6>

                                    {/* file text */}

                                    <p className='w-full flex items-center justify-between my-[16px] cursor-pointer'>
                                        <span className='underline text-[#366FCA] text-[12px]'>Customer Feedback Form.pdf</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M9.42669 14.7688C9.585 14.9271 9.79307 15.0062 10.0011 15.0062C10.2092 15.0062 10.4173 14.9271 10.5756 14.7688L14.3162 11.0281C14.6351 10.7092 14.6351 10.1958 14.3162 9.87693C13.9974 9.55805 13.484 9.55805 13.1651 9.87693L10.813 12.229V2.31417C10.813 1.86412 10.4489 1.5 9.99887 1.5C9.54881 1.5 9.1847 1.86412 9.1847 2.31417V12.229L6.83491 9.87693C6.51602 9.55805 6.00264 9.55805 5.68376 9.87693C5.36487 10.1958 5.36487 10.7092 5.68376 11.0281L9.42669 14.7688Z" fill="#342C2C" />
                                                <path d="M18.1858 13.5204C17.7358 13.5204 17.3717 13.8845 17.3717 14.3345V17.9644H2.62835V14.3345C2.62835 13.8845 2.26423 13.5204 1.81417 13.5204C1.36412 13.5204 1 13.8845 1 14.3345V18.7786C1 19.2286 1.36412 19.5927 1.81417 19.5927H18.1858C18.6359 19.5927 19 19.2286 19 18.7786V14.3345C19 13.8845 18.6359 13.5204 18.1858 13.5204Z" fill="#342C2C" />
                                            </svg>
                                        </span>
                                    </p>

                                    <p className='w-full flex items-center justify-between cursor-pointer'>
                                        <span className='underline text-[#366FCA] text-[12px]'>Dealer Feedback Form.pdf</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path d="M9.42669 14.7688C9.585 14.9271 9.79307 15.0062 10.0011 15.0062C10.2092 15.0062 10.4173 14.9271 10.5756 14.7688L14.3162 11.0281C14.6351 10.7092 14.6351 10.1958 14.3162 9.87693C13.9974 9.55805 13.484 9.55805 13.1651 9.87693L10.813 12.229V2.31417C10.813 1.86412 10.4489 1.5 9.99887 1.5C9.54881 1.5 9.1847 1.86412 9.1847 2.31417V12.229L6.83491 9.87693C6.51602 9.55805 6.00264 9.55805 5.68376 9.87693C5.36487 10.1958 5.36487 10.7092 5.68376 11.0281L9.42669 14.7688Z" fill="#342C2C" />
                                                <path d="M18.1858 13.5204C17.7358 13.5204 17.3717 13.8845 17.3717 14.3345V17.9644H2.62835V14.3345C2.62835 13.8845 2.26423 13.5204 1.81417 13.5204C1.36412 13.5204 1 13.8845 1 14.3345V18.7786C1 19.2286 1.36412 19.5927 1.81417 19.5927H18.1858C18.6359 19.5927 19 19.2286 19 18.7786V14.3345C19 13.8845 18.6359 13.5204 18.1858 13.5204Z" fill="#342C2C" />
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
        </div>
    )
}

export default SummaryDetails