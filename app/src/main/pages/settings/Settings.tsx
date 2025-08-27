import { DropListWithTitle } from "../../attributes/DropList"

const Settings = () => {
    return (
        <div className="settings">
            <DropListWithTitle values={["Выбор языка"]} dropListName={"Выберите язык"} />
        </div>
    )
}

export default Settings