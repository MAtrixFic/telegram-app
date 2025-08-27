import type { ReactNode } from "react"

interface IMessageProps {
    message: string,
    icon: ReactNode
}
const Message = ({ message, icon }: IMessageProps) => {
    return (
        <div className="list__message">
            <div className="list__message-icon">
                {icon}
            </div>
            <div className="list__message-text">
                {message}
            </div>
        </div>
    )
}

export default Message