const defaultUrl = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

interface IProps {
    avatar?: string
    height?: string
    width?: string
}

const Avatar = ({avatar = defaultUrl, height = 'h-12', width = 'w-12'}: IProps) => {
    return (
        <div>
            <div
                className={`bg-gradient-to-tr from-emerald-400 via-fuchsia-600 to-violet-600 p-0.5 rounded-full`}>
                <div className='bg-white p-0.5 rounded-full'>
                    <img className={`rounded-full h-10 w-10`}
                         src={avatar}/>
                </div>
            </div>
        </div>

    )
}

export default Avatar