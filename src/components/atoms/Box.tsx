import MessageBox from "./MessageBox";
import {Fragment} from "react";

const conversations = [
    [
        {
            username: "mobin",
            firstname: "Mobin",
            timestamp: "15:20", // new Date().getHours() + ":" + new Date().getMinutes()
            text: "Are you alright?",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            username: "mobin",
            firstname: "Mobin",
            timestamp: "15:20",
            text: "Hey, How are you doing?",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            username: "mobin",
            firstname: "Mobin",
            timestamp: "15:21",
            text: "Hi guys, have you completed your design?",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ],
    [
        {
            username: "arshia",
            firstname: "Arshia",
            timestamp: "15:24",
            text: "Yeah! Everything good here.",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        },
        {
            username: "mobin",
            firstname: "Mobin",
            timestamp: "15:25",
            text: "Hey Mahdi, Send your designs.",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        }
    ],
    [
        {
            username: "mahdi",
            firstname: "Mahdi",
            timestamp: "15:24",
            text: "Are my new desings attractive? I would love to know your opinion about it.",
            role: "receiver",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ],
    [
        {
            username: "hana",
            firstname: "Hana",
            timestamp: "15:28",
            text: "Hi Mehdi, your work is really amazing",
            role: "sender",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            username: "hana",
            firstname: "Hana",
            timestamp: "15:28",
            text: "Keep doing it",
            role: "sender",
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ]
]

const Box = () => {
    return (
        <div className='flex flex-col space-y-10 px-6 overflow-auto'>
            <span className='uppercase text-[#d3d3d3] font-medium text-sm mx-auto'>today, 6 jul</span>

            {
                conversations?.map((conversation, index: number) => <Fragment key={index}>
                    <MessageBox conversation={conversation}/>
                </Fragment>)
            }

            {/*<div className='flex gap-2 receiver'>
                <Avatar
                    avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 items-center'>
                        <h3 className='text-xl font-medium text-[#2b2b2b]'>Mobin</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point"
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#c9c9cb"
                             fill="#597e8d"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        <span className='text-xs font-medium text-[#c9c9cb]'>14:24</span>
                    </div>
                    <div className="chats flex flex-col gap-0.5">
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Are you alright?</p>
                        </div>
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Hey, How are you doing?</p>
                        </div>
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Hi guys, have you completed your design?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 receiver'>
                <Avatar
                    avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"/>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 items-center'>
                        <h3 className='text-xl font-medium'>Arshia</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point"
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d"
                             fill="#597e8d"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        <span className='text-xs font-medium text-gray-500'>14:26</span>
                    </div>
                    <div className="chats flex flex-col gap-0.5">
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Yeah! Everything good here.</p>
                        </div>
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Hey Mahdi, Send your designs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 receiver'>
                <Avatar
                    avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 items-center'>
                        <h3 className='text-xl font-medium'>Mahdi</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point"
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d"
                             fill="#597e8d"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        <span className='text-xs font-medium text-gray-500'>14:26</span>
                    </div>
                    <div className="chats flex flex-col gap-0.5">
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb]  first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <div className='flex gap-2 px-2 py-1'>
                                <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-48 w-40 rounded-lg'></div>
                                <div
                                    className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-48 w-40 rounded-lg'></div>
                            </div>
                        </div>
                        <div
                            className='rounded-r-3xl bg-[#e4e6eb] max-w-md first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl w-fit px-3 py-2'>
                            <p>Are my new desings attractive? I would love to know your opinion about it.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-end'>
                <div className='flex gap-2 receiver'>
                    <div className='order-2'>
                        <Avatar
                            avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                    </div>
                    <div className='flex flex-col gap-2 items-end'>
                        <div className='flex gap-1 items-center'>
                            <span className='text-xs font-medium text-gray-500'>14:30</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point"
                                 width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d"
                                 fill="#597e8d"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="4"/>
                            </svg>
                            <h3 className='text-xl font-medium'>Hana</h3>
                        </div>
                        <div className="chats flex flex-col gap-0.5 items-end">
                            <div
                                className='rounded-l-3xl bg-blue-200 first:rounded-tr-3xl last:rounded-br-3xl only:rounded-3xl w-fit px-3 py-2'>
                                <p>Hi Mehdi, your work is really amazing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default Box