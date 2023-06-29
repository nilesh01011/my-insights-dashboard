import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

function FloatingButton() {
    const navigate = useNavigate();
    return (
        <div className='fixed right-[16px] bottom-[36px]'>
            <button type='button' onClick={() => navigate('/interaction-details')} className='w-[48px] h-[48px] rounded-full bg-[#FF3E5B] flex items-center justify-center' style={{ boxShadow: "0px 3px 10px 0px rgba(78, 78, 78, 0.50)" }}>
                <HiOutlinePlus size={26} className='text-white' />
            </button>
        </div>
    )
}

export default FloatingButton