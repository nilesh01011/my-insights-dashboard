import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { SlArrowLeft } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';
import MyInsightsBox from '../components/MyInsightsBox';
import FilterBox from '../components/FilterBox';

function MyInsights() {
    const navigate = useNavigate();

    const myInsightsList = [
        {
            id: 1,
            title: 'XUV 700',
            text: 'XUV700 vs Scorpio-N. Which one to buy?',
            date: '12 Nov, 23',
            time: '9:30 AM'
        },
        {
            id: 2,
            title: 'XUV 300',
            text: 'Service Retention - Extending the customer’s lifetime value',
            date: '11 Nov, 23',
            time: '5:30 AM'
        },
        {
            id: 3,
            title: 'Mahindra 475 DI',
            text: 'Strengthening the image of M&M as leaders in Safety',
            date: '11 Nov, 23',
            time: '10:50 AM'
        },
        {
            id: 4,
            title: 'Bolero Pick Up',
            text: 'Seat belt is mandatory in rear seat which is not available in my vehicle GJ06TR0987, model:7HVHTS',
            date: '12 Nov, 23',
            time: '9:30 AM'
        }
    ];

    const [addTooltip, setAddTooltip] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const [isLeftSide, setIsLeftSide] = useState(false);

    const [showMyInsights, setShowMyInsights] = useState(false);

    useEffect(() => {
        const getTooltip = localStorage.getItem('showTooltip');


        if (getTooltip === 'true') {
            setAddTooltip(true);
            setIsAnimation(true)
            setShowMyInsights(true)
        } else {
            setAddTooltip(false);
            setIsAnimation(false);
            setShowMyInsights(false)
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimation(false);
            setIsLeftSide(true);
            localStorage.removeItem('showTooltip');
        }, 3000);
    }, []);

    const myNewInsightsList = [
        {
            id: 1,
            title: 'Bolero Pick Up',
            text: 'Seat belt is mandatory in rear seat which is not available in my vehicle GJ06TR0987, mode..',
            date: '12 Nov, 23',
            time: '9:30 AM',
            links: '/summary-my-insights'
        }
    ]

    return (
        <div className='w-full h-full'>
            <Header />

            {/* tooltips */}
            {
                <div className='fixed top-[73px] -right-2'>
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

            {/* contents */}
            <div className='w-full p-[19px_16px] pb-[6rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[17px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        <span onClick={() => navigate('/')} className='cursor-pointer'>
                            <SlArrowLeft size={18} />
                        </span>
                        My Insights {showMyInsights === true ? '(5)' : '(4)'}
                    </h1>
                    {/* filter icons */}
                    <div className='md:hidden block'>
                        <div className='w-[40px] h-[40px] rounded-[5px] bg-white cursor-pointer flex items-center justify-center'>
                            {/* icons */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.39999 3.71169C2.39999 3.38032 2.66862 3.11169 2.99999 3.11169H21C21.3314 3.11169 21.6 3.38032 21.6 3.71169V6.88817C21.6 7.0536 21.5317 7.2117 21.4112 7.32509L14.85 13.5004V19.594C14.85 19.8265 14.7158 20.038 14.5055 20.1369L10.0055 22.2546C9.81962 22.342 9.60193 22.3284 9.4285 22.2183C9.25507 22.1082 9.14999 21.9171 9.14999 21.7117V13.5004L2.58878 7.32509C2.4683 7.2117 2.39999 7.0536 2.39999 6.88817V3.71169ZM3.59999 4.31169V6.62892L10.1612 12.8042C10.2817 12.9176 10.35 13.0757 10.35 13.2411V20.7662L13.65 19.2133V13.2411C13.65 13.0757 13.7183 12.9176 13.8388 12.8042L20.4 6.62892V4.31169H3.59999Z" fill="#FF3E5B" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* desktop side filter */}
                <div className='md:block hidden my-[20px]'>
                    <FilterBox />
                </div>

                {
                    showMyInsights === true &&
                    <div className='mb-[17px]'>
                        {
                            myNewInsightsList?.map((ele) => {
                                return <MyInsightsBox key={ele.id} data={ele} />
                            })
                        }
                    </div>
                }

                {/* my insights lists */}
                <div className='w-full h-full grid grid-cols-1 gap-[20px] items-center'>
                    {
                        myInsightsList?.map((ele) => {
                            return <MyInsightsBox key={ele.id} data={ele} />
                        })
                    }
                </div>
            </div>
            {/* fixed button in button */}
            <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>
                <button onClick={() => navigate('/interaction-details')} type='button' className='xs:w-[328px] w-full h-full p-[15px_30px] bg-[#FF3E5B] text-white font-semibold rounded-[5px] flex items-center justify-center'>
                    + Add Insight
                </button>
            </div>
        </div>
    )
}

export default MyInsights