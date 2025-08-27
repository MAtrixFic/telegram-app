import { useState, type ReactNode } from "react";
import { AngleArrow, IIcon } from "../svg/Attributes";

interface IDropListProps {
    values: string[],
    activeIndex: number,
    onClick: <T>(params?: T) => void
}

const DropList = ({ values, activeIndex, onClick }: IDropListProps) => {
    return (
        <button className="drop-list" onClick={onClick}>
            <div className="drop-list__value-block">
                {values[activeIndex]}
            </div>
            <div className="drop-list__arrow-block">
                <AngleArrow />
            </div>
        </button>
    );
};

interface IDropListWithTitleProps {
    label?: string,
    message?: string,
    dropListName: string,
    values: string[],
    type?: "yellow" | "yellow-grey",
    icon?: ReactNode
}

const DropListWithTitle = ({ label, message, values, dropListName, type, icon }: IDropListWithTitleProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div className={`drop-list__with-title ${type ? type : ''}`}>
            {label && <div className="drop-list__label">
                {icon && icon}
                <label htmlFor="#one">
                    {label}
                </label>
            </div>}
            <DropList values={values} onClick={() => setOpenPanel(true)} activeIndex={activeIndex} />
            {message && <div className="drop-list__message">
                <div className="drop-list__message-icon">
                    <IIcon />
                </div>
                <div className="drop-list__message-text">
                    {message}
                </div>
            </div>}
            {openPanel && < DropListPanel name={dropListName} setActivePanel={setOpenPanel} setActiveIndex={setActiveIndex} elements={values} activePanel={openPanel} />}
        </div>
    )
}

interface IDropListPanelProps {
    name: string | ReactNode,
    elements: string[],
    setActiveIndex: (value: number) => void,
    setActivePanel: (value: boolean) => void;
    activePanel: boolean
}

const DropListPanel = ({ name, elements, setActiveIndex, activePanel, setActivePanel }: IDropListPanelProps) => {
    return (
        <div className={`drop-list-panel ${activePanel ? 'active' : 'passive'}`}>
            <div className="drop-list-panel__name-container">
                <h3 className="drop-list-panel__name">
                    {name}
                </h3>
            </div>
            <ul className="drop-list-panel__list">
                {elements.map((v, i) =>
                    <li className="drop-list-panel__element" onClick={() => { setActiveIndex(i); setActivePanel(false) }}>
                        <span>{v}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DropList;
export { DropListWithTitle }