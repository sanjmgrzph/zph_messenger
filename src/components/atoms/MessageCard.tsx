import Avatar from "./Avatar";
import useStore from "../../store";
import {memo, useEffect} from "react";
import {IThread} from "../../services/ChatThreads";
import AvatarGroupStacked from "./AvatarGroupStacked";


const MessageCard = ({
                         _id,
                         status,
                         totalUnreadMessage,
                         contributors,
                         message
                     }: IThread) => {

    const [activeMessageThreadId, setActiveMessageThreadId, isBulkRemove, threadIdToRemove, setThreadIdToRemove] =
        useStore(state => [state.activeMessageThreadId, state.setActiveMessageThreadId, state.isBulkRemove, state.threadIdToRemove, state.setThreadIdToRemove])

    const contributor = useStore(state => state.contributorAvatar)

    useEffect(() => console.log(threadIdToRemove), [threadIdToRemove])

    return (
        <div className="flex justify-between items-center gap-2 cursor-pointer focus:shadow-md"
             onClick={() => setActiveMessageThreadId(_id)}>
            {
                isBulkRemove && (
                    <div>
                        <input
                            id={`chat-thread-${_id}`}
                            name='thread'
                            type="checkbox"
                            defaultChecked={false}
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            onClick={() => setThreadIdToRemove(_id)}
                        />
                    </div>
                )
            }

            <div
                className={`shadow-sm hover:bg-[#e4e6eb] ${activeMessageThreadId === _id && 'bg-[#e4e6eb]'} flex items-center px-3 h-16 w-full rounded-lg justify-between`}>
                <div className="flex items-center">
                    <Avatar avatar={message.avatar}/>
                    <div className="pl-2">
                        <h4 className="capitalize font-bold text-lg">{message.name}</h4>
                        <p className="truncate max-w-[12rem]">{message.text}</p>
                    </div>
                </div>

                <div>
                    <span className="text-gray-400 text-sm flex justify-end">12:30</span>
                    {
                        totalUnreadMessage > 0 ? (<div className="flex justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-2"
                                 width="24"
                                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"/>
                                <circle cx="12" cy="12" r="9"/>
                            </svg>
                        </div>) : (contributor.length > 0 && (<AvatarGroupStacked size={4} contributor={contributor}/>))
                    }


                </div>
            </div>
        </div>
    )
}

export default memo(MessageCard)