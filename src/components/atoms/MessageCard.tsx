import Avatar from "./Avatar";
import useStore, {IChatThread} from "../../store";
import {memo} from "react";


const MessageCard = ({
                         id,
                         name,
                         text,
                         read,
                         active = false,
                         pin = false,
                         mute = false,
                         check = false,
                         notification = false,
                         time,
                         avatar
                     }: IChatThread) => {

    const [activeMessageThreadId, setActiveMessageThreadId, isBulkRemove, threadIdToRemove, setThreadIdToRemove] =
        useStore(state => [state.activeMessageThreadId, state.setActiveMessageThreadId, state.isBulkRemove, state.threadIdToRemove, state.setThreadIdToRemove])

    return (
        <div className={`${isBulkRemove && 'flex items-center gap-2'}`}>
            {
                isBulkRemove && (
                    <input
                        id={`chat-thread-${id}`}
                        name='thread'
                        type="checkbox"
                        defaultChecked={false}
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        onClick={() => setThreadIdToRemove(id)}
                    />
                )
            }

            <div onClick={() => setActiveMessageThreadId(id)}
                 className={`py-3 rounded-2xl cursor-pointer hover:shadow-sm  ${activeMessageThreadId === id && 'shadow-sm bg-[#0477fd]'}`}>

                <div className='flex gap-3 items-center justify-around'>
                    <div className='flex gap-3 items-center'>
                        <Avatar avatar={avatar}/>
                        <div>
                            <h3 className={`text-lg font-bold font-black ${activeMessageThreadId === id && 'text-white font-medium'}`}>{name}</h3>
                            <p className={`text-sm text-[#a9a9a9] font-medium truncate max-w-[12rem] ${activeMessageThreadId === id && 'text-white'}`}>{text}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-end'>
                        <div className='flex gap-2 justify-center items-center'>
                            {
                                pin ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pin"
                                         width="20"
                                         height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0477fd"
                                         fill="#0477fd"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/>
                                        <line x1="9" y1="15" x2="4.5" y2="19.5"/>
                                        <line x1="14.5" y1="4" x2="20" y2="9.5"/>
                                    </svg> : mute ? <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="icon icon-tabler icon-tabler-video-off"
                                                         width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5"
                                                         stroke="#c9c9cb" fill="none"
                                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="3" y1="3" x2="21" y2="21"/>
                                        <path d="M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946"/>
                                        <path
                                            d="M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1"/>
                                    </svg> : ''
                            }


                            <span
                                className={`text-xs font-medium text-[#c9c9cb] ${activeMessageThreadId === id && 'text-white'}`}>{time}</span>
                        </div>
                        <div className='p-1 rounded-full bg-[#eef8ff]'>
                            {
                                check ?
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-checks"
                                         width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0477fd"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M7 12l5 5l10 -10"/>
                                        <path d="M2 12l5 5m5 -5l5 -5"/>
                                    </svg> : notification ? <svg xmlns="http://www.w3.org/2000/svg"
                                                                 className="icon icon-tabler icon-tabler-number-4"
                                                                 width="16" height="16" viewBox="0 0 24 24"
                                                                 strokeWidth="1.5" stroke="#0477fd" fill="none"
                                                                 strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M15 20v-15l-8 11h10"/>
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-at"
                                             width="16"
                                             height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#0477fd"
                                             fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="4"/>
                                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"/>
                                        </svg>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default memo(MessageCard)