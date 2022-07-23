import {Dialog, Transition, Combobox} from '@headlessui/react'
import {Fragment, useEffect, useState} from 'react'

const CommandPalette = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    const people = [
        'Durward Reynolds',
        'Kenton Towne',
        'Therese Wunsch',
        'Benedict Kessler',
        'Katelyn Rohan',
    ]
    const [selectedPerson, setSelectedPerson] = useState('')
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    const keyDown = (evt: any) => {
        if (evt.key === 'k' && (evt.metaKey || evt.ctrlKey)) {
            evt.preventDefault()
            setIsOpen(!isOpen)
        }
    }

    /*useEffect(() => {
        window.addEventListener('keydown', keyDown)
    }, [])*/

    window.addEventListener('keydown', keyDown)

    return (
        <>
            <button onClick={openModal}
                    type="button"
                    className="cursor-pointer bg-white hover:ring-slate-300 md:w-80 md:rounded-lg md:shadow-sm md:ring-1 md:ring-black/5 md:focus:outline-none md:focus:ring-2 md:focus:ring-sky-500">
                <div className="flex h-12 items-center justify-between px-4">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999999"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7"/>
                            <line x1="21" y1="21" x2="15" y2="15"/>
                        </svg>
                        <span className="hidden text-gray-400 md:block"> Quick search... </span>
                    </div>
                    <kbd
                        className="hidden whitespace-nowrap font-poppins font-semibold dark:text-slate-500 md:inline-block"
                    >
                        <abbr title="Control" className="text-slate-300 no-underline dark:text-slate-500">
                            Ctrl
                        </abbr>
                        <abbr className="text-slate-500">K</abbr>
                    </kbd>
                </div>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Combobox value={selectedPerson} onChange={setSelectedPerson} as="div"
                                          className="relative mx-auto max-w-xl divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
                                >
                                    <div className='flex items-center px-4 pointer-events-none'>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-search"
                                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="#999999"
                                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="10" cy="10" r="7"/>
                                            <line x1="21" y1="21" x2="15" y2="15"/>
                                        </svg>
                                        <Combobox.Input onChange={(event) => setQuery(event.target.value)}
                                                        className='h-12 w-full border-0 bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0'
                                                        placeholder="Search thread.."
                                        />
                                    </div>

                                    <Combobox.Options static className="max-h-96 overflow-y-auto py-4 text-sm">
                                        {filteredPeople.map((person) => (
                                            <Combobox.Option key={person} value={person}
                                                             className={({active}) => `relative cursor-default select-none py-2 
                                                             ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`}>
                                                {({selected, active}) => (
                                                    <span
                                                        className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}
                                                    >
                                                        {person}
                                                    </span>
                                                )}

                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                </Combobox>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CommandPalette