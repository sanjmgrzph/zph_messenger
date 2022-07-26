import {useQuery} from "react-query";

export interface Contributor {
    memberId: string;
    username: string;
    name: string;
    role: string;
    createdAt: string;
    avatar: string;
    isPrimaryCsr?: boolean;
    isStarred?: boolean;
}

export interface Editor {
    memberId: string;
    username: string;
}

export interface Receiver {
    memberId: string;
    username: string;
    name: string;
    role: string;
    createdAt: string;
    avatar: string;
    isSeen: boolean;
}

export interface Message {
    _id: string;
    memberId: string;
    username: string;
    name: string;
    role: string;
    text: string;
    createdAt: string;
    avatar: string;
    receivers: Receiver[];
}

export interface IThread {
    _id: string;
    groupId: string;
    divisionId: string;
    status: string;
    role: string;
    totalUnreadMessage: number;
    contributors: Contributor[];
    editors: Editor[];
    message: Message;
}

const threads: IThread[] = [
    {
        "_id": "1658572470581-01",
        "groupId": "ZPH1",
        "divisionId": "DIV001",
        "status": "active", // ""active" | "inactive" | "mute" | "archived" ..
        "role": "CSR", // "CSR | "CARE_TEAM" | "MEMBER"
        "totalUnreadMessage": 3,
        "contributors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "sanjmgr",
                "name": "Sanjay Gharti",
                "role": "member",
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj",
                "name": "Dhiraj Tamang",
                "role": "csr",
                "isPrimaryCsr": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                "memberId": "1658572470581-rajan",
                "username": "rajan",
                "name": "Rajan Twanabashu",
                "role": "csr",
                "isPrimaryCsr": false,
                "isStarred": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            }
        ],
        "editors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "sanjmgr"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj"
            }
        ],
        "message": {
            "_id": "62037f6b7243ce3d42ef616a",
            "memberId": "1658572470581-sanjmgr",
            "username": "sanjmgr",
            "name": "Sanjay Gharti",
            "role": "member",
            "text": "hello, how are you?",
            "createdAt": "2022-02-09T08:46:35.109+00:00",
            "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
            "receivers": [
                {
                    "memberId": "1658572470581-dhiraj",
                    "username": "dhiraj",
                    "name": "Dhiraj Tamang",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    "isSeen": true
                },
                {
                    "memberId": "1658572470581-rajan",
                    "username": "rajan",
                    "name": "Rajan Twanabashu",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
                    "isSeen": false
                }
            ]
        }
    },
    {
        "_id": "1658572470581-02",
        "groupId": "ZPH1",
        "divisionId": "DIV001",
        "status": "active", // ""active" | "inactive" | "mute" | "archived" ..
        "role": "CSR", // "CSR | "CARE_TEAM" | "MEMBER"
        "totalUnreadMessage": 3,
        "contributors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "sunil",
                "name": "Sunil Gaha",
                "role": "member",
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj",
                "name": "Dhiraj Tamang",
                "role": "csr",
                "isPrimaryCsr": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                "memberId": "1658572470581-rajan",
                "username": "rajanstha",
                "name": "Rajan Stha",
                "role": "csr",
                "isPrimaryCsr": false,
                "isStarred": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            }
        ],
        "editors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "sunil"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj"
            }
        ],
        "message": {
            "_id": "62037f6b7243ce3d42ef616a",
            "memberId": "1658572470581-sanjmgr",
            "username": "rajanstha",
            "name": "Rajan Stha",
            "role": "member",
            "text": "hello, how are you?",
            "createdAt": "2022-02-09T08:46:35.109+00:00",
            "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
            "receivers": []
        }
    },
    {
        "_id": "1658572470581-03",
        "groupId": "ZPH1",
        "divisionId": "DIV001",
        "status": "active", // ""active" | "inactive" | "mute" | "archived" ..
        "role": "CSR", // "CSR | "CARE_TEAM" | "MEMBER"
        "totalUnreadMessage": 3,
        "contributors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "bijay",
                "name": "Bijay",
                "role": "member",
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj",
                "name": "Dhiraj Tamang",
                "role": "csr",
                "isPrimaryCsr": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                "memberId": "1658572470581-rajan",
                "username": "rajan",
                "name": "Rajan Twanabashu",
                "role": "csr",
                "isPrimaryCsr": false,
                "isStarred": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            }
        ],
        "editors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "rajan"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj"
            }
        ],
        "message": {
            "_id": "62037f6b7243ce3d42ef616a",
            "memberId": "1658572470581-sanjmgr",
            "username": "bijay",
            "name": "Bijay",
            "role": "member",
            "text": "hello, how are you?",
            "createdAt": "2022-02-09T08:46:35.109+00:00",
            "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
            "receivers": [
                {
                    "memberId": "1658572470581-dhiraj",
                    "username": "dhiraj",
                    "name": "Dhiraj Tamang",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    "isSeen": true
                },
                {
                    "memberId": "1658572470581-rajan",
                    "username": "rajan",
                    "name": "Rajan Twanabashu",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
                    "isSeen": false
                }
            ]
        }
    },
    {
        "_id": "1658572470581-04",
        "groupId": "ZPH1",
        "divisionId": "DIV001",
        "status": "active", // ""active" | "inactive" | "mute" | "archived" ..
        "role": "CSR", // "CSR | "CARE_TEAM" | "MEMBER"
        "totalUnreadMessage": 3,
        "contributors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "sanjmgr",
                "name": "Sanjay Gharti",
                "role": "member",
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj",
                "name": "Dhiraj Tamang",
                "role": "csr",
                "isPrimaryCsr": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                "memberId": "1658572470581-rajan",
                "username": "rajan",
                "name": "Suyog Mainali",
                "role": "csr",
                "isPrimaryCsr": false,
                "isStarred": true,
                "createdAt": "2022-02-09T08:46:35.109+00:00",
                "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            }
        ],
        "editors": [
            {
                "memberId": "1658572470581-sanjmgr",
                "username": "suyog"
            },
            {
                "memberId": "1658572470581-dhiraj",
                "username": "dhiraj"
            }
        ],
        "message": {
            "_id": "62037f6b7243ce3d42ef616a",
            "memberId": "1658572470581-sanjmgr",
            "username": "sanjmgr",
            "name": "Dhiraj Tamang",
            "role": "CSR",
            "text": "hello, how are you?",
            "createdAt": "2022-02-09T08:46:35.109+00:00",
            "avatar": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
            "receivers": [
                {
                    "memberId": "1658572470581-dhiraj",
                    "username": "suyog",
                    "name": "Suyog Mainali",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    "isSeen": true
                },
                {
                    "memberId": "1658572470581-rajan",
                    "username": "sanjmgr",
                    "name": "Sanjay Gharti",
                    "role": "csr",
                    "createdAt": "2022-02-09T08:46:35.109+00:00",
                    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
                    "isSeen": false
                }
            ]
        }
    }
]

export const useThreadQuery = (category: string, query?: string | number[]) => useQuery(['thread-query'], async (): Promise<IThread[]> => threads, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data: IThread[]) => category === 'MY_CHATS' ? data.filter(d => d.contributors.some(d => d.username == query)) : category === 'STARRED' ?
        data.filter(d => d.contributors.some(d => d.isStarred)) : category === 'UNREAD' ? data.filter(d => d.message.receivers.length < 1) : data
})