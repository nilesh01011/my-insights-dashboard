import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,

);

function BarCharts({ barCharts, title }) {
    // const options = {
    //     elements: {
    //         arc: {
    //             borderWidth: 0
    //         }
    //     }
    // };

    const data = {
        labels: barCharts.map((ele) => ele.name),
        datasets: [
            {
                data: barCharts.map((ele) => ele.data),
                backgroundColor: barCharts.map((ele) => ele.bgColor),
                datalabels: {
                    display: false
                },
                border: 0,
                barPercentage: 1
            }
        ]
    };


    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 0,
            },
        },
        responsive: true,
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
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default BarCharts