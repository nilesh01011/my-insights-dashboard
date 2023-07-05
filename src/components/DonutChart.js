import React from 'react'
import {
    Chart as ChartJS,
    Tooltip,
    elements,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

ChartJS.register(
    elements,
    Tooltip
);

function DonutChart({ title, doughnutData, }) {

    const options = {
        title: {
            display: true,
            text: "Test chart",
            position: "top"
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        plugins: {
            datalabels: {
                anchor: "center",
                align: "center",
                color: '#000',
                font: {
                    weight: "bold",
                }
            }
        },
        cutout: "60%",
    };

    const data = {
        labels: doughnutData.map((ele) => ele.name),
        datasets: [
            {
                label: 'Data',
                data: doughnutData.map((ele) => ele.data),
                backgroundColor: doughnutData.map((ele) => ele.bgColor),
                datalabels: {
                    display: false
                },
            }
        ]
    };

    return (
        <div className='w-full md:rounded-[20px] rounded-[10px] bg-white h-full'>
            {/* title */}
            <div className='w-full sm:h-[46px] h-max flex items-center gap-[6px] p-[16px] pt-[20px] rounded-[0.5rem_0.5rem_0_0]'>
                <h3 className={`text-black font-[600] text-[18px]`}>{title}</h3>
            </div>

            {/* contents */}
            <div className='w-full flex items-center flex-col justify-center px-[20px]'>
                {/* charts */}
                <div className='h-[200px] relative w-full flex items-center justify-center'>
                    <div className='flex items-center flex-col justify-center absolute'>
                        {/* text */}
                        <p className='text-[14px]'>Total</p>
                        {/* title amount */}
                        <h6 className='text-[16px] font-bold'>86</h6>
                    </div>
                    <Doughnut data={data} options={options} />
                </div>

                {/* legend */}
                <div className='w-full flex items-center justify-center gap-[20px] my-[15px]'>
                    <p className='flex items-center gap-[8px]'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#14C9C9]'></span>
                        PV
                    </p>

                    <p className='flex items-center gap-[8px]'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#F7BA1E]'></span>
                        CV
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DonutChart