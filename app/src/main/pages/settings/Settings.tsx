import { DropListWithTitle } from "../../attributes/DropList"
import CheckBox from "../../attributes/CheckBox"
import InputLabel from "../../attributes/InputLabel"

const Settings = () => {
    return (
        <div className="settings">
            <DropListWithTitle values={["Выбор языка"]} dropListName={"Выберите язык"} />
            <CheckBox text={'Я принимаю Условия использования сервиса GOLDAO и даю согласие на обработку персональных данных'} />
            <InputLabel value="Имя*" mode="black" type={"none"}/>
        </div>
    )
}

export default Settings