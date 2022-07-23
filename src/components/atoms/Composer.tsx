const Composer = () => {
    return (
        <div className='absolute bottom-4 bg-white border border-2 flex flex-col border-fuchsia-400 w-[95%] px-4 pb-3 rounded-lg'>
            <input type="text" name="jot_something" id="jot_something"
                className='w-full -mx-2 border-none focus:ring-0 focus:outline-none'
            />
            <div className="flex justify-between">
                <div className="flex gap-4 pl-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-forbid-2"
                         width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <line x1="9" y1="15" x2="15" y2="9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip"
                         width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy"
                         width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                        <path d="M8 13a4 4 0 1 0 8 0m0 0h-8"/>
                    </svg>
                </div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" className="crt8y2ji">
                    <path
                        d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                        fill="#0084ff"></path>
                </svg>
            </div>
        </div>
    )
}

export default Composer