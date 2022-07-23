import Avatar from "../atoms/Avatar";

const Menu = () => {
    return (
        <div className='flex flex-col h-screen mr-4 w-[5%] bg-white justify-between items-center py-8'>
            <div className='flex flex-col gap-8 justify-center items-center text-[#999999]'>
                <div className='flex flex-col gap-1 items-center'>
                    {/*<HomeIcon className="h-8 w-8 text-slate-400"/>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0477fd" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                    </svg>
                    <p className='text-[#0477fd] font-medium'>Home</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7"/>
                        <line x1="21" y1="21" x2="15" y2="15"/>
                    </svg>
                    <p className='font-medium'>Search</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"/>
                    </svg>
                    <p className='font-medium'>Saves</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="7" x2="20" y2="7"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
                    </svg>
                    <p className='font-medium'>Trash</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checks" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 12l5 5l10 -10"/>
                        <path d="M2 12l5 5m5 -5l5 -5"/>
                    </svg>
                    <p className='font-medium'>Done</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="32"
                         height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <p className='font-medium'>Settings</p>
                </div>
            </div>
            <Avatar
                height='h-14'
                width='w-14'
                avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
        </div>
    )
}

export default Menu