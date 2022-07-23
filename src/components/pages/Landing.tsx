import Menu from "../organisms/Menu";
import Conversations from "../organisms/Conversations";
import GroupInfo from "../organisms/GroupInfo";
import Threads from "../organisms/Threads";

const Landing = () => {
    return (
        <div className='flex'>
            <Menu/>
            <Threads/>
            <Conversations/>
            <GroupInfo/>
        </div>
    )
}

export default Landing