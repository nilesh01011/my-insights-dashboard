import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import InputFields from '../components/InputFields';
import DropdownSelect from '../components/DropdownSelect';
import DropdownSelectTwo from '../components/DropdownSelectTwo';
import { HiOutlinePlus } from 'react-icons/hi';
import VideoExplain from '../components/VideoExplain';

function NewInsights() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate();

    const [collapseOne, setCollapseOne] = useState(true);
    const [collapseTwo, setCollapseTwo] = useState(true);

    const modeInteration = [
        {
            id: 1,
            name: 'Face to Face',
        },
        {
            id: 2,
            name: 'Face to Face 2',
        },
        {
            id: 3,
            name: 'Face to Face 3',
        },
        {
            id: 4,
            name: 'Face to Face 4',
        }
    ];

    const customer = [
        {
            id: 1,
            name: 'Customer',
        },
        {
            id: 2,
            name: 'Customer 2',
        },
        {
            id: 3,
            name: 'Customer 3',
        },
        {
            id: 4,
            name: 'Customer 4',
        }
    ];

    const zone = [
        {
            id: 1,
            name: 'Zone'
        },
        {
            id: 2,
            name: 'Zone 2'
        },
        {
            id: 3,
            name: 'Zone 3'
        }
    ];

    const ro = [
        {
            id: 1,
            name: 'RO'
        },
        {
            id: 2,
            name: 'RO 2'
        },
        {
            id: 3,
            name: 'RO 3'
        }
    ];

    const place = [
        {
            id: 1,
            name: "Place"
        },
        {
            id: 2,
            name: "Place 2"
        },
        {
            id: 3,
            name: "Place 3"
        }
    ];

    const businessDetails = [
        {
            id: 1,
            name: "CV"
        },
        {
            id: 2,
            name: "CV 2"
        },
        {
            id: 3,
            name: "CV 3"
        },
    ];

    const carModel = [
        {
            id: 1,
            name: "XUV 300"
        },
        {
            id: 2,
            name: "XUV 400"
        },
        {
            id: 3,
            name: "XUV 700"
        }
    ];

    const selectCompetitor = [
        {
            id: 1,
            name: "KIA"
        },
        {
            id: 2,
            name: "TATA"
        },
        {
            id: 3,
            name: "Suzuki"
        }
    ];

    const vehicleModel = [
        {
            id: 1,
            name: "Seltos"
        },
        {
            id: 2,
            name: "Seltos 1"
        },
        {
            id: 3,
            name: "Seltos 2"
        }
    ];

    const customerType = [
        {
            id: 1,
            name: 'Owner',
        },
        {
            id: 2,
            name: 'Owner 2',
        },
        {
            id: 3,
            name: 'Owner 3',
        },
        {
            id: 4,
            name: 'Owner 4',
        }
    ];


    const yearPurchase = [
        {
            id: 1,
            name: '2019',
        },
        {
            id: 2,
            name: '2018',
        },
        {
            id: 3,
            name: '2017',
        },
        {
            id: 4,
            name: '2016',
        }
    ];

    const kmDriven = [
        {
            id: 1,
            name: '10000',
        },
        {
            id: 2,
            name: '7500',
        },
        {
            id: 3,
            name: '3000',
        },
        {
            id: 4,
            name: '11000',
        }
    ];

    const [interationInput, setInterationInput] = useState('');
    const [modelInterationInput, setModelInterationInput] = useState('');
    const [whomMeetInput, setWhomMeetInput] = useState('')

    const [locationValue, setLocationValue] = useState('')

    const [locationRO, setLocationRO] = useState('')

    const [locationPlace, setLocationPlace] = useState('')

    const [businessDetailsValue, setBusinessDetailsValue] = useState('')

    const [brandModelValue, setBrandModelValue] = useState('')

    const [selectCompetitorValue, setSelectCompetitorValue] = useState('')

    const [vehicleModelValue, setVehicleModelValue] = useState('')

    const [customerValue, setCustomerValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('interaction inputs:', interationInput);

        console.log('select options value:', modelInterationInput);

        console.log('Whom did you meet value:', whomMeetInput);

        console.log('location Value:', locationValue)

        console.log('locationRO :', locationRO)

        console.log('locationPlace:', locationPlace)

        console.log('businessDetailsValue:', businessDetailsValue)

        console.log('brandModelValue:', brandModelValue)

        console.log('selectCompetitorValue:', selectCompetitorValue)

        console.log('vehicleModelValue:', vehicleModelValue)
    }


    return (
        <div className='w-full h-full'>
            <Header />
            {/* contents */}
            {/* my insights lists */}
            <div className='w-full p-[19px_16px] pb-[6rem] max-w-[1260px] mx-auto '>
                {/* title with filter icons */}
                <div className='w-full flex items-center justify-between mb-[6px]'>
                    {/* title */}
                    <h1 className='font-bold text-[20px] flex items-center gap-[12px]'>
                        New Insights
                    </h1>
                    {/* filter icons */}
                    {/* text-[#FF3E5B] */}
                    <h6 onClick={() => navigate('/my-insights')} className='font-bold cursor-pointer'>
                        Close
                    </h6>
                </div>
                {/* video links */}
                <VideoExplain />
                {/* line */}
                <div className='w-full h-[1px] bg-[#8E8585]/20 mb-[25px] mt-[16px]'></div>
                {/* stepper steps */}
                <div className='mb-[17px]'>
                    <Stepper steps={1} />
                </div>

                <form onSubmit={handleSubmit}>
                    {/* about interaction */}
                    <div className='w-full h-full bg-white rounded-[10px]'>
                        {/* header */}
                        <div onClick={() => setCollapseOne(!collapseOne)} className={`${collapseOne === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                            {/* title */}
                            <h2 className='font-bold'>About Interaction</h2>
                            {/* arrow icons */}
                            <span className={`${collapseOne === true ? 'rotate-0' : 'rotate-180'} transition-all duration-300`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g id="icon/chevron-arrow-down">
                                        <path id="Vector" d="M19.92 16.0475L13.4 9.52751C12.63 8.75751 11.37 8.75751 10.6 9.52751L4.08002 16.0475" stroke="#0B0B0C" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </span>
                        </div>

                        {/* contents */}
                        {
                            collapseOne === true &&
                            <div className='p-[16px] flex flex-col gap-[16px]'>
                                {/* Interaction Title */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Interaction Title<span className='text-[#FF3E5B]'>*</span></h6>
                                    {/* input fields */}
                                    <InputFields setInterationInput={setInterationInput} placeholder='Ex. XUV 700 intender' />
                                </div>
                                {/* Mode of Interaction */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Mode of Interaction</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setModelInterationInput} items={modeInteration} disable={false} placeholder="Face to Face" mandatory="" />
                                </div>
                                {/* Whom did you meet? */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Whom did you meet?</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setWhomMeetInput} items={customer} disable={false} placeholder="Customer" mandatory="" />
                                </div>
                                {/* Select Competitor */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Select Competitor</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setSelectCompetitorValue} items={selectCompetitor} disable={false} placeholder="KIA" mandatory="" />
                                </div>
                                {/* Vehicle Model/Variant */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Vehicle Model/Variant</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setVehicleModelValue} items={vehicleModel} disable={false} placeholder="Seltos" mandatory="" />
                                </div>

                                {/* Customer Type */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Customer Type</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setCustomerValue} items={customerType} disable={false} placeholder="Owner" mandatory="" />
                                </div>
                                {/* Year of Purchase */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Year of Purchase</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setModelInterationInput} items={yearPurchase} disable={false} placeholder="2019" mandatory="" />
                                </div>
                                {/* Km Driven */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Km Driven</h6>
                                    {/* input fields */}
                                    <DropdownSelect setChangeInput={setWhomMeetInput} items={kmDriven} disable={false} placeholder="10000" mandatory="" />
                                </div>
                            </div>
                        }
                    </div>

                    {/* Additional Details */}
                    <div className='w-full h-full bg-white rounded-[10px] mt-[20px]'>
                        {/* header */}
                        <div onClick={() => setCollapseTwo(!collapseTwo)} className={`${collapseTwo === true && 'pb-0'} w-full p-[16px] cursor-pointer flex items-center justify-between`}>
                            {/* title */}
                            <h2 className='font-bold'>Additional Details</h2>
                            {/* arrow icons */}
                            <span className={`${collapseTwo === true ? 'rotate-0' : 'rotate-180'} transition-all duration-300`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g id="icon/chevron-arrow-down">
                                        <path id="Vector" d="M19.92 16.0475L13.4 9.52751C12.63 8.75751 11.37 8.75751 10.6 9.52751L4.08002 16.0475" stroke="#0B0B0C" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </span>
                        </div>

                        {/* contents */}
                        {
                            collapseTwo === true &&
                            <div className='p-[16px] flex flex-col gap-[16px]'>
                                {/* Location */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Location<span className='text-[#FF3E5B]'>*</span></h6>

                                    <div className='flex gap-[12px] flex-col'>
                                        <div className='w-full flex items-center gap-[12px]'>
                                            {/* input fields */}
                                            <DropdownSelectTwo setChangeInput={setLocationValue} disable={false} items={zone} placeholder="Zone" mandatory="" />
                                            {/* input fields */}
                                            <DropdownSelectTwo setChangeInput={setLocationRO} disable={false} items={ro} placeholder="Ro" mandatory="" />
                                        </div>
                                        {/* input fields */}
                                        <DropdownSelectTwo setChangeInput={setLocationPlace} disable={false} items={place} placeholder="Place" mandatory="" />
                                    </div>
                                </div>
                                {/* Mode of Interaction */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Business Division</h6>
                                    {/* input fields */}
                                    <DropdownSelectTwo setChangeInput={setBusinessDetailsValue} disable={false} items={businessDetails} placeholder="CV" mandatory="" />
                                </div>
                                {/* Whom did you meet? */}
                                <div className='flex w-fill flex-col gap-[5px]'>
                                    {/* title */}
                                    <h6>Brand Model</h6>
                                    {/* input fields */}
                                    <DropdownSelectTwo setChangeInput={setBrandModelValue} disable={false} items={carModel} placeholder="XUV 300" mandatory="" />
                                </div>
                            </div>
                        }
                    </div>

                    {/* fixed button in button */}
                    <div className='fixed bottom-0 left-0 right-0 w-full h-[62px] p-[10px_16px] flex items-center justify-center bg-white' style={{ boxShadow: ' 0px 0px 8px 0px rgba(78, 78, 78, 0.25)' }}>

                        <button type='submit' onClick={() => navigate('/insight-details')} className='xs:w-[328px] w-full h-full p-[15px_30px] bg-[#FF3E5B] text-white font-semibold rounded-[5px] flex items-center justify-center'>
                            Next
                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewInsights