import React, { useState } from 'react'

function VideoExplain() {
    const [isOpenVideoBanner, setIsOpenVideoBanner] = useState(false);

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <>
            <div className='flex items-center justify-end w-full'>
                <button onClick={() => setIsOpenVideoBanner(true)} type='button' className='text-[#FF3E5B] text-[14px]'>See how to add insight </button>
            </div>

            {/* overflow */}
            {
                isOpenVideoBanner === true &&
                <div className='w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[999998]'>
                </div>
            }

            {/* video contents */}
            <div className={`w-full h-full z-[999999] py-[65px] px-[25px] max-w-[1260px] mx-auto fixed top-0 left-0 right-0 bottom-0 ${isOpenVideoBanner === true ? 'block' : 'hidden'} transition-all duration-300`}>
                {/* title and cancel icons */}
                <div className='w-full flex items-center justify-between'>
                    {/* title */}
                    <h1 className='text-[20px] font-bold text-white z-[999999]'>How to add insight</h1>
                    {/* icons */}
                    <button onClick={() => setIsOpenVideoBanner(false)} aria-label="sidebar button" type='button' className='sidebar-btn w-[28px] z-[999999] flex group items-center flex-col gap-[6px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.519658C0.512563 0.226764 0.987437 0.226764 1.28033 0.519658L12 11.2393L22.7197 0.519658C23.0126 0.226765 23.4874 0.226765 23.7803 0.519658C24.0732 0.812552 24.0732 1.28743 23.7803 1.58032L13.0607 12.3L23.7803 23.0197C24.0732 23.3126 24.0732 23.7874 23.7803 24.0803C23.4874 24.3732 23.0126 24.3732 22.7197 24.0803L12 13.3606L1.28033 24.0803C0.987438 24.3732 0.512564 24.3732 0.219671 24.0803C-0.0732226 23.7874 -0.0732226 23.3126 0.219671 23.0197L10.9393 12.3L0.21967 1.58032C-0.0732233 1.28742 -0.0732233 0.812551 0.21967 0.519658Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {/* video images */}
                <div id='animationShow' className={`w-full h-full flex items-center justify-center ${isOpenVideoBanner === true ? 'animatedShow' : ''}`}>
                    {/* thumbnail */}
                    <div className='w-max h-max cursor-pointer group'>
                        {/* thumbnail */}
                        {
                            isVideoPlaying === false &&
                            <div onClick={() => { setIsVideoPlaying(true) }} className='relative w-auto h-auto'>
                                {/* thumbnail images */}
                                <img src='./thumbnail.png' alt='thumbnail-images' className='1x1:w-[430px] md:w-[400px] w-[360px] h-[280px] object-cover rounded-[10px]' />
                                {/* video icons */}
                                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <img src='./videoIcons.svg' alt='videoIcons-images' className='h-[95px] object-contain rounded-[10px]' />
                                </span>
                            </div>
                        }
                        {/* video */}
                        {
                            isVideoPlaying === true &&
                            <div className='w-max h-full'>
                                <video onClick={() => setIsVideoPlaying(false)} autoPlay muted loop className='1x1:w-[430px] md:w-[400px] w-[360px] object-cover rounded-[10px]' style={{ height: '280px' }}>
                                    <source src='./xuv700_video.mp4'></source>
                                </video>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoExplain