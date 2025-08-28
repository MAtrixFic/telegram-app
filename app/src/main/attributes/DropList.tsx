import { useState, type ReactNode } from "react";
import { AngleArrow, IIcon } from "../svg/Attributes";
interface IDropListWithTitleProps {
    label?: ReactNode,
    message?: string,
    dropListName?: string,
    values: string[],
    type?: "yellow" | "yellow-grey",
    icon?: ReactNode,
    name?: string,
}

const DropListWithTitle = ({ label, message, values = [''], type, icon, name }: IDropListWithTitleProps) => {
    const [activeIndex, setActiveIndex] = useState(name ? -1 : 0);
    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div className={`drop-list__with-title ${type ? type : ''}`} >
            {label && <div className="drop-list__label">
                {icon && icon}
                <label>
                    {label}
                </label>
            </div>}
            <button className="drop-list" onClick={() => setOpenPanel(!openPanel)}>
                <div className="drop-list__value-block">
                    {name && activeIndex == -1 ? name : values[activeIndex]}
                </div>
                <div className={`drop-list__arrow-block ${openPanel ? 'active' : 'passive'}`}>
                    <AngleArrow />
                </div>
            </button>
            {message && <div className="drop-list__message">
                <div className="drop-list__message-icon">
                    <IIcon />
                </div>
                <div className="drop-list__message-text">
                    {message}
                </div>
            </div>}
            {openPanel && <DropListPanel activeIndex={activeIndex} setActivePanel={setOpenPanel} setActiveIndex={setActiveIndex} elements={values} activePanel={openPanel} />}
        </div>
    )
}

interface IDropListPanelProps {
    elements: string[],
    setActiveIndex: (value: number) => void,
    setActivePanel: (value: boolean) => void;
    activePanel: boolean,
    activeIndex: number
}

const DropListPanel = ({ elements, setActiveIndex, activePanel, setActivePanel, activeIndex }: IDropListPanelProps) => {
    return (
        <div className={`drop-list-panel ${activePanel ? 'active' : 'passive'}`}>
            <ul className="drop-list-panel__list">
                {elements.map((v, i) =>
                    <li className={`drop-list-panel__element ${activeIndex == elements.indexOf(v) ? 'active' : ''}`} onClick={() => { setActiveIndex(i); setActivePanel(false) }}>
                        <span>{v}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
export { DropListWithTitle }