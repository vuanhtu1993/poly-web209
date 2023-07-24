import { createContext, useState } from 'react'
import Message from '../components/message'

type Props = {
    children?: React.ReactNode
}

export const MessageContext = createContext({} as any)

export default function MessageProvider({ children }: Props) {
    const [message, setMessage] = useState(null)

    return <MessageContext.Provider value={{ message, setMessage }}>
        {message && <Message content={message} />}
        {children}
    </MessageContext.Provider>
}