import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { SlArrowLeft } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';

function SuccessfulMyInsight() {
    const navigate = useNavigate();

    const myInsightBox = [
        {
            id: 1,
            title: 'Bolero Pick Up',
            text: 'Seat belt is mandatory in rear seat which is not available in my vehicle GJ06TR0987, mode..',
            lists: [
                {
                    id: 1.1,
                    name: 'Product'
                },
                {
                    id: 1.2,
                    name: 'Sales'
                },
                {
                    id: 1.3,
                    name: 'Marketing'
                }
            ],
            date: '12 Nov, 23',
            time: '9:30 AM',
            links: '/summary-my-insights'
        },
        {
            id: 2,
            title: 'XUV 700',
            text: 'XUV700 vs Scorpio-N. Which one to buy?',
            lists: [
                {
                    id: 2.1,
                    name: 'Product'
                },
                {
                    id: 2.2,
                    name: 'Sales'
                },
            ],
            date: '12 Nov, 23',
            time: '9:30 AM',
            links: '/my-insights'
        },
        {
            id: 3,
            title: 'XUV 300',
            text: 'Service Retention - Extending the customer’s lifetime value',
            lists: [
                {
                    id: 3.1,
                    name: 'Service'
                },
            ],
            date: '11 Nov, 23',
            time: '5:30 AM',
            links: '/my-insights'
        },
        {
            id: 4,
            title: 'Mahindra 475 DI',
            text: 'Strengthening the image of M&M as leaders in Safety',
            lists: [
                {
                    id: 3.1,
                    name: 'Product'
                },
                {
                    id: 3.2,
                    name: 'Service'
                },
            ],
            date: '11 Nov, 23',
            time: '5:30 AM',
            links: '/my-insights'
        }
    ];

    const [addTooltip, setAddTooltip] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const [isLeftSide, setIsLeftSide] = useState(false);

    useEffect(() => {
        const getTooltip = localStorage.getItem('showTooltip');


        if (getTooltip === 'true') {
            setAddTooltip(true);
            setIsAnimation(true)
        } else {
            setAddTooltip(false);
            setIsAnimation(false);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimation(false);
            setIsLeftSide(true);
            localStorage.removeItem('showTooltip');
        }, 3000);
    }, []);

    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            <div className='w-full p-[19px_16px] pb-[6rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[17px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        My Insights
                    </h1>
                    {/* filter icons */}
                    <div className='w-[40px] h-[40px] rounded-[5px] bg-white cursor-pointer flex items-center justify-center'>
                        {/* icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.39999 3.71169C2.39999 3.38032 2.66862 3.11169 2.99999 3.11169H21C21.3314 3.11169 21.6 3.38032 21.6 3.71169V6.88817C21.6 7.0536 21.5317 7.2117 21.4112 7.32509L14.85 13.5004V19.594C14.85 19.8265 14.7158 20.038 14.5055 20.1369L10.0055 22.2546C9.81962 22.342 9.60193 22.3284 9.4285 22.2183C9.25507 22.1082 9.14999 21.9171 9.14999 21.7117V13.5004L2.58878 7.32509C2.4683 7.2117 2.39999 7.0536 2.39999 6.88817V3.71169ZM3.59999 4.31169V6.62892L10.1612 12.8042C10.2817 12.9176 10.35 13.0757 10.35 13.2411V20.7662L13.65 19.2133V13.2411C13.65 13.0757 13.7183 12.9176 13.8388 12.8042L20.4 6.62892V4.31169H3.59999Z" fill="#FF3E5B" />
                        </svg>
                    </div>
                </div>

                {/* tooltips */}
                {
                    // addTooltip === true &&
                    <div className='fixed top-[78px] right-0'>
                        <div className='relative'>
                            {/* ${isAnimation === true ? 'right-[5px]' : ''} */}
                            <div
                                id={`${isAnimation === true ? 'right-to-left' : `${isLeftSide === true && 'left-to-right'}`}`}
                                className={`absolute transition-all flex items-center justify-between gap-[11px] bg-white p-[10px_17px] border-b-[1px] border-[#00A310] rounded-[6px] z-50 w-[300px] h-max`} style={{ boxShadow: "0px 0px 8px 0px rgba(78, 78, 78, 0.25)" }}>
                                {/* left side icons */}
                                <div className='flex items-center gap-[6px]'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 3.5C6.13401 3.5 3 6.63401 3 10.5C3 14.366 6.13401 17.5 10 17.5C13.866 17.5 17 14.366 17 10.5C17 6.63401 13.866 3.5 10 3.5ZM2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5C18 14.9183 14.4183 18.5 10 18.5C5.58172 18.5 2 14.9183 2 10.5ZM14.5345 7.66131C14.7215 7.86444 14.7085 8.18076 14.5054 8.36781L9.0755 13.3678C8.88269 13.5454 8.58551 13.5439 8.39448 13.3644L5.49101 10.6372C5.28974 10.4481 5.27983 10.1317 5.46889 9.9304C5.65795 9.72913 5.97438 9.71923 6.17566 9.90829L8.74019 12.3172L13.828 7.63219C14.0311 7.44513 14.3474 7.45817 14.5345 7.66131Z" fill="#70C922" />
                                        </svg>
                                    </span>
                                    {/* headers */}
                                    <div className='flex items-center justify-between w-full'>
                                        <h4 className='text-[#00A310] text-[14px]'>New insight added successfully</h4>
                                    </div>
                                </div>
                                {/* right side contents */}
                                <div>
                                    <span onClick={() => setIsLeftSide(true)} className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.50254 2.00254C1.63922 1.86585 1.86083 1.86585 1.99751 2.00254L7.00002 7.00505L12.0025 2.00254C12.1392 1.86585 12.3608 1.86585 12.4975 2.00254C12.6342 2.13922 12.6342 2.36083 12.4975 2.49751L7.495 7.50002L12.4975 12.5025C12.6342 12.6392 12.6342 12.8608 12.4975 12.9975C12.3608 13.1342 12.1392 13.1342 12.0025 12.9975L7.00002 7.995L1.99751 12.9975C1.86083 13.1342 1.63922 13.1342 1.50254 12.9975C1.36585 12.8608 1.36585 12.6392 1.50254 12.5025L6.50505 7.50002L1.50254 2.49751C1.36585 2.36083 1.36585 2.13922 1.50254 2.00254Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                }

                {/* contents of my-insights */}
                <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 gap-[16px]'>
                    {
                        myInsightBox?.map((ele) => {
                            const { lists } = ele;
                            return (
                                <div key={ele.id} onClick={() => navigate(ele.links && ele.links)} className='w-full h-max cursor-pointer p-[12px_16px] rounded-[10px] bg-white flex items-center gap-[8px]'>
                                    {/* left side */}
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <h1 className='font-bold'>{ele.title}</h1>
                                        {/* text */}
                                        <p className='text-[12px]'>{ele.text}</p>
                                        {/* lists */}
                                        <div className='my-[8px] flex items-center flex-wrap gap-[8px]'>
                                            {
                                                lists?.map((el) => {
                                                    return (
                                                        <span key={el.id} className='border-[1px] border-[#8E8585] bg-transparent p-[8px_18px] rounded-full text-[#8E8585] font-[600]'>{el.name}</span>
                                                    )
                                                })
                                            }
                                        </div>

                                        {/* time and date */}
                                        <div className='flex items-center gap-[8px] text-[12px]'>
                                            <span>{ele.date}</span>
                                            <span className='w-[4px] h-[4px] bg-[#8E8585] rounded-full'></span>
                                            <span>{ele.time}</span>
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
                        })
                    }
                </div>
            </div>

            {/* fixed button in button */}
            <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>
                <button onClick={() => navigate('/my-insights')} type='button' className='xs:w-[328px] w-full h-full p-[15px_30px] bg-[#FF3E5B] text-white font-semibold rounded-[5px] flex items-center justify-center'>
                    + Add Insight
                </button>
            </div>
        </div>
    )
}

export default SuccessfulMyInsight