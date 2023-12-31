import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
import NotificationSidebar from './NotificationSidebar';

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

function Header() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const location = useLocation();

    // const [showNotification, setShowNotification] = useState(false)

    // useEffect(() => {
    //     if (location.pathname === '/') {
    //         setShowNotification(true)
    //     } else {
    //         setShowNotification(false)
    //     }
    // }, [location])

    // notification
    const [isOpenNotificationsBar, setIsOpenNotificationsBar] = useState(false);

    let domNode = useClickOutSide(() => {
        setIsOpenNotificationsBar(false)
    });

    const notificationsItems = [
        {
            id: 1,
            title: 'Smart Alert from ProMech!',
            text: 'Stock up your inventory with Brake Pad Kit (Part No:0603BAB0080KT) for XUV700 model as five customers have been alerted with brake pad replacement request and they are likely to send their vehicle for service in the coming week.'
        },
        // {
        //     id: 2,
        //     text: 'Part request received from Rahul Patel - XUV700 | MH02RA2419 for Brake Pad Kit'
        // },
        // {
        //     id: 3,
        //     text: 'Part request received from Kirtan Panchal - XUV700 | MH01GH7689 for Brake Pad Kit'
        // },
        // {
        //     id: 4,
        //     text: 'Part request received from Jay Parekh - XUV700 | MH02AG1122 for Brake Pad Kit'
        // },
        // {
        //     id: 5,
        //     text: 'Part request received from Sahrdul Rao - XUV700 | MH04GH6781 for Brake Pad Kit'
        // }
    ]

    return (
        <>
            <div className='w-full bg-white z-[99999] sticky top-0'>
                <div className='w-full max-w-[1260px] mx-auto h-[64px] p-[12px_16px] flex items-center justify-between'>
                    {/* logo */}
                    <div className=''>
                        <Link to='/'>
                            <img src='./images/Logo.svg' alt='logo' className='h-[40px] w-full object-contain' />
                        </Link>
                    </div>
                    {/* right side */}
                    <div className='flex items-center gap-[24px]'>
                        {/* notification icons */}

                        <div ref={domNode} className={`${location.pathname === '/' ? 'block' : 'hidden'}`}>
                            <div onClick={() => setIsOpenNotificationsBar(!isOpenNotificationsBar)} className='relative cursor-pointer'>
                                {/* icons */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.25222 2.09071C9.42805 1.25428 10.1472 0.600098 11.0486 0.600098C11.9607 0.600098 12.6863 1.26995 12.8511 2.12066C15.7298 2.98796 17.8114 5.75089 17.8114 8.98819V13.6356C17.8114 13.9643 17.9369 14.2743 18.1523 14.4988L21.132 17.6051C21.6771 18.1734 21.3447 19.2334 20.4529 19.2334H13.7035C13.4213 20.461 12.3575 21.4001 11.0486 21.4001H10.7517C9.44286 21.4001 8.37905 20.461 8.09684 19.2334H1.54797C0.656167 19.2334 0.323775 18.1734 0.868944 17.6051L3.84863 14.4988C4.06399 14.2743 4.18949 13.9643 4.18949 13.6356V8.98819C4.18949 5.71264 6.32058 2.92274 9.25222 2.09071ZM11.0005 3.1387C7.97485 3.17992 5.48949 5.75803 5.48949 8.98819V13.6356C5.48949 14.292 5.23961 14.9267 4.78678 15.3988L2.35538 17.9334H19.6455L17.2141 15.3988C16.7613 14.9267 16.5114 14.292 16.5114 13.6356V8.98819C16.5114 5.75803 14.0261 3.17992 11.0005 3.1387ZM9.45992 19.2334C9.69291 19.7543 10.1961 20.1001 10.7517 20.1001H11.0486C11.6042 20.1001 12.1074 19.7543 12.3404 19.2334H9.45992Z" fill={`${isOpenNotificationsBar === true ? '#FF3E5B' : `black`}`} />
                                </svg>

                                {/* notification count */}
                                {
                                    isOpenNotificationsBar === true ? '' : (
                                        <span className='absolute -top-[2px] -right-[4px] bg-[#FF3E5B] text-white text-[10px] flex items-center justify-center rounded-full w-[1rem] h-[1rem]'>1</span>
                                    )
                                }

                            </div>

                            <NotificationSidebar isOpenNotificationsBar={isOpenNotificationsBar} setIsOpenNotificationsBar={setIsOpenNotificationsBar} />
                        </div>

                        {/* sidebar icons */}
                        {/* sidebar button */}
                        <button onClick={() => setIsOpenSidebar(!isOpenSidebar)} aria-label="sidebar button" type='button' className='sidebar-btn w-[28px] flex group items-center flex-col gap-[6px] cursor-pointer'>
                            <span className={`w-full h-[1.5px] rounded-[1px] bg-black ${isOpenSidebar === true ? 'relative top-1 rotate-45' : ''} transition-all duration-300 `}></span>
                            <span className={`w-full h-[1.5px] rounded-[1px] bg-black ${isOpenSidebar === true && 'hidden'} transition-all duration-300`}></span>
                            <span className={`w-full h-[1.5px] rounded-[1px] bg-black ${isOpenSidebar === true ? 'relative bottom-1 -rotate-45' : ''} transition-all duration-300 `}></span>
                        </button>
                    </div>
                </div>
            </div>

            <Sidebar setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
        </>
    )
}

export default Header