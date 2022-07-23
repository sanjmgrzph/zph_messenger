import useStore from "../../store";

const SearchThread = () => {

    const setSearchQuery = useStore(state => state.setSearchQuery)

    return (
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
                   placeholder="Search Message Threads..." required
                   onChange={(evt) => setSearchQuery(evt.target.value)}
            />
        </div>
    )
}

export default SearchThread