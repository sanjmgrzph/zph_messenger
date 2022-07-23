import {useThreadQuery} from "../../services/ChatThreads";
import {Fragment} from "react";
import MessageCard from "../atoms/MessageCard";
import useStore, {IChatThread, Tab} from "../../store";
import SearchThread from "../atoms/SearchThread";
import ThreadHeader from "../atoms/ThreadHeader";
import CommandPalette from "../atoms/CommandPalette";

// https://tailwindui.com/components/ecommerce/components/category-filters

const Threads = () => {

    const [activeThreadTab, setActiveThreadTab, searchQuery, readUnreadOption, setFilterOptionsStatus] =
        useStore(state => [state.activeThreadTab, state.setActiveThreadTab, state.searchQuery, state.selectedFilterOptionId, state.setFilterOptionsStatus])

    const {isLoading, error, data} = useThreadQuery(activeThreadTab, 'tab')

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

    return (
        <div className='gap-6 w-[20%] flex flex-col py-8'>
            <div className='flex flex-col gap-6 px-6'>

                <CommandPalette/>
                <>
                    <ThreadHeader/>

                    <div
                        className='flex gap-2 bg-gray-100 px-2 py-1.5 text-sm bg-[#f7f7f7] font-medium rounded-3xl justify-between'>
                        {
                            tabs.map((tab, index) => (
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
                    data?.map((thread: IChatThread, index: number) =>
                        <Fragment key={index}>
                            <MessageCard {...thread}/>
                        </Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default Threads