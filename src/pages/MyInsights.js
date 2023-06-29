import React from 'react'
import Header from '../components/Header'
import { SlArrowLeft } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';
import MyInsightsBox from '../components/MyInsightsBox';

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
    ]
    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            <div className='w-full p-[19px_16px] pb-[6rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[17px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        <span onClick={() => navigate('/')} className='cursor-pointer'>
                            <SlArrowLeft size={18} />
                        </span>
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

                {/* my insights lists */}
                <div className='w-full h-full grid sm:grid-cols-2 grid-cols-1 gap-[20px] items-center'>
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