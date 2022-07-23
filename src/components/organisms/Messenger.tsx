import MessageCard from "../atoms/MessageCard";
import useStore from "../../store";
import {IChatThread, useChatThreadQuery} from "../../services/ChatThreads";
import theme from "tailwindcss/defaultTheme";
import {Fragment} from "react";

const Messenger = () => {

    const setActiveThreadTab = useStore(state => state.setActiveThreadTab)
    const activeThreadTab = useStore(state => state.activeThreadTab)

    const {isLoading, error, data} = useChatThreadQuery(activeThreadTab)

    return (
        <div className='gap-6 flex flex-col'>
            <div className='flex flex-col gap-6 px-6'>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7"/>
                            <line x1="21" y1="21" x2="15" y2="15"/>
                        </svg>
                    </div>
                    <input type="search" id="message_threads"
                           className="block bg-[#f7f7f7] p-3 pl-10 w-full text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-[#999999] rounded-3xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search Message Threads..." required/>
                </div>

                {/*<div className='flex items-center justify-between'>*/}
                    <h3 className='font-medium text-xl text-black'>Messages</h3>
                    {/*<span className='text-xs flex justify-center items-center gap-1 text-[#0477fd] font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus"
                             width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0477fd" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="4" y="4" width="16" height="16" rx="2"/>
                          <line x1="9" y1="12" x2="15" y2="12"/>
                          <line x1="12" y1="9" x2="12" y2="15"/>
                        </svg>
                        New message</span>*/}
                {/*</div>*/}

                <div
                    className='flex gap-4 bg-gray-100 px-2 py-1.5 text-sm bg-[#f7f7f7] font-medium rounded-3xl justify-between'>
                    <button
                        className={`px-4 py-1.5 rounded-3xl  ${activeThreadTab === 'all_chats' ? 'bg-white text-[#2472c3]' : 'text-[#909090]'}`}
                        onClick={() => setActiveThreadTab("all_chats")}>All Chats
                    </button>
                    <button
                        className={`px-4 py-1.5 rounded-3xl  ${activeThreadTab === 'my_chats' ? 'bg-white text-[#2472c3]' : 'text-[#909090]'}`}
                        onClick={() => setActiveThreadTab("my_chats")}>My Chats
                    </button>
                    <button
                        className={`px-4 py-1.5 rounded-3xl  ${activeThreadTab === 'starred' ? 'bg-white text-[#2472c3]' : 'text-[#909090]'}`}
                        onClick={() => setActiveThreadTab("starred")}>Starred
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-4 px-4 max-h-[23rem] overflow-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                {
                    data?.map((thread: IChatThread, index:number) =>
                        <Fragment key={index}>
                            <MessageCard {...thread}/>
                        </Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default Messenger