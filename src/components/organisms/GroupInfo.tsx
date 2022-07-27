import AvatarGroupStacked from "../atoms/AvatarGroupStacked";
import Avatar from "../atoms/Avatar";
import useStore from "../../store";

const GroupInfo = () => {

    const contributor = useStore(state => state.contributorAvatar)

    return (
        <div className='bg-white w-[20%] flex flex-col gap-4 py-8 px-6 shadow-sm'>
            <div className="flex justify-between items-center">
                <h3 className='text-xl text-gray-500 font-medium'>Group Info</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24"
                     height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M10 10l4 4m0 -4l-4 4"/>
                </svg>
            </div>

            <div className='flex gap-3 mt-4 mb-2'>
                <div>
                    <Avatar height='h-14' width='w-14'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-bold'>Ui/Ux Team</h3>
                    <div className='flex'>
                        <span className='text-sm text-gray-500'>12 Members</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point"
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d"
                             fill="#597e8d"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        <span className='text-sm text-green-500'>7 Online</span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='text-base text-gray-500 my-4 flex flex-col'>
                <p>In this group, we answer each other's questions and help and support each other in the path of
                    growth</p>
                <span className='text-blue-700 font-medium pt-8'>@uiux_designers</span>
            </div>

            <hr/>

            <div className="flex justify-between my-4 items-center">
                <h3 className='text-gray-500 text-base font-medium'>Notifications</h3>
                <div className='flex py-1 px-2 bg-gray-200 justify-center items-center gap-1 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-off" width="16"
                         height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="white"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="3" y1="3" x2="21" y2="21"/>
                        <path
                            d="M17 17h-13a4 4 0 0 0 2 -3v-3a7 7 0 0 1 1.279 -3.716m2.072 -1.934c.209 -.127 .425 -.244 .649 -.35a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3"/>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                    </svg>
                    <div className='bg-white px-1 py-0.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="16"
                             height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                        </svg>
                    </div>
                </div>
            </div>


            <hr/>

            <div className='flex justify-between py-4 items-center'>
                <h3 className='text-gray-500 text-base font-medium'>Members</h3>
                <AvatarGroupStacked size={8} contributor={contributor}/>
            </div>

            <hr/>

            <div
                className='flex gap-4 my-4 bg-gray-100 px-2 py-1.5 text-sm text-gray-500 rounded-3xl justify-between'>
                <div className='bg-white px-4 py-1.5 font-medium text-blue-700 rounded-3xl'>Media</div>
                <div className='px-4 py-1.5 rounded-3xl'>Files</div>
                <div className='px-4 py-1.5 rounded-3xl'>Voice</div>
                <div className='px-4 py-1.5 rounded-3xl'>Links</div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                </div>
                <div className='flex gap-2'>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                    <div
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-28 w-28 rounded-lg'></div>
                </div>

            </div>

        </div>
    )

}

export default GroupInfo