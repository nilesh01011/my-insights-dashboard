import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

function PieCharts({ pieCharts, title }) {

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

    return (
        <div className='w-full md:rounded-[20px] rounded-[10px] bg-white h-full'>
            {/* title */}
            <div className='w-full sm:h-[46px] h-max flex items-center gap-[6px] p-[16px] rounded-[0.5rem_0.5rem_0_0]'>
                <h3 className={`text-black font-[600] text-[18px]`}>{title}</h3>
            </div>

            {/* contents */}
            <div className='w-full flex items-center flex-col justify-center px-[20px]'>
                {/* charts */}
                <div className='h-[200px] relative w-full flex items-center justify-center'>
                    <Pie data={data} options={options} />
                </div>

                {/* legend */}
                <div className='w-[90%] mx-auto grid grid-cols-3 gap-[8px] my-[15px]'>
                    {
                        pieCharts?.map((ele) => {
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