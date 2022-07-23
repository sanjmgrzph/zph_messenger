import CallCard from "../atoms/CallCard";

const Caller = () => {
    return (
        <div className='flex flex-col gap-10'>
            {/*<div className='flex items-center justify-between px-6'>*/}
                <h3 className='font-medium text-xl text-black'>Calls</h3>
                {/*<span className='text-xs flex justify-center gap-2 font-medium items-center text-[#0477fd]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus"
                             width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0477fd" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="4" y="4" width="16" height="16" rx="2"/>
                          <line x1="9" y1="12" x2="15" y2="12"/>
                          <line x1="12" y1="9" x2="12" y2="15"/>
                        </svg>
                        New meet</span>
            </div>*/}

            <div className="flex flex-col gap-4 px-4">
                <CallCard active joined name='Friendly' text='Sara is talking...'/>
                <CallCard name='Product designers' text='Raya is talking...'/>
                <CallCard name='Dev Team' text='Jack is talking...'/>
            </div>
        </div>
    )
}

export default Caller