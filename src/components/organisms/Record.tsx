import Caller from "./Caller";
import Messenger from "./Messenger";

const Record = () => {
    return (
        <div className='w-[20%] gap-4 flex flex-col justify-between'>
            <div className='h-3/5 bg-white rounded-b-xl py-8 shadow-sm'>
                <Messenger/>
            </div>
            <div className='h-2/5 bg-white rounded-t-xl pt-8'>
                <Caller/>
            </div>
        </div>
    )
}

export default Record