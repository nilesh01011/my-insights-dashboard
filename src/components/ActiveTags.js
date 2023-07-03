import React from 'react'

function ActiveTags({ item, isSelectedTag, setIsSelectedTag }) {
    const isActive = isSelectedTag.includes(item);

    const handleClicks = () => {
        if (isActive) {
            setIsSelectedTag(isSelectedTag.filter((ele) => ele !== item));

        } else {
            if (isSelectedTag.includes(item)) {
                setIsSelectedTag(isSelectedTag.filter((ele) => ele !== item));
            } else {
                setIsSelectedTag((prevActiveItems) => [...prevActiveItems, item])
            }
        }
    }
    return (
        <span onClick={handleClicks} className={`border-[1px] ${isActive ? 'border-[#FF3E5B] text-[#FF3E5B]' : 'border-[#8E8585] text-[#8E8585]'} bg-transparent p-[8px_18px] rounded-full font-[600] cursor-pointer`}>{item}</span>
    )
}

export default ActiveTags