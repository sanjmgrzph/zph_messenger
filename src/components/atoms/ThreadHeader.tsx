import useStore from "../../store";
import {useEffect} from "react";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function ThreadHeader() {

    const [isBulkRemove, setIsBulkRemove] = useStore(state => [state.isBulkRemove, state.setIsBulkRemove])

    const [threadId, setThreadIdToRemove, setThreadIdToEmpty] = useStore(state => [state.threadIdToRemove, state.setThreadIdToRemove, state.setThreadIdToEmpty])
    const [threads, setThreads] = useStore(state => [state.threads, state.setThreads])

    const removeThread = () => {
        if (threadId.length > 0) {
            setThreads(threads.filter(item => !threadId.includes(item._id)))
            setIsBulkRemove()
            setThreadIdToEmpty()
        }
    }

    useEffect(() => console.log({isBulkRemove}), [isBulkRemove])

    return (
        <div className="relative z-10 flex items-baseline justify-between">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">Messages</h1>

            <div className="flex items-center">
                {/*<Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button
                            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            Filter
                            <ChevronDownIcon
                                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {filterOptions.map((option) => (
                                    <Menu.Item key={option.name}>
                                        {(active) => (
                                            <a
                                                href={option.href}
                                                onClick={() => setFilterOptionsStatus(option)}
                                                className={classNames(
                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {option.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>*/}

                {/*<CommandPalette />*/}

                <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                        onClick={() => setIsBulkRemove()}>
                    <span className="sr-only">Bulk Remove</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-select" width="24"
                         height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <path d="M9 11l3 3l3 -3"/>
                    </svg>
                </button>

                {
                    threadId.length > 0 && (
                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                                onClick={() => removeThread()}>
                            <span className="sr-only">Remove</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash"
                                 width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="4" y1="7" x2="20" y2="7"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
                            </svg>
                        </button>
                    )
                }

            </div>
        </div>
    )
}
