import {TrashIcon} from "@heroicons/react/outline";
import useStore from "../../store";
import CommandPalette from "./CommandPalette";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function ThreadHeader() {
    const [filterOptions, setFilterOptionsStatus, setIsBulkRemove, isBulkRemove, threadIdToRemove, setDefaultChatThread, defaultChatThread] =
        useStore(state => [state.filterOptions, state.setFilterOptionsStatus, state.setIsBulkRemove,
            state.isBulkRemove, state.threadIdToRemove, state.setDefaultChatThread, state.defaultChatThread])

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
                    <TrashIcon className="w-5 h-5" aria-hidden="true"/>
                </button>

                {
                    threadIdToRemove.length > 0 && (
                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                                onClick={() => setDefaultChatThread(threadIdToRemove)}>
                            <span className="sr-only">Remove</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-radioactive"
                                 width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6"/>
                                <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0"/>
                                <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6"/>
                            </svg>
                        </button>
                    )
                }

            </div>
        </div>
    )
}
