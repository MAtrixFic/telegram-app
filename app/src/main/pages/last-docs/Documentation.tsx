import { ButtonWithIcon } from "../../attributes/Buttons"
import { File1, File2, File3, File4 } from "../../svg/Attributes"

const Documentation = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <ButtonWithIcon name="Кратка информация о GOLDAO" icon={<File1 />} />
                <ButtonWithIcon name="Презентация GOLDAO для бизнеса" icon={<File2 />} />
                <ButtonWithIcon name="Примеры проведения расчетов с применением GOLDAO" icon={<File3 />} />
                <ButtonWithIcon name="Шаблоны проведения договоров и соглашений для проведения расчетов" icon={<File4 />} />
            </div>
        </div>
    )
}

export default Documentation