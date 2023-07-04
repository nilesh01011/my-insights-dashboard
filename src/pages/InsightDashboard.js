import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl';
import DonutChart from '../components/DonutChart';
import PieCharts from '../components/PieCharts';
import BarCharts from '../components/BarCharts';
import { barCharts, doughnutData, pieCharts } from '../data';

function InsightDashboard() {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            <div className='w-full p-[19px_16px] max-w-[1260px] mx-auto '>
                {/* title */}
                <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                    <span onClick={() => navigate('/')} className='cursor-pointer'>
                        <SlArrowLeft size={18} />
                    </span>
                    Insights Dashbaord
                </h1>

                {/* contents */}
                <div className='w-full h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[17px] gap-[20px]'>
                    {/* donuts chart */}
                    <DonutChart doughnutData={doughnutData} title='Business wise insights' />
                    {/* pie charts */}
                    <PieCharts pieCharts={pieCharts} title='Model wise insights' />
                    {/* Bar chart */}
                    <BarCharts barCharts={barCharts} title='Top modes of interactions' />
                </div>
            </div>
        </div>
    )
}

export default InsightDashboard