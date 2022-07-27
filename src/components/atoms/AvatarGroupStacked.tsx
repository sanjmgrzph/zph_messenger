import {Fragment} from "react";

type Avatar = { size: number, contributor: string[] }

const AvatarGroupStacked = ({size = 4, contributor}: Avatar) => {
    return (
        <div className={`flex ${size > 4 ? "-space-x-2" : "-space-x-1"} overflow-hidden`}>
            {
                contributor.slice(0, 4).map((avatar: string, index: number) => (
                    <Fragment key={index}>
                        <img
                            className={`inline-block h-${size} w-${size} rounded-full ring-2 ring-white`}
                            src={avatar}
                            alt="#"
                        />
                    </Fragment>
                ))
            }

            {
                contributor.length > 4 && (
                    <div
                        className={`flex h-${size} w-${size} rounded-full ring-2 ring-white justify-center items-center bg-gray-200 text-xs font-normal text-gray-500`}>+{contributor.length - 4}
                    </div>
                )
            }


        </div>
    )
}


export default AvatarGroupStacked