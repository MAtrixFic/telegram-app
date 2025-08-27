import Message from "./Message";
import { IIcon, Danger } from "../svg/Attributes";

interface ITitleProps {
    top: string,
    bottom?: string,
    message?: string,
    danger?: string
}

const Title = ({ top, bottom, message, danger }: ITitleProps) => {
    return (
        <div className='title-block'>
            <div className="title-block__text-container">
                <p className='title-block__text bold'>{top}</p>
                {bottom && <p className='title-block__text slim'>{bottom}</p>}
            </div>
            <div className="title-block__message-container">
                {message && < Message icon={<IIcon />} message={message} />}
                {danger && < Message icon={<Danger />} message={danger} />}
            </div>
        </div >
    );
};


export default Title;