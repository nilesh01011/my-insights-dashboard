import React, { useState } from 'react'
import Datepicker from './Datepicker'
import DropdownSelect from './DropdownSelect'

function FilterBox() {
    const businessDetails = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Domain 2"
        },
        {
            id: 3,
            name: "Domain 3"
        },
    ];

    const [businessDetailsValue, setBusinessDetailsValue] = useState('')

    const businessModel = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Model 2"
        },
        {
            id: 3,
            name: "Model 3"
        },
    ];

    const [businessModelValue, setBusinessModelValue] = useState('')

    const location = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "location 2"
        },
        {
            id: 3,
            name: "location 3"
        },
    ];

    const [locationValue, setLocationValue] = useState('');

    const buttonList = [
        {
            id: 1,
            name: 'Apply'
        },
        {
            id: 2,
            name: 'Reset'
        },
        {
            id: 3,
            name: 'Download'
        }
    ]

    return (
        <div className='w-full h-auto flex flex-col'>
            {/* input fields */}
            <div className='w-full h-auto grid xl:grid-cols-5 grid-cols-3 gap-[13px]'>
                {/* from to date */}
                <div className='w-full h-auto flex flex-col gap-[6px]'>
                    {/* title */}
                    <p className='text-[14px] text-[#545454]'>From Date</p>
                    {/* input type */}
                    <Datepicker />
                </div>

                {/* to date */}
                <div className='w-full h-auto flex flex-col gap-[6px]'>
                    {/* title */}
                    <p className='text-[14px] text-[#545454]'>To Date</p>
                    {/* input type */}
                    <Datepicker />
                </div>

                {/* Business Domain */}
                <div className='w-full h-auto flex flex-col gap-[6px]'>
                    {/* title */}
                    <p className='text-[14px] text-[#545454]'>Business Domain</p>
                    {/* input type */}
                    <DropdownSelect position='bottom' placeholder='All' setChangeInput={setBusinessDetailsValue} disable={false} items={businessDetails} mandatory="" />
                </div>


                {/* Business Domain */}
                <div className='w-full h-auto flex flex-col gap-[6px]'>
                    {/* title */}
                    <p className='text-[14px] text-[#545454]'>Brand Model</p>
                    {/* input type */}
                    <DropdownSelect position='bottom' placeholder='All' setChangeInput={setBusinessModelValue} disable={false} items={businessModel} mandatory="" />
                </div>

                {/* Business Domain */}
                <div className='w-full h-auto flex flex-col gap-[6px]'>
                    {/* title */}
                    <p className='text-[14px] text-[#545454]'>Location</p>
                    {/* input type */}
                    <DropdownSelect position='bottom' placeholder='All' setChangeInput={setLocationValue} disable={false} items={location} mandatory="" />
                </div>
            </div>
            {/* buttons */}
            <div className='w-full flex gap-[16px] mt-[15px]'>
                {/* button 1 */}
                {
                    buttonList?.map((ele) => {
                        return (
                            <button key={ele.id} type='button' className='rounded-[4px] p-[6px_16px] h-max border-[1px] border-[#FF3E5B] text-[#FF3E5B] hover:bg-[#FF3E5B] hover:text-white'>{ele.name}</button>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default FilterBox