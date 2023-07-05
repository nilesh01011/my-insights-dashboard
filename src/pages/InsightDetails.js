import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import { HiOutlinePlus } from 'react-icons/hi';
import ActiveTags from '../components/ActiveTags';
import VideoExplain from '../components/VideoExplain';
import DiscardPopup from '../components/DiscardPopup';

function InsightDetails() {
    const navigate = useNavigate();

    const [firstSuppObservation, setFirstSuppObservation] = useState('');

    // + Add Observation
    const [showMoreObservation, setShowMoreObservation] = useState(false);
    const [rows, setRows] = useState([]);
    // textarea changed event
    const handleTextAreaChanged = (e, id) => {
        const inputText = e.target.value;
        const updatedRows = rows.map((item) => item.id === id ? { ...item, text: inputText } : item);

        setRows(updatedRows);
    }
    // rows count
    const rowsCount = rows.length;
    // set row event
    const handleMoreRows = () => {
        const newRow = { id: rowsCount + 2, title: '' };
        setRows([...rows, newRow]);
    }
    // remove row events
    const handleRemoveRow = (id) => {
        const removeRow = rows.filter((row) => row.id !== id);
        setRows(removeRow)
    }

    // + Add Observation button
    const handleAddObservation = () => {
        setShowMoreObservation(true);
        handleMoreRows()
    }

    // Additional Details collapse event
    const [collapseTwo, setCollapseTwo] = useState(true);

    // tabs Tag Business Function
    const [isSelectedTag, setIsSelectedTag] = useState([]);

    const tagsList = [
        {
            id: 1,
            name: 'Product'
        },
        {
            id: 2,
            name: 'Sales'
        },
        {
            id: 3,
            name: 'Marketing'
        },
        {
            id: 4,
            name: 'Pre Sales'
        },
        {
            id: 5,
            name: 'After Sales'
        },
    ]

    // + Add insight Statement
    const [addInsightStatement, setAddInsightStatement] = useState(false);

    const [rows_2, setRows_2] = useState([]);

    // rows count
    const rowsCount_2 = rows_2.length;
    // set row event
    const handleMoreInsightsStatementRows = () => {
        const newRow = { id: rowsCount_2 + 2 };
        setRows_2([...rows_2, newRow]);
    }
    // remove row events
    const handleRemoveMoreInsightsStatementRow = (id) => {
        const removeRow = rows_2.filter((row) => row.id !== id);
        setRows_2(removeRow)
    }
    // + Add Observation button
    const handleAddInsightsStatement = () => {
        setAddInsightStatement(true);
        handleMoreInsightsStatementRows();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // discard event
    const [discardEvent, setDiscardEvent] = useState(false);

    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            {/* my insights lists */}
            <div className='w-full p-[19px_16px] pb-[4.7rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[6px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        New Insights
                    </h1>
                    {/* filter icons */}
                    <h6 onClick={() => setDiscardEvent(true)} className='font-bold cursor-pointer'>
                        Close
                    </h6>
                </div>

                {/* discard event */}
                {
                    discardEvent === true &&
                    <DiscardPopup setDiscardEvent={setDiscardEvent} discardEvent={discardEvent} />
                }

                {/* video links */}
                <VideoExplain />
                {/* line */}
                <div className='w-full h-[1px] bg-[#8E8585]/20 mb-[25px] mt-[16px]'></div>
                {/* stepper steps */}
                <div className='mb-[17px]'>
                    <Stepper steps={2} />
                </div>

                {/* Insight Statement */}
                <div className='w-full h-full bg-white p-[16px] rounded-[10px]'>
                    {/* Additional Details */}
                    <div className='w-full h-full mb-[15px]'>
                        {/* header */}
                        <div className={`w-full flex items-center justify-between`}>
                            {/* title */}
                            <h2 className='font-bold mb-[6.5px]'>Insight Statement</h2>
                        </div>

                        {/* Mode of Interaction */}
                        <div className='flex w-fill flex-col gap-[5px] pt-0'>
                            {/* title */}
                            {/* <h6>Please write down statement</h6> */}
                            {/* input fields */}
                            <textarea placeholder='Type here...' className='focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                        </div>
                    </div>

                    {/* Supporting Observation 1 */}
                    <div className='w-full h-full rounded-[10px]'>
                        {/* header */}
                        <div className={`w-full cursor-pointer flex items-center justify-between`}>
                            {/* title */}
                            <h2 className='font-[400] mb-[6.5px]'>Supporting Observation 1<span className='text-red-500'>*</span></h2>
                        </div>

                        {/* Mode of Interaction */}
                        <div className='flex w-fill flex-col gap-[5px] pt-0'>
                            {/* title */}
                            {/* <h6>Write down your observation<span className='text-red-500'>*</span></h6> */}
                            {/* input fields */}
                            <div className='relative'>
                                <textarea placeholder='Type here...' onChange={(e) => setFirstSuppObservation(e.target.value)} className='w-full focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                                <span className='absolute right-[10px] top-[20%]'>
                                    <img src='./images/speakIcons.svg' alt='speakIcons' className='' />
                                </span>
                            </div>
                            {/* input length counts */}
                            <div className='relative'>
                                <p className='absolute bottom-[15px] text-[#8E8585] right-[10px] text-[14px]'>{firstSuppObservation ? firstSuppObservation.length : 0}/300</p>
                            </div>
                        </div>
                    </div>

                    {
                        showMoreObservation === true &&
                        <div className='w-full h-full flex flex-col mb-[10px]'>
                            {
                                rows.map((ele, index) => {
                                    return (
                                        <div key={index} className='w-full h-full bg-white rounded-[10px]'>
                                            {/* header */}
                                            <div className={`w-full cursor-pointer flex items-center justify-between`}>
                                                {/* title */}
                                                <h2 className='font-[400] mb-[6.5px]'>Supporting Observation {index + 2}</h2>
                                                {/* delete icons */}
                                                <span onClick={() => handleRemoveRow(ele.id)}>
                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.125 4C6.71079 4 6.375 4.33579 6.375 4.75V5.5H13.625V4.75C13.625 4.33579 13.2892 4 12.875 4H7.125ZM5.375 4.75V5.5H4.25045H3C2.72386 5.5 2.5 5.72386 2.5 6C2.5 6.27614 2.72386 6.5 3 6.5H3.77645L4.3115 16.345C4.36195 17.2732 5.12932 18 6.05892 18H9.74999H10H13.6911C14.6207 18 15.3881 17.2732 15.4385 16.345L15.9736 6.5H17C17.2761 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.2761 5.5 17 5.5H15.4995H14.625V4.75C14.625 3.7835 13.8415 3 12.875 3H7.125C6.1585 3 5.375 3.7835 5.375 4.75ZM4.77792 6.5L5.31003 16.2907C5.33165 16.6885 5.66052 17 6.05892 17H9.74999H10H13.6911C14.0895 17 14.4184 16.6885 14.44 16.2907L14.9721 6.5H4.77792ZM7.24918 8.47122C7.23328 8.19553 6.9969 7.98494 6.72122 8.00084C6.44553 8.01675 6.23494 8.25313 6.25084 8.52881L6.62584 15.0288C6.64175 15.3045 6.87813 15.5151 7.15381 15.4992C7.4295 15.4833 7.64009 15.2469 7.62419 14.9712L7.24918 8.47122ZM13.0288 8.00084C12.7531 7.98494 12.5167 8.19553 12.5008 8.47122L12.1258 14.9712C12.1099 15.2469 12.3205 15.4833 12.5962 15.4992C12.8719 15.5151 13.1083 15.3045 13.1242 15.0288L13.4992 8.52881C13.5151 8.25313 13.3045 8.01675 13.0288 8.00084ZM9.5 8.5C9.5 8.22386 9.72386 8 10 8C10.2761 8 10.5 8.22386 10.5 8.5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V8.5Z" fill="#FF3E5B" />
                                                    </svg>
                                                </span>
                                            </div>

                                            {/* Mode of Interaction */}
                                            <div className='flex w-fill flex-col gap-[5px] pt-0'>
                                                {/* title */}
                                                {/* <h6>Write down your observation<span className='text-red-500'>*</span></h6> */}
                                                {/* input fields */}
                                                <div className='relative'>
                                                    <textarea onChange={(e) => handleTextAreaChanged(e, ele.id)} placeholder='Type here...' className='w-full focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                                                    <span className='absolute right-[10px] top-[20%]'>
                                                        <img src='./images/speakIcons.svg' alt='speakIcons' className='' />
                                                    </span>
                                                </div>
                                                {/* input length counts */}
                                                <div className='relative'>
                                                    <p className='absolute bottom-[15px] text-[#8E8585] right-[10px] text-[14px]'>{ele.text ? ele.text.length : 0}/300</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }

                    {/* + Add observations */}
                    <div onClick={handleAddObservation} className='w-full my-[10px] flex items-center gap-[8px] cursor-pointer'>
                        <span className='w-[24px] h-[24px] rounded-full bg-[#FF3E5B] flex items-center justify-center'>
                            <HiOutlinePlus size={14} className='text-white' />
                        </span>
                        <p className='font-bold text-[#FF3E5B] text-[14px]'>Add Observation</p>
                    </div>

                    {/* Additional Details */}
                    <div className='w-full h-full mt-[20px]'>
                        {/* header */}
                        <div className={` mb-[15px] w-full cursor-pointer flex items-center justify-between`}>
                            {/* title */}
                            <h2 className='font-[400]'>Tag Business Function<span className='text-[#FF3E5B]'>*</span></h2>
                        </div>

                        {/* contents */}
                        <div className='flex flex-col gap-[16px] bg-white rounded-[10px]'>
                            {/* Tag Business Function* */}
                            <div className='w-full'>
                                <div className='w-full flex gap-[12px] flex-wrap'>
                                    {
                                        tagsList?.map((ele) => (
                                            <ActiveTags key={ele.id} item={ele.name} isSelectedTag={isSelectedTag} setIsSelectedTag={setIsSelectedTag} />
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className='w-full h-full'>
                                {/* Supporting Proof */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6 className='mb-[12px]'>Supporting Document</h6>
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
                                    {/* note */}
                                    <p className='text-[#635D5D] text-[12px] mt-[8px]'>Note: <span>
                                        File format to be jpg, png, mp3, mp4 and file size should not be more than 5MB.</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    addInsightStatement &&
                    <div className='w-full h-full flex flex-col gap-[20px]'>
                        {
                            rows_2?.map((ele, index) => {
                                return (
                                    <div key={index} className='w-full h-full mt-[15px] bg-white p-[16px] rounded-[10px]'>
                                        {/* Additional Details */}
                                        <div className='w-full h-full mb-[15px]'>
                                            {/* header */}
                                            <div className={`w-full flex items-center justify-between`}>
                                                {/* title */}
                                                <h2 className='font-bold mb-[6.5px]'>Insight Statement {index + 2}</h2>
                                                {/* icons */}
                                                <span className='cursor-pointer' onClick={() => handleRemoveMoreInsightsStatementRow(ele.id)}>
                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.125 4C6.71079 4 6.375 4.33579 6.375 4.75V5.5H13.625V4.75C13.625 4.33579 13.2892 4 12.875 4H7.125ZM5.375 4.75V5.5H4.25045H3C2.72386 5.5 2.5 5.72386 2.5 6C2.5 6.27614 2.72386 6.5 3 6.5H3.77645L4.3115 16.345C4.36195 17.2732 5.12932 18 6.05892 18H9.74999H10H13.6911C14.6207 18 15.3881 17.2732 15.4385 16.345L15.9736 6.5H17C17.2761 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.2761 5.5 17 5.5H15.4995H14.625V4.75C14.625 3.7835 13.8415 3 12.875 3H7.125C6.1585 3 5.375 3.7835 5.375 4.75ZM4.77792 6.5L5.31003 16.2907C5.33165 16.6885 5.66052 17 6.05892 17H9.74999H10H13.6911C14.0895 17 14.4184 16.6885 14.44 16.2907L14.9721 6.5H4.77792ZM7.24918 8.47122C7.23328 8.19553 6.9969 7.98494 6.72122 8.00084C6.44553 8.01675 6.23494 8.25313 6.25084 8.52881L6.62584 15.0288C6.64175 15.3045 6.87813 15.5151 7.15381 15.4992C7.4295 15.4833 7.64009 15.2469 7.62419 14.9712L7.24918 8.47122ZM13.0288 8.00084C12.7531 7.98494 12.5167 8.19553 12.5008 8.47122L12.1258 14.9712C12.1099 15.2469 12.3205 15.4833 12.5962 15.4992C12.8719 15.5151 13.1083 15.3045 13.1242 15.0288L13.4992 8.52881C13.5151 8.25313 13.3045 8.01675 13.0288 8.00084ZM9.5 8.5C9.5 8.22386 9.72386 8 10 8C10.2761 8 10.5 8.22386 10.5 8.5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V8.5Z" fill="#FF3E5B" />
                                                    </svg>
                                                </span>
                                            </div>

                                            {/* Mode of Interaction */}
                                            <div className='flex w-fill flex-col gap-[5px] pt-0'>
                                                {/* title */}
                                                {/* <h6>Please write down statement</h6> */}
                                                {/* input fields */}
                                                <textarea placeholder='Type here...' className='focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                                            </div>
                                        </div>

                                        {/* Supporting Observation 1 */}
                                        <div className='w-full h-full'>
                                            {/* header */}
                                            <div className={`w-full cursor-pointer flex items-center justify-between`}>
                                                {/* title */}
                                                <h2 className='font-[400]'>Supporting Observation 1</h2>
                                            </div>

                                            {/* Mode of Interaction */}
                                            <div className='flex w-fill flex-col gap-[5px]'>
                                                {/* title */}
                                                {/* <h6>Write down your observation<span className='text-red-500'>*</span></h6> */}
                                                {/* input fields */}
                                                <div className='relative'>
                                                    <textarea placeholder='Type here...' onChange={(e) => setFirstSuppObservation(e.target.value)} className='w-full focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                                                    <span className='absolute right-[10px] top-[20%]'>
                                                        <img src='./images/speakIcons.svg' alt='speakIcons' className='' />
                                                    </span>
                                                </div>
                                                {/* input length counts */}
                                                <div className='relative'>
                                                    <p className='absolute bottom-[15px] text-[#8E8585] right-[10px] text-[14px]'>{firstSuppObservation ? firstSuppObservation.length : 0}/300</p>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            showMoreObservation === true &&
                                            <div className='w-full h-full flex flex-col mb-[10px]'>
                                                {
                                                    rows.map((ele, index) => {
                                                        return (
                                                            <div key={ele.id} className='w-full h-full'>
                                                                {/* header */}
                                                                <div className={`w-full cursor-pointer flex items-center justify-between`}>
                                                                    {/* title */}
                                                                    <h2 className='font-[400]'>Supporting Observation {index + 2}</h2>
                                                                </div>

                                                                {/* Mode of Interaction */}
                                                                <div className='flex w-fill flex-col gap-[5px] pt-0'>
                                                                    {/* title */}
                                                                    {/* <h6>Write down your observation<span className='text-red-500'>*</span></h6> */}
                                                                    {/* input fields */}
                                                                    <div className='relative'>
                                                                        <textarea onChange={(e) => handleTextAreaChanged(e, ele.id)} placeholder='Type here...' className='w-full focus:outline-none border-[1px] border-[#DEDEDE] p-[10px] resize-none rounded-[5px]' maxLength={300}></textarea>
                                                                        <span className='absolute right-[10px] top-[20%]'>
                                                                            <img src='./images/speakIcons.svg' alt='speakIcons' className='' />
                                                                        </span>
                                                                    </div>
                                                                    {/* input length counts */}
                                                                    <div className='relative'>
                                                                        <p className='absolute bottom-[15px] text-[#8E8585] right-[10px] text-[14px]'>{ele.text ? ele.text.length : 0}/300</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }

                                        {/* + Add observations */}
                                        <div onClick={handleAddObservation} className='w-full my-[10px] flex items-center gap-[8px] cursor-pointer'>
                                            <span className='w-[24px] h-[24px] rounded-full bg-[#FF3E5B] flex items-center justify-center'>
                                                <HiOutlinePlus size={14} className='text-white' />
                                            </span>
                                            <p className='font-bold text-[#FF3E5B] text-[14px]'>Add Observation</p>
                                        </div>

                                        {/* Additional Details */}
                                        <div className='w-full h-full mt-[20px]'>
                                            {/* header */}
                                            <div className={`mb-[15px] w-full cursor-pointer flex items-center justify-between`}>
                                                {/* title */}
                                                <h2 className='font-[400]'>Tag Business Function</h2>
                                            </div>

                                            <div className='flex flex-col gap-[16px] bg-white divide-y-[1px] divide-[#DEDEDE] rounded-[10px]'>
                                                {/* Tag Business Function* */}
                                                <div className='w-full'>
                                                    <div className='w-full flex gap-[12px] flex-wrap'>
                                                        {
                                                            tagsList?.map((ele) => (
                                                                <ActiveTags key={ele.id} item={ele.name} isSelectedTag={isSelectedTag} setIsSelectedTag={setIsSelectedTag} />
                                                            ))
                                                        }
                                                    </div>
                                                </div>

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
                                                        {/* note */}
                                                        <p className='text-[#635D5D] text-[12px] mt-[8px]'>Note: <span>
                                                            File format to be jpg, png, mp3, mp4 and file size should not be more than 5MB.</span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

                {/* + Add New Insight Statement */}
                <div onClick={handleAddInsightsStatement} className='w-full my-[12px] flex items-center gap-[8px] cursor-pointer'>
                    <span className='w-[24px] h-[24px] rounded-full bg-[#FF3E5B] flex items-center justify-center'>
                        <HiOutlinePlus size={14} className='text-white' />
                    </span>
                    <p className='font-bold text-[#FF3E5B] text-[14px]'>Add New Insight Statement</p>
                </div>
            </div>


            {/* fixed button in button */}
            <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>

                <div className='xs:w-[328px] w-full flex h-full items-center gap-[10px]'>
                    {/* back button */}
                    <button type='button' onClick={() => navigate('/new-insights')} className='w-full h-full p-[15px_30px] bg-transparent border-[1px] border-[#FF3E5B] text-[#FF3E5B] font-semibold rounded-[5px] flex items-center justify-center'>
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