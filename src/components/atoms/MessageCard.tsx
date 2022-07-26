import Avatar from "./Avatar";
import useStore from "../../store";
import {memo} from "react";
import {IThread} from "../../services/ChatThreads";


const MessageCard = ({
                         _id,
                         status,
                         totalUnreadMessage,
                         contributors,
                         message
                     }: IThread) => {

    const [activeMessageThreadId, setActiveMessageThreadId, isBulkRemove, threadIdToRemove, setThreadIdToRemove] =
        useStore(state => [state.activeMessageThreadId, state.setActiveMessageThreadId, state.isBulkRemove, state.threadIdToRemove, state.setThreadIdToRemove])

    return (
        <div className={`${isBulkRemove && 'flex items-center gap-2'}`}>
            {
                isBulkRemove && (
                    <input
                        id={`chat-thread-${_id}`}
                        name='thread'
                        type="checkbox"
                        defaultChecked={false}
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        onClick={() => setThreadIdToRemove(_id)}
                    />
                )
            }

            <div onClick={() => setActiveMessageThreadId(_id)}
                 className={`py-3 rounded-2xl cursor-pointer hover:shadow-sm  ${activeMessageThreadId === _id && 'shadow-sm bg-[#0477fd]'}`}>

                <div className='flex gap-3 items-center justify-around'>
                    <div className='flex gap-3 items-center'>
                        <Avatar avatar={message.avatar}/>
                        <div>
                            <h3 className={`text-lg font-bold font-black ${activeMessageThreadId === _id && 'text-white font-medium'}`}>{message.name}</h3>
                            <p className={`text-sm text-[#a9a9a9] font-medium truncate max-w-[12rem] ${message.receivers.length < 1 && 'text-black'} ${activeMessageThreadId === _id && 'text-white'}`}>{message.text}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-end'>
                        <div className='flex gap-2 justify-center items-center'>
                            <span
                                className={`text-xs font-medium text-[#c9c9cb] ${activeMessageThreadId === _id && 'text-white'}`}>12:43</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default memo(MessageCard)