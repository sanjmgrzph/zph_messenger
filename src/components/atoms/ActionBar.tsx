import AvatarGroupStacked from "./AvatarGroupStacked";
import Avatar from "./Avatar";
import useStore from "../../store";

const ActionBar = () => {

    const contributor = useStore(state => state.contributorAvatar)

    return (
        <div className='flex justify-between items-center px-4 py-4 bg-white shadow-sm'>
            <div className='flex gap-3'>
                <Avatar height='h-10' width='w-10'/>
                <div className='leading-3'>
                    <h3 className='text-xl font-black font-bold'>Ui/Ux Team</h3>
                    <span className='text-xs text-[#a9a9a9]'>Arsia is typing...</span>
                </div>
            </div>
            <div className='flex gap-6'>
                <AvatarGroupStacked size={8} contributor={contributor}/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video cursor-pointer"
                     width="32"
                     height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a9a9a9" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/>
                    <rect x="3" y="6" width="12" height="12" rx="2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone cursor-pointer"
                     width="32"
                     height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a9a9a9" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-layout-sidebar-right cursor-pointer"
                     width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1874dd" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <line x1="15" y1="4" x2="15" y2="20"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots cursor-pointer"
                     width="32"
                     height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a9a9a9" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="5" cy="12" r="1"/>
                    <circle cx="12" cy="12" r="1"/>
                    <circle cx="19" cy="12" r="1"/>
                </svg>
            </div>
        </div>
    )
}

export default ActionBar