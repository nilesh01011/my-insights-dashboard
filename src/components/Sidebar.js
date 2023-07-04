import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar({ isOpenSidebar, setIsOpenSidebar }) {
    const router = useLocation();

    const navLinks = [
        {
            id: 1,
            name: 'Home',
            links: '/'
        },
        {
            id: 2,
            name: 'My Insights',
            links: '/my-insights'
        },
        {
            id: 3,
            name: 'Insights Dashboard',
            links: '/insights-dashboard'
        },
        {
            id: 4,
            name: 'Reports',
            links: '#',
            tooltip: true
        },
        // {
        //     id: 5,
        //     name: 'Ideas Generated',
        //     links: '#'
        // }
    ];

    return (
        <>
            {/* overflow */}
            {
                isOpenSidebar === true &&
                <div onClick={() => setIsOpenSidebar(false)} className='w-full h-screen fixed top-[64px] left-0 right-0 bottom-0 bg-black/80 z-[9999] cursor-pointer'>
                </div>
            }

            {/* sidebar contents */}
            <div className={`fixed top-[64px] ${isOpenSidebar === true ? '-right-[1px]' : '-right-[200%]'} transition-all duration-500 md:w-[330px] w-[80%] h-screen bg-white z-[9999] p-[12px_20px]`}>
                <div className='h-[90%] flex flex-col justify-between'>
                    {/* nav links */}
                    <div className='w-full h-full flex flex-col gap-[17px]'>
                        {
                            navLinks?.map((ele) => {
                                return (
                                    <div key={ele.id} className='relative group cursor-pointer z-[2]'>
                                        <Link to={ele?.links} className={`font-bold text-[20px] ${ele.links === router.pathname ? 'text-[#FF3E5B]' : 'text-black'}`}>{ele?.name}</Link>
                                        {
                                            ele.tooltip === true &&
                                            <div className='group-hover:block hidden w-max h-max p-[0.5rem_1.2rem] shadow-lg bg-[#FF3E5B] rounded-[10px] text-white absolute md:right-[15%] right-[25%] -bottom-[10%]'>
                                                Coming Soon...

                                                <span className='absolute border-[9px] inner-block top-1/2 right-[99%] -translate-y-1/2 border-t-transparent border-b-transparent border-l-0 border-r-[#FF3E5B] shadow-2xl'></span>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* logout button */}
                    <button onClick={() => setIsOpenSidebar(false)} type='button' aria-label='logout' className='p-[10px] rounded-[6px] font-bold flex gap-[5px] border-[1px] border-[#635D5D] text-[#FF3E5B]'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.40002 3.9C2.40002 3.07157 3.0716 2.4 3.90002 2.4H15.6C16.4285 2.4 17.1 3.07157 17.1 3.9V6.13043C17.1 6.46181 16.8314 6.73043 16.5 6.73043C16.1687 6.73043 15.9 6.46181 15.9 6.13043V3.9C15.9 3.73431 15.7657 3.6 15.6 3.6H3.90002C3.73434 3.6 3.60002 3.73431 3.60002 3.9V20.1C3.60002 20.2657 3.73434 20.4 3.90002 20.4H15.6C15.7657 20.4 15.9 20.2657 15.9 20.1V17.8696C15.9 17.5382 16.1687 17.2696 16.5 17.2696C16.8314 17.2696 17.1 17.5382 17.1 17.8696V20.1C17.1 20.9284 16.4285 21.6 15.6 21.6H3.90002C3.0716 21.6 2.40002 20.9284 2.40002 20.1V3.9ZM17.2555 8.91876C17.466 8.66288 17.8441 8.62614 18.1 8.83669L21.3813 11.5367C21.5198 11.6507 21.6 11.8206 21.6 12C21.6 12.1794 21.5198 12.3493 21.3813 12.4633L18.1 15.1633C17.8441 15.3739 17.466 15.3371 17.2555 15.0812C17.0449 14.8254 17.0817 14.4472 17.3375 14.2367L19.3266 12.6H12C11.6687 12.6 11.4 12.3314 11.4 12C11.4 11.6686 11.6687 11.4 12 11.4H19.3266L17.3375 9.76331C17.0817 9.55276 17.0449 9.17464 17.2555 8.91876Z" fill="#FF3E5B" />
                            </svg>
                        </span>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar