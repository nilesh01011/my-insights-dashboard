import React, { useEffect, useRef, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function NotificationSidebar({ isOpenNotificationsBar, setIsOpenNotificationsBar }) {
    // const router = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const notificationList = [
        {
            id: 1,
            title: 'New insight added',
            isActive: true,
            date: '21 Nov 2022',
            time: '12:19PM'
        },
        {
            id: 2,
            title: 'XUV 700',
            isActive: false,
            date: '21 Nov 2022',
            time: '12:19PM',
            text: 'Strengthening the image of M&M as leaders in Safe..',
        }
    ];

    const [notification, setNotification] = useState(notificationList);

    const handleClearNotification = () => {
        const clear = notificationList.map((ele) => {
            if (ele.isActive === true) {
                return { ...ele, isActive: false }
            }

            return ele
        });

        setNotification(clear)
    };

    // useEffect(() => {
    //     if (isOpenNotificationsBar === false) {
    //         setNotification(notificationList)
    //     } else {
    //         setNotification([])
    //     }
    // }, [isOpenNotificationsBar, notificationList]);

    let domNode = useClickOutSide(() => {
        setIsOpenNotificationsBar(false)
    });

    return (
        <>
            {/* overflow */}
            {
                isOpenNotificationsBar === true &&
                <div onClick={() => setIsOpenNotificationsBar(false)} className='w-full h-screen fixed top-[64px] left-0 right-0 bottom-0 bg-black/80 z-[9999] cursor-pointer'>
                </div>
            }

            {/* sidebar contents */}
            <div ref={domNode} className={`fixed top-[64px] ${isOpenNotificationsBar === true ? '-right-[1px]' : '-right-[200%]'} transition-all duration-500 md:w-[330px] w-[80%] h-screen bg-white z-[9999] p-[12px_20px]`}>
                {/* head */}
                <div className='w-full flex items-center justify-between'>
                    <h2 className='text-[20px] font-bold'>Notifications</h2>
                    {/* icons */}
                    <span className='cursor-pointer' onClick={() => setIsOpenNotificationsBar(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#342C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#342C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>

                {/* notifications contents */}
                <div className='w-full mt-[10px]'>
                    {/* clear button */}
                    <div className='w-full flex items-center justify-end mb-[4px]'>
                        <button onClick={handleClearNotification} type='button' className='text-[14px] text-[#FF3E5B]'>Clear all</button>
                    </div>
                    {/* notification list */}
                    <div className='w-full flex items-center flex-col gap-[12px]'>
                        {
                            notification?.map((ele) => {
                                return (
                                    <div key={ele.id} className={`w-full h-max rounded-[10px] p-[10px] bg-[#F1F1F1] ${ele.isActive === true ? 'border-[1px] border-[#FF3E5B]' : ''}`}>
                                        {/* title */}
                                        <div className='w-full'>
                                            <h1 className='text-[16px] font-bold mb-[5px]'>{ele.title}</h1>
                                            {/* text */}
                                            {
                                                ele.text &&
                                                <p className='text-[12px] mb-[10px]'>{ele.text}</p>
                                            }

                                            {/* footer side */}
                                            <div className='w-full h-max flex items-center justify-between'>
                                                {/* left side */}
                                                <p>
                                                    {
                                                        ele.isActive === true ? (
                                                            <span className='w-[8px] h-[8px] rounded-full bg-[#FF3E5B] block'></span>
                                                        ) : (
                                                            <span>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2796 4.11394C14.4376 4.26835 14.4405 4.5216 14.2861 4.67959L6.46708 12.6796C6.39134 12.7571 6.2874 12.8005 6.17903 12.8C6.07067 12.7995 5.96717 12.755 5.8922 12.6767L1.7112 8.3131C1.55837 8.15359 1.56378 7.90038 1.72329 7.74754C1.8828 7.59471 2.13601 7.60012 2.28885 7.75963L6.18388 11.8248L13.714 4.12041C13.8684 3.96243 14.1216 3.95953 14.2796 4.11394Z" fill="#635D5D" />
                                                                </svg>
                                                            </span>
                                                        )
                                                    }
                                                </p>
                                                {/* right side */}
                                                <p className='flex items-center gap-[4px] text-[12px] text-[#8E8585]'>
                                                    <span>{ele.date}</span>
                                                    <span>{ele.time}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationSidebar