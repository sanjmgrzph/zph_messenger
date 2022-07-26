import {IThread, useThreadQuery} from "../../services/ChatThreads";
import {Fragment, useState} from "react";
import MessageCard from "../atoms/MessageCard";
import useStore, {Tab} from "../../store";
import ThreadHeader from "../atoms/ThreadHeader";

const Threads = () => {

    const [activeThreadTab, setActiveThreadTab, setThreads, setSearchQuery, searchQuery] = useStore(state => [state.activeThreadTab, state.setActiveThreadTab, state.setThreads, state.setSearchQuery, state.searchQuery])

    const username = "sanjmgr"

    let {isLoading, error, data} = useThreadQuery(activeThreadTab, username)

    type TabOption = { name: string, id: Tab }

    const tabs: TabOption[] = [
        {
            "name": "All Chats",
            "id": "ALL_CHATS"
        },
        {
            "name": "My Chats",
            "id": "MY_CHATS"
        },
        {
            "name": "Starred",
            "id": "STARRED"
        },
        {
            "name": "Unread",
            "id": "UNREAD"
        }
    ]

    const [query, setQuery] = useState("");

    data = searchQuery.length ? data?.filter(item => item.message.name.toLowerCase().includes(searchQuery.toLowerCase())) : data

    return (
        <div className='gap-6 w-[20%] flex flex-col py-8'>
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
                           className="block bg-[#f7f7f7] p-3 pl-10 w-full text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-[#999999] rounded-xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Quick search..." required
                           onChange={(evt) => setSearchQuery(evt.target.value)}
                    />
                </div>

                <>
                    <ThreadHeader/>

                    <div
                        className='flex gap-2 bg-gray-100 px-2 py-1.5 text-sm bg-[#f7f7f7] font-medium rounded-3xl justify-between'>
                        {
                            tabs.map((tab: TabOption, index) => (
                                <button
                                    key={index}
                                    className={`px-2 py-1.5 rounded-3xl ${activeThreadTab === tab.id ? 'bg-white text-[#2472c3]' : 'text-[#909090]'}`}
                                    onClick={() => setActiveThreadTab(tab.id)}
                                >
                                    {tab.name}
                                </button>
                            ))
                        }
                    </div>
                </>

            </div>

            <div
                className="flex flex-col space-y-4 px-4 max-h-[74vh] overflow-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 shadow-sm">
                {
                    data!?.length > 0 ? data?.map((thread: IThread, index: number) =>
                        <Fragment key={index}>
                            <MessageCard {...thread}/>
                        </Fragment>
                    ) : (<div className="ml-4">No records found</div>)
                }
            </div>
        </div>
    )
}

export default Threads