import Menu from "../organisms/Menu";
import Conversations from "../organisms/Conversations";
import GroupInfo from "../organisms/GroupInfo";
import Threads from "../organisms/Threads";

const Landing = () => {
    return (
        <div className='flex mx-auto justify-center divide-x-2 h-[100vh]'>
            {/*<Menu/>*/}
            <Threads/>
            <Conversations/>
            <GroupInfo/>
        </div>
    )
}

export default Landing