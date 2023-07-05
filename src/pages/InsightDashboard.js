import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl';
import DonutChart from '../components/DonutChart';
import PieCharts from '../components/PieCharts';
import BarCharts from '../components/BarCharts';
import { barCharts, doughnutData, pieCharts, pieCharts_2 } from '../data';
import FilterModelShow from '../components/FilterModelShow';
import FilterBox from '../components/FilterBox';

function InsightDashboard() {
    const navigate = useNavigate();

    // set Filter Model Show
    const [filterModelShow, setFilterModelShow] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            <div className='w-full p-[19px_16px] max-w-[1260px] mx-auto '>
                <div className='w-full flex items-center justify-between'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        <span onClick={() => navigate('/')} className='cursor-pointer'>
                            <SlArrowLeft size={18} />
                        </span>
                        Insights Dashbaord
                    </h1>

                    {/* filter and download icons */}
                    <div className='md:hidden block'>
                        <div className='flex items-center gap-[16px]'>
                            {/* download */}
                            <div className='w-[40px] h-[40px] rounded-[5px] bg-white cursor-pointer flex items-center justify-center'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.11157C12.3314 3.11157 12.6 3.3802 12.6 3.71157V13.5272L15.7505 9.96413C15.97 9.71588 16.3492 9.69258 16.5974 9.91208C16.8457 10.1316 16.869 10.5108 16.6495 10.759L12.4495 15.509C12.3356 15.6378 12.1719 15.7116 12 15.7116C11.8281 15.7116 11.6644 15.6378 11.5505 15.509L7.35051 10.759C7.131 10.5108 7.15431 10.1316 7.40255 9.91208C7.6508 9.69258 8.02998 9.71588 8.24948 9.96413L11.4 13.5272V3.71157C11.4 3.3802 11.6686 3.11157 12 3.11157ZM2.99999 15.1116C3.33136 15.1116 3.59999 15.3802 3.59999 15.7116V19.8116C3.59999 20.1461 3.73961 20.4736 3.99903 20.7201C4.2595 20.9675 4.61904 21.1116 4.99999 21.1116H19C19.3809 21.1116 19.7405 20.9675 20.001 20.7201C20.2604 20.4736 20.4 20.1461 20.4 19.8116V15.7116C20.4 15.3802 20.6686 15.1116 21 15.1116C21.3314 15.1116 21.6 15.3802 21.6 15.7116V19.8116C21.6 20.4848 21.3182 21.1239 20.8275 21.5901C20.3378 22.0553 19.6799 22.3116 19 22.3116H4.99999C4.32008 22.3116 3.66221 22.0553 3.17253 21.5901C2.68181 21.1239 2.39999 20.4848 2.39999 19.8116V15.7116C2.39999 15.3802 2.66862 15.1116 2.99999 15.1116Z" fill="#FF3E5B" />
                                </svg>
                            </div>
                            {/* filter */}
                            <div onClick={() => setFilterModelShow(!filterModelShow)} className={`w-[40px] h-[40px] rounded-[5px] ${filterModelShow === true ? 'bg-[#FF3E5B]' : 'bg-white'} cursor-pointer flex items-center justify-center`}>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.39999 3.71169C2.39999 3.38032 2.66862 3.11169 2.99999 3.11169H21C21.3314 3.11169 21.6 3.38032 21.6 3.71169V6.88817C21.6 7.0536 21.5317 7.2117 21.4112 7.32509L14.85 13.5004V19.594C14.85 19.8265 14.7158 20.038 14.5055 20.1369L10.0055 22.2546C9.81962 22.342 9.60193 22.3284 9.4285 22.2183C9.25507 22.1082 9.14999 21.9171 9.14999 21.7117V13.5004L2.58878 7.32509C2.4683 7.2117 2.39999 7.0536 2.39999 6.88817V3.71169ZM3.59999 4.31169V6.62892L10.1612 12.8042C10.2817 12.9176 10.35 13.0757 10.35 13.2411V20.7662L13.65 19.2133V13.2411C13.65 13.0757 13.7183 12.9176 13.8388 12.8042L20.4 6.62892V4.31169H3.59999Z" fill={`${filterModelShow === true ? '#ffffff' : '#FF3E5B'}`} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* filterModelShow */}

                {
                    filterModelShow === true &&
                    <FilterModelShow setFilterModelShow={setFilterModelShow} filterModelShow={filterModelShow} />
                }

                {/* desktop side filter */}
                <div className='md:block hidden my-[20px]'>
                    <FilterBox />
                </div>

                {/* contents */}
                <div className='w-full h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[17px] gap-[20px]'>
                    {/* donuts chart */}
                    <DonutChart doughnutData={doughnutData} title='Business wise insights' />
                    {/* pie charts */}
                    <PieCharts pieCharts={pieCharts} pieCharts_2={pieCharts_2} title='Model wise insights' />
                    {/* Bar chart */}
                    <BarCharts barCharts={barCharts} title='Top modes of interactions' />
                </div>
            </div>
        </div>
    )
}

export default InsightDashboard