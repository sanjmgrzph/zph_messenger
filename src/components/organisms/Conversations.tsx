import ActionBar from "../atoms/ActionBar";
import Composer from "../atoms/Composer";
import Box from "../atoms/Box";

const Conversations = () => {
    return (
        <div className='w-[55%] flex flex-col gap-4 pb-4 relative'>
            <ActionBar/>
            <Box />
            <div className='flex justify-center'>
                <Composer />
            </div>
        </div>
    )
}

export default Conversations