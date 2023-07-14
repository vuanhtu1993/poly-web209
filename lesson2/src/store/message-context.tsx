import { createContext, useState } from 'react'
import Message from '../components/message'


export const MessageContext = createContext({} as any)

type Props = {
    children?: React.ReactNode
}

const MessageProvider = ({ children }: Props) => {
    const [message, setMessage] = useState<{ message: string, type: string } | null>(null)
    return <MessageContext.Provider value={{ message, setMessage }}>
        {message && <Message content={message} />}
        {children}
    </MessageContext.Provider>
}

export default MessageProvider