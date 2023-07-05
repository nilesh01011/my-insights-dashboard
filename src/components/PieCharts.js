import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

function PieCharts({ pieCharts, pieCharts_2, title }) {

    const options = {
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };

    const data = {
        labels: pieCharts.map((ele) => ele.name),
        datasets: [
            {
                label: 'text',
                data: pieCharts.map((ele) => ele.data),
                backgroundColor: pieCharts.map((ele) => ele.bgColor),
                datalabels: {
                    display: false
                },
                border: 0
            }
        ]
    };

    const data_2 = {
        labels: pieCharts_2.map((ele) => ele.name),
        datasets: [
            {
                label: 'text',
                data: pieCharts_2.map((ele) => ele.data),
                backgroundColor: pieCharts_2.map((ele) => ele.bgColor),
                datalabels: {
                    display: false
                },
                border: 0
            }
        ]
    };

    const [isActiveTab, setIsActiveTab] = useState(1);

    return (
        <div className='w-full md:rounded-[20px] rounded-[10px] bg-white h-full'>
            {/* title */}
            <div className='w-full sm:h-[46px] h-max flex items-center justify-between gap-[6px] p-[16px] pt-[20px] rounded-[0.5rem_0.5rem_0_0]'>
                <h3 className={`text-black font-[600] text-[18px]`}>{title}</h3>

                {/* tabs */}
                <div className='flex rounded-[20px]'>
                    <button onClick={() => setIsActiveTab(1)} type='button' className={`p-[5px_15px] rounded-[20px_0px_0px_20px] border-[1px] text-[12px] font-bold ${isActiveTab === 1 ? 'bg-[#FF3E5B] border-[#FF3E5B] text-white' : 'bg-[#F4F4F4] border-[#DEDEDE]'}`}>PV</button>
                    <button onClick={() => setIsActiveTab(2)} type='button' className={`p-[5px_15px] rounded-[0_20px_20px_0px] border-[1px] text-[12px] font-bold ${isActiveTab === 2 ? 'bg-[#FF3E5B] border-[#FF3E5B] text-white' : 'bg-[#F4F4F4] border-[#DEDEDE]'}`}>CV</button>
                </div>
            </div>

            {/* contents */}
            <div className='w-full flex items-center flex-col justify-center px-[20px]'>
                {/* charts */}
                <div className='h-[200px] relative w-full flex items-center justify-center'>
                    {
                        isActiveTab === 1 &&
                        <Pie data={data} options={options} />
                    }

                    {
                        isActiveTab === 2 &&
                        <Pie data={data_2} options={options} />
                    }
                </div>

                {/* legend */}
                <div className='w-[90%] mx-auto grid grid-cols-3 gap-[8px] my-[15px]'>
                    {
                        isActiveTab === 1 &&
                        pieCharts?.map((ele) => {
                            return (
                                <p key={ele.id} className='flex items-center gap-[8px] text-[12px]'>
                                    <span className={`w-[10px] h-[10px] rounded-full`} style={{ backgroundColor: `${ele.bgColor}` }}></span>
                                    {ele.name}
                                </p>
                            )
                        })
                    }

                    {
                        isActiveTab === 2 &&
                        pieCharts_2?.map((ele) => {
                            return (
                                <p key={ele.id} className='flex items-center gap-[8px] text-[12px]'>
                                    <span className={`w-[10px] h-[10px] rounded-full`} style={{ backgroundColor: `${ele.bgColor}` }}></span>
                                    {ele.name}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PieCharts