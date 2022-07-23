import Avatar from "./Avatar";

interface IProps {
    name: string
    text: string
    active: boolean
    joined: boolean
}

const CallCard = ({name, text, active = false, joined = false}: IProps) => {
    return (
        <div
            className={`py-3 flex px-4 items-center justify-between rounded-2xl ${active ? 'shadow-sm bg-[#0477fd]' : ''}`}>
            <div className='flex gap-3 items-center justify-around'>
                <div className='flex gap-3 items-center'>
                    <Avatar height='h-10' width='w-10'/>
                    <div>
                        <h3 className={`text-lg font-medium ${active ? 'text-white font-medium' : 'text-[#2b2b2b]'}`}>{name}</h3>
                        <p className={`text-sm font-medium ${active ? 'text-white' : 'text-[#1874dd]'}`}>{text}</p>
                    </div>
                </div>
            </div>

            {
                joined ? <div className='flex justify-center items-center gap-4'>
                    <div className='h-10 w-10 flex justify-center items-center rounded-full bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone"
                             width="20"
                             height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="red"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                    </div>
                    <div className='h-10 w-10 flex justify-center items-center rounded-full border-white border'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus"
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                            <path d="M16 11h6m-3 -3v6"/>
                        </svg>
                    </div>
                </div> : <div
                    className='inline-flex gap-1 text-blue-500 items-center px-3 py-2 border border-[#f1f1f3] border-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus"
                         width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                        <path d="M16 11h6m-3 -3v6"/>
                    </svg>
                    <span className='text-sm font-medium text-[#0477fd]'>Join</span>
                </div>
            }

        </div>
    )
}

export default CallCard