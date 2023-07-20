import { createContext, useState } from 'react'
import Message from '../components/message'

type MessageContextType = {
  state?: {
    type: string,
    message: string
  },
  setMessage?: (state: { type: string, message: string }) => void
}

export const MessageContext = createContext<MessageContextType>({})

type Props = {
  children?: React.ReactNode
}

const MessageProvider = ({ children }: Props) => {
  const [state, setMessage] = useState<{ type: string, message: string } | null>(null)
  return <MessageContext.Provider value={{ setMessage }}>
    {state && <Message content={state} />}
    {children}
  </MessageContext.Provider>
}

export default MessageProvider

