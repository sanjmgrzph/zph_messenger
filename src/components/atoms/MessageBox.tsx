import Avatar from "./Avatar";

export interface IConversation {
    username: string
    firstname: string
    timestamp: string
    text: string
    role: string
    avatar: string
}

export interface IConversations {
    conversation: IConversation[]
}

const MessageBox = ({conversation}: IConversations) => {
    const {role, avatar, firstname, timestamp} = conversation[0]

    return (
        <div className={`${role === 'sender' && 'flex flex-col items-end'}`}>
            <div className='flex gap-2'>
                <div className={`${role === 'sender' && 'order-2'}`}>
                    <Avatar avatar={avatar}/>
                </div>
                <div className={`flex flex-col gap-2 ${role === 'sender' && 'items-end'}`}>
                    <div className='flex gap-1 items-center'>
                        <h3 className={`text-xl font-medium text-[#2b2b2b] ${role === 'sender' && 'order-3'}`}>{firstname}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className={`icon icon-tabler icon-tabler-point ${role === 'sender' && 'order-2'}`}
                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#c9c9cb"
                             fill="#597e8d"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        <span
                            className={`text-xs font-medium text-[#c9c9cb] ${role === 'sender' && 'order-1'}`}>{timestamp}</span>
                    </div>
                    <div className={`chats flex flex-col gap-0.5 ${role === 'sender' && 'items-end'}`}>
                        {conversation.map((chat, index: number) => (
                            <div key={index}
                                 className={`w-fit px-3 py-2 ${role === 'sender' ? 'rounded-l-3xl bg-blue-200 first:rounded-tr-3xl last:rounded-br-3xl only:rounded-3xl' : 'rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl'}`}>
                                <p>{chat.text}</p>
                            </div>
                        ))}
                        {/*<div
                            className={`w-fit px-3 py-2 ${role === 'sender' ? 'rounded-l-3xl bg-blue-200 first:rounded-tr-3xl last:rounded-br-3xl only:rounded-3xl' : 'rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl'}`}>
                            <p>Are you alright?</p>
                        </div>
                        <div
                            className={`w-fit px-3 py-2 ${role === 'sender' ? 'rounded-l-3xl bg-blue-200 first:rounded-tr-3xl last:rounded-br-3xl only:rounded-3xl' : 'rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl'}`}>
                            <p>Hey, How are you doing?</p>
                        </div>
                        <div
                            className={`w-fit px-3 py-2 ${role === 'sender' ? 'rounded-l-3xl bg-blue-200 first:rounded-tr-3xl last:rounded-br-3xl only:rounded-3xl' : 'rounded-r-3xl bg-[#e4e6eb] first:rounded-tl-3xl last:rounded-bl-3xl only:rounded-3xl'}`}>
                            <p>Hi guys, have you completed your design?</p>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox