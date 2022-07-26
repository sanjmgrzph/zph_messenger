import create from 'zustand'
import {IThread} from "./services/ChatThreads";

export type Tab = "ALL_CHATS" | "MY_CHATS" | "STARRED" | "UNREAD"

interface IStore {
    defaultChatThread: IChatThread[]
    setDefaultChatThread: (threadIdToRemove: number[]) => void
    activeThreadTab: Tab
    setActiveThreadTab: (threadTab: Tab) => void
    activeMessageThreadId: number | string | undefined
    setActiveMessageThreadId: (threadId: number | string) => void
    searchQuery: string
    setSearchQuery: (searchQuery: string) => void
    threadReadable: string
    setThreadReadable: (searchQuery: string) => void
    selectedFilterOptionId: string
    filterOptions: Filter[]
    setFilterOptionsStatus: (filter: Filter) => void,
    isBulkRemove: boolean,
    setIsBulkRemove: () => void
    threadIdToRemove: (number | string)[],
    setThreadIdToRemove: (id: number | string) => void
    threads: IThread[]
    setThreads: (thread: IThread[]) => void
}

export interface IChatThread {
    id: number
    active: boolean
    pin: boolean
    check: boolean
    read: boolean
    mute: boolean
    notification: boolean
    name: string
    avatar: string
    text: string
    time: string
    thead: string
}

let defaultChatThread: IChatThread[] = [
    {
        id: 1,
        active: true,
        pin: false,
        check: false,
        read: true,
        mute: false,
        notification: true,
        name: "Kafka Tamura",
        avatar: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
        text: "A 15 year old from Tokyo who chooses the handle \"Kafka\" to hide his identity as he runs away from home. Kafka and his alter ego, The boy named Crow, flee to escape Kafka's father, renowned sculptor Koichi Tamura. It is prophesized that Kafka will kill his father and sleep with his mother and sister, who abandoned him when he was younger.",
        time: "12:33",
        thead: "chats"
    },
    {
        id: 2,
        active: false,
        pin: false,
        check: true,
        read: true,
        mute: false,
        notification: false,
        name: "Satoru Nakata",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "A kind, simple man around 70 years old, Nakata lost most of his mental faculties as a 4th grader in rural Japan during WWII. Although this strange incident during his childhood left him without much mental prowess, he somehow gained the ability to speak with cats.",
        time: "12:33",
        thead: "chats"
    },
    {
        id: 3,
        active: false,
        pin: false,
        check: false,
        read: false,
        mute: true,
        notification: false,
        name: "Miss Saek",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        text: "A graceful, elegant woman around 40-50 years old and manager of the Komura Memorial Library. The Komura family heir was her childhood sweetheart, but he was killed while they were in their 20's. Having lost her one true love, Miss Saeki lives a hollow life. As the story progresses, Kafka begins to see her as his mother.",
        time: "12:33",
        thead: "follow_up"
    },
    {
        id: 4,
        active: false,
        pin: true,
        check: false,
        read: true,
        mute: false,
        notification: false,
        name: "Oshima",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "A transgendered gay man, whom Kafka first mistakes for a woman, Oshima is the library assistant at the Komura Memorial Library. Around 21 years old, he quickly takes to Kafka and becomes somewhat of a mentor to him. He owns a cabin deep in the woods of Shikoku and is also a hemophiliac.",
        time: "12:33",
        thead: "chats"
    },
    {
        id: 5,
        active: false,
        pin: false,
        check: true,
        read: false,
        mute: false,
        notification: false,
        name: "Hoshino",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "A sleepy-looking trucker in his mid-twenties, Hoshino befriends Nakata after picking him up as a hitchhiker at a highway truck stop. Charmed by the old man, he abandons his job in order to help drive Nakata around on his journey throughout the novel.",
        time: "12:33",
        thead: "follow_up"
    },
    {
        id: 6,
        active: false,
        pin: true,
        check: false,
        read: false,
        mute: false,
        notification: false,
        name: "Sakura",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        text: "A young girl who Kafka befriends on the bus as he runs away from home. She helps him out in sticky situations and acts like an older sister to Kafka.",
        time: "12:33",
        thead: "chats"
    },
    {
        id: 7,
        active: false,
        pin: false,
        check: false,
        read: true,
        mute: false,
        notification: true,
        name: "Johnnie Walker",
        avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "This killer of neighborhood cats takes the form of the famous scotch mascot. He slaughters cats to make their souls into a magic flute. He occurs in several violent scenes in the book, and curiously, the time of his death concurs with the murder of Kafka's father.",
        time: "12:33",
        thead: "starred"
    },
    {
        id: 8,
        active: false,
        pin: false,
        check: true,
        read: true,
        mute: false,
        notification: false,
        name: "Colonel Sanders",
        avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "A \"concept\" that decides to take the form of the famous KFC mascot as he works nights as a hustler. Aware of Nakata and Hoshino's mission in the book, he befriends them and briefly acts as a guide.",
        time: "12:33",
        thead: "chats"
    },
    {
        id: 9,
        active: false,
        pin: false,
        check: false,
        read: false,
        mute: true,
        notification: false,
        name: "Mimi",
        avatar: "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Mimi is a Siamese cat. She helps translate between Kawamura and Nakata during the search for Goma.",
        time: "12:33",
        thead: "starred"
    },
    {
        id: 10,
        active: false,
        pin: false,
        check: false,
        read: false,
        mute: false,
        notification: false,
        name: "Haruki Murakami",
        avatar: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "He is attracted to her, but he worries, as he does with all women Sakura’s age, that she could be his long-lost sister. ",
        time: "12:33",
        thead: "starred"
    }
]

type Filter = { name: string, id: string, href: string, current: boolean }

const filterOptions: Filter[] = [
    {name: 'All Messages', id: 'ALL', href: '#', current: true},
    {name: 'Read Messages', id: 'READ', href: '#', current: false},
    {name: 'Unread Messages', id: 'UNREAD', href: '#', current: false},
]

const useStore = create<IStore>((set) => ({
    defaultChatThread,
    setDefaultChatThread: (threadIdToRemove: number[]) => set((state: IStore) => ({
        ...state,
        defaultChatThread: defaultChatThread.filter(filter => !threadIdToRemove.includes(filter.id))
    })),
    activeThreadTab: "ALL_CHATS",
    setActiveThreadTab: (threadTab: Tab) => set((state: IStore) => ({activeThreadTab: threadTab})),
    activeMessageThreadId: undefined,
    setActiveMessageThreadId: (threadId: number | string) => set((state: IStore) => ({activeMessageThreadId: threadId})),
    searchQuery: "",
    setSearchQuery: (searchQuery: string) => set((state: IStore) => ({searchQuery})),
    threadReadable: "",
    setThreadReadable: (threadReadable: string) => set((state: IStore) => ({threadReadable})),
    filterOptions,
    selectedFilterOptionId: "",
    setFilterOptionsStatus: (filter: Filter) => set((state: IStore) => ({
        filterOptions: filterOptions.map(option => ({
            ...option,
            current: filter.name === option.name,
        })),
        selectedFilterOptionId: filter.id
    })),
    isBulkRemove: false,
    setIsBulkRemove: () => set((state: IStore) => ({isBulkRemove: !state.isBulkRemove})),
    threadIdToRemove: [],
    setThreadIdToRemove: (id: number | string) => set((state: IStore) => ({
        ...state,
        threadIdToRemove: [...state.threadIdToRemove, id]
    })),
    threads: [],
    setThreads: (thread: IThread[]) => set((state: IStore) => ({threads: thread}))
}))

export default useStore